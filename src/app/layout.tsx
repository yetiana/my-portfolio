import '../styles/globals.css';
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
      <body className="bg-[#bfdbf7] min-h-screen scroll-smooth">
        <Navbar />
        <div className="w-full min-h-screen flex justify-center items-start py-10 px-4 lg:px-8">
          <div className="w-full max-w-6xl rounded-3xl bg-[#f5ecd7] shadow-xl px-8 lg:px-16 py-10">
            <main>{children}</main>
            <footer className="text-center text-sm text-gray-500 py-6 bg-transparent">
              © {new Date().getFullYear()} Tiana Ye. All rights reserved.
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
