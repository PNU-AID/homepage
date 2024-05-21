import Activity from "./component/activity";
import AidTop from "./component/aidtop";
import History from "./component/history";

export default function Home() {
  return (
    <main>
      <AidTop />
      <Activity />
      <History />
    </main>
  );
}
