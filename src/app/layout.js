import { Inter } from "next/font/google";
<script
  src="https://kit.fontawesome.com/76a5083201.js"
  crossorigin="anonymous"></script>;
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Divyam Raj Singh's Portfolio",
  description: "The official website of Divyam Raj Singh from India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
