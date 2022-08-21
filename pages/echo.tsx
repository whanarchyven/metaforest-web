import { useEffect, useState } from "react";
import Script from "next/script";

const PageEcho = () => {
  const [initData, setInitData] = useState("No init data");
  useEffect(() => {
    const data = (window as any)?.Telegram?.WebApp?.initData;
    setInitData(data);
  });
  return (
    <div>
      Init Data:
      <pre>{initData}</pre>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
    </div>
  );
};

export default PageEcho;
