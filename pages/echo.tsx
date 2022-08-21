import { useEffect, useState } from "react";
import Script from "next/script";

const PageEcho = () => {
  const [initData, setInitData] = useState("No init data");
  useEffect(() => {
    const data = (window as any)?.Telegram?.WebApp?.initData;
    if (data) setInitData(data);
  }, []);
  return (
    <div>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <textarea value={initData} className={"w-full h-56"} />
    </div>
  );
};

export default PageEcho;
