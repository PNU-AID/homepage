import AidTop from '@/app/component/AidTop';
import Activity from '@/app/component/Activity';
import HistorySection from '@/app/component/HistorySection';
import AidLinks from '@/app/component/AidLinks';

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center">
      <main className="w-4/5 space-y-24 py-12 md:px-6 mx-auto md:w-full md:space-y-6 md:py-0">
        <AidTop />
        <Activity />
        <HistorySection />
        <AidLinks />
      </main>
    </div>
  );
}
