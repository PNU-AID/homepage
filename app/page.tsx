import AidTop from '@/app/component/AidTop';
import Activity from '@/app/component/Activity';
import HistorySection from '@/app/component/HistorySection';
import AidLinks from '@/app/component/AidLinks';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className="flex h-full w-full justify-center">
            <main className="mx-auto w-4/5 space-y-24 py-12 md:w-full md:space-y-6 md:px-6 md:py-0 2xl:w-lg-width">
                <Suspense>
                    <AidTop />
                </Suspense>
                <Suspense>
                    <Activity />
                </Suspense>
                <Suspense>
                    <HistorySection />
                </Suspense>
                <Suspense>
                    <AidLinks />
                </Suspense>
            </main>
        </div>
    );
}
