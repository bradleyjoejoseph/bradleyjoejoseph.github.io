import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Bradley Joe Joseph — Software Engineer',
  description: 'Portfolio of Bradley Joe Joseph — Backend Systems & AI at University of York.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="ambientGlow1"></div>
        <div className="ambientGlow2"></div>
        {children}
      </body>
    </html>
  );
}
