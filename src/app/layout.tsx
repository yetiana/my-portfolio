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
      <body className="bg-gradient-to-br from-blue-50 to-blue-600 text-gray-800 min-h-screen scroll-smooth">
        <Navbar />
        <main>{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 bg-[#bfdbf7]">
          © {new Date().getFullYear()} Tiana Ye. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
