import { NextUIProvider } from '@nextui-org/react';
import MainLayout from 'components/layouts/MainLayout/MainLayout';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/font.css';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const ToastProvider = dynamic(
    () => import('components/wrappers/ToastWrapper/ToastWrapper'),
    {
        ssr: false,
    },
);

function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <MainLayout>
                <Component {...pageProps} />
                <ToastProvider />
            </MainLayout>
        </NextUIProvider>
    );
}

export default MyApp;
