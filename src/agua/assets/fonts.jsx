import { Roboto } from 'next/font/google';
import localFont from "next/font/local";
                
export const GoogleRoboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--Roboto'
});
export const IBMPlexSans_Light = localFont({
    src: "./fonts/IBMPlexSans-Light.undefined",
    display: 'swap',
    variable: "--IBMPlexSans_Light",
});
export const IBMPlexSans_Bold = localFont({
    src: "./fonts/IBMPlexSans-Bold.undefined",
    display: 'swap',
    variable: "--IBMPlexSans_Bold",
});
export const IBMPlexSans_Regular = localFont({
    src: "./fonts/IBMPlexSans-Regular.undefined",
    display: 'swap',
    variable: "--IBMPlexSans_Regular",
});

