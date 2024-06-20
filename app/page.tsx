import Activity from "./component/Activity";
import AidTop from "./component/Aidtop";
import History from "./component/History";

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
