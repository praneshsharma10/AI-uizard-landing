import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uizard - Turn product ideas into concepts instantly with GenAI',
  description: 'Visualize, communicate, and iterate on wireframes and prototypes in minutes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0F0018]">
        {children}
      </body>
    </html>
  );
}