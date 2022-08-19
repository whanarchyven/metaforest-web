import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { sdk } from "../graphql/sdk";

export const AuthConnector = () => {
  useEffect(() => {
    const telegramInitData =
      (window as any)?.Telegram?.WebApp?.initData ||
      "query_id=AAEvBg0AAAAAAC8GDQCti9A0&user=%7B%22id%22%3A853551%2C%22first_name%22%3A%22Nick%22%2C%22last_name%22%3A%22Erlan%22%2C%22username%22%3A%22nickolaierlan%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%7D&auth_date=1660076083&hash=7e75b96b1b650e545333d7053bc3b2826cb250ec5cf37d7a4c03e66538ddfa88";
    if (!telegramInitData) {
      // alert('error: no init data')
      return;
    }
    // if (!localStorage.getItem('token'))
    sdk()
      .createOrFindUserViaTelegramInitData({ telegramInitData })
      .then((d) => {
        // alert((JSON.stringify(d)))
        const extToken = localStorage.getItem("token");
        const token = d?.createOrFindUserViaTelegramInitData;
        if (token) localStorage.setItem("token", token);
        if (token && extToken !== token) {
          // document.location.reload();
        }
      })
      .catch((e) => alert(JSON.stringify(e?.response)));
  }, []);
  return (
    <div>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
    </div>
  );
};
