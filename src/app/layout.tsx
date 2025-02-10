import type { Metadata } from "next";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";  
// import "owl.carousel/dist/assets/owl.theme.default.css";


import Link from 'next/link';
// import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./../../public/css/bootstrap.min.css";
// import "./../../public/css/style.css";
// import "./../../public/lib/lightbox/css/lightbox.min.css";
// import "/lib/owlcarousel/assets/owl.carousel.min.css";


// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

import Preloader from "@/components/Preloader";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Fruitables Next App",
//   description: "Fruitables Ecommerce store generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">

      <head>
        {/* <meta charset="utf-8" /> */}
        {/* <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" /> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <Link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet" /> 

        <Link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <Link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        {/* <Link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" /> */}
        
        {/* <Link href="/css/bootstrap.min.css" rel="stylesheet" /> */}
        <Link href="css/style.css" rel="stylesheet" />

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Preloader /> */}
        <Header />
        
        
        <div>{children}</div>
        <Footer />

        {/* Load script from public folder */}
        {/* <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" /> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="lib/easing/easing.min.js" strategy="beforeInteractive" />
        <Script src="lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
        <Script src="lib/lightbox/js/lightbox.min.js" strategy="beforeInteractive" /> */}
        {/* <Script src="owl.carousel/dist/owl.carousel.min.js" strategy="beforeInteractive" /> */}
        {/* <Script src="js/main.js" strategy="beforeInteractive" /> */}

      </body>

    </html>
  );
}
