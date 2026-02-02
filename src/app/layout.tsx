import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Falcon Tents',
  description: 'Premium shade solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
