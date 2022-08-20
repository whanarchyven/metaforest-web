FROM node:lts as prepare_base

ARG CHANNEL=production
ARG CI_COMMIT_BRANCH=undefined

ENV DEBIAN_FRONTEND="noninteractive" \
    PROJECT="meta-forest" \
    SUBPROJECT="web-app" \
    CI_COMMIT_BRANCH="${CI_COMMIT_BRANCH}" \
    CHANNEL="${CHANNEL}"

LABEL project="${PROJECT}" \
    subproject="${SUBPROJECT}" \
    channel="${CHANNEL}" \
    stage="prepare"

ENV APP_PATH="/opt/${PROJECT}/${SUBPROJECT}" \
    APP_PROJECT_ID="${PROJECT}-${SUBPROJECT}" \
    APP_PORT=3000 \
    APP_USER_NAME="appserver-user" \
    APP_GROUP_NAME="appserver-group" \
    APP_GROUP_ID=1500 \
    APP_USER_ID=1500

RUN mkdir -p "${APP_PATH}/node_modules/.bin" \
    && groupadd -g "${APP_GROUP_ID}" "${APP_GROUP_NAME}" \
    && useradd -u "${APP_USER_ID}" -d "${APP_PATH}" -g "${APP_GROUP_NAME}" "${APP_USER_NAME}" \
    && chown -R "${APP_USER_NAME}":"${APP_GROUP_NAME}" "${APP_PATH}"

USER "${APP_USER_NAME}"

WORKDIR "${APP_PATH}"

ENV PATH="${PATH}:${APP_PATH}/node_modules/.bin"

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    ".eslintrc.json", \
    "next-env.d.ts", \
    "next.config.js", \
    "postcss.config.js" ,\
    "tailwind.config.js", \
    "tsconfig.json", \
    "${APP_PATH}/" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "package.json", \
    "yarn.lock", \
    "${APP_PATH}/" \
]

FROM prepare_base as prepare_build_deps

RUN yarn install \
    --non-interactive \
    --production=false \
    --frozen-lockfile \
    --network-timeout 1000000 \
    && yarn cache clean

FROM prepare_base as prepare_works_deps

RUN yarn install \
    --non-interactive \
    --production=true \
    --frozen-lockfile \
    --network-timeout 1000000 \
    && yarn cache clean

FROM prepare_build_deps as prepare_build_source

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "components/", \
    "${APP_PATH}/components" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "data/", \
    "${APP_PATH}/data" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "graphql/", \
    "${APP_PATH}/graphql" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "pages/", \
    "${APP_PATH}/pages" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "public/", \
    "${APP_PATH}/public" \
]

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
[    \
    "styles/", \
    "${APP_PATH}/styles" \
]

FROM prepare_build_source as build

RUN ["yarn","run","build"]

FROM prepare_works_deps as work

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
    "public/" "${APP_PATH}/public"

COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
    --from="build" \
    "${APP_PATH}/.next" "${APP_PATH}/.next"

# FROM prepare_base as prepare_deps_install

# RUN mkdir -p "${APP_PATH}/.tmp/" \
#     && cd "${APP_PATH}/"  \
#     && find ./graphql -name '*.gql' \! -path '*\.vscode*' \! -path '*/node_modules/*' | xargs cp --parents -t "../.tmp/graphql"

# FROM prepare_deps_install as prepare_build_deps

# COPY --chown="${APP_USER_NAME}:${APP_GROUP_NAME}" \
#     --from="prepare_build_source" \
#     "${APP_PATH}/.tmp/" "${APP_PATH}/"

WORKDIR "${APP_PATH}/"

CMD ["yarn","run","start"]

LABEL stage="work"
ENV SERVICE="frontend" \
    APP_SERVICE_ID="${SERVICE}" \
    APP_PROJECT_ID="${PROJECT}-${SUBPROJECT}"

ARG CI_COMMIT_SHA=undefined
ENV CI_COMMIT_SHA="${CI_COMMIT_SHA}"
LABEL service="${SERVICE}" \
    CI_COMMIT_SHA="${CI_COMMIT_SHA}"
