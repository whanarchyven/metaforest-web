import { useUserGameFullState } from "../data/data-hooks";
import { AuthConnector } from "../components/auth-connector";

const StatsPage = () => {
  const [data] = useUserGameFullState();
  return (
    <div>
      <AuthConnector />
      <p>isActive: {data?.currentJob?.isActive ? "yes" : "no"}</p>
      <p>Carrots Earned: {data?.currentJob?.carrotsEarned}</p>
      <p>Meters Passed: {data?.currentJob?.metersPassed}</p>
    </div>
  );
};
export default StatsPage;
