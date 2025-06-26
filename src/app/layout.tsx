import type { Metadata } from "next";
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tiana Ye | Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
