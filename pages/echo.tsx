import { useEffect, useState } from "react";

const PageEcho = () => {
  const [initData, setInitData] = useState("");
  useEffect(() => {
    setInitData((window as any)?.Telegram?.WebApp?.initData ?? "");
  }, []);
  return (
    <div>
      <textarea value={initData} />
    </div>
  );
};

export default PageEcho;
