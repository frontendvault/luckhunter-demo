import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const oswald = Oswald({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});
// const orbit = Orbit({
//   subsets: ['latin'],
//   weight: ['400'],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${oswald.className} bg-gray-950`}>
        <Navbar />
        <main>  {children} </main>
        <Footer />


      </body>
    </html>
  );
}