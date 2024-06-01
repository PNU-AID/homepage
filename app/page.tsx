import Activity from "./component/activity";
import AidTop from "./component/aidtop";
import History from "./component/history";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="w-4/5 space-y-24 py-12">
        <AidTop />
        <Activity />
        <History />
      </main>
    </div>
  );
}
