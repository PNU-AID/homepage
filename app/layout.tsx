import type { Metadata } from 'next';
import { Baloo_Bhai_2, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Footer from '@/app/component/Footer';
import Navi from '@/app/component/Navi';
import { Suspense } from 'react';
import { AID_WEB_URL } from '@/app/constants/link';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });
const balooBhai = Baloo_Bhai_2({
    subsets: ['latin'],
    variable: '--Baloo',
});

export const metadata: Metadata = {
    title: '인공지능 동아리, AID',
    description: '부산대학교 인공지능 동아리 AID입니다.',
    keywords: '부산대학교, 인공지능, 동아리, AID',
    openGraph: {
        title: '인공지능 동아리, AID',
        description: '부산대학교 인공지능 동아리 AID입니다.',
        siteName: '센디 드라이버',
        url: AID_WEB_URL,
        type: 'website',
    },
    robots: {
        index: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${notoSansKr.className} ${balooBhai.variable}`}>
                <Suspense>
                    <Navi />
                </Suspense>
                <div className="mt-16">
                    {children}
                    <Suspense>
                        <Footer />
                    </Suspense>
                </div>
            </body>
        </html>
    );
}
