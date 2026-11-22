import localFont from 'next/font/local';
import { HeaderNavigation } from '@/components/organisms';
import './globals.css';

// Self-hosted, subset WOFF2 (16 KB). next/font preloads it and uses
// font-display: swap, so text is never invisible while it loads.
const alfa = localFont({
  src: '../fonts/AlfaSlabOne-latin.woff2',
  variable: '--font-alfa',
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: {
    default: 'Pangasinan Heritage Digital Showcase',
    template: '%s | Pangasinan Heritage',
  },
  description:
    'Explore Pangasinan\'s heritage sites — the Hundred Islands, Cape Bolinao Lighthouse, Balungao Hot Spring and more. A fast, mobile-first guide.',
};

export const viewport = {
  themeColor: '#0e3a53',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={alfa.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <HeaderNavigation />
        <main id="main" tabIndex={-1}>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>The Pangasinan Heritage Digital Showcase is a student project for Elective 4 (Special Topics in IT). Site information is a summary for visitors; check with the local tourism office before you travel.</p>
            <p>Built with Next.js 14 as a static site.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
