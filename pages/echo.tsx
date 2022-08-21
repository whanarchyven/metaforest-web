import { useEffect, useState } from "react";
import Script from "next/script";

const PageEcho = () => {
  const [initData, setInitData] = useState("No init data");
  useEffect(() => {
    setInitData((window as any)?.Telegram?.WebApp?.initData ?? "");
  }, []);
  return (
    <div>
      <Script src="https://telegram.org/js/telegram-web-app.js" />
      <textarea value={initData} className={"w-full h-full"} />
    </div>
  );
};

export default PageEcho;
