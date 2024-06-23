import AidTop from '@/app/component/aidtop';
import Activity from '@/app/component/activity';
import HistorySection from '@/app/component/history';


export default function Home() {
  return (
    <div className="flex w-full h-full justify-center">
      <main className="w-4/5 space-y-24 py-12 md:px-6 mx-auto md:w-full md:space-y-6 md:py-0">
        <AidTop />
        <Activity />
        <HistorySection />
      </main>
    </div>
  );
}
