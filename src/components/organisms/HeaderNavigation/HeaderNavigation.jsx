'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/atoms';
import { NavItem } from '@/components/molecules';
import styles from './HeaderNavigation.module.css';

/** Pages listed in the main navigation. Add a page here to add it to the menu. */
export const NAV_LINKS = [
  { href: '/', label: 'Heritage sites' },
  { href: '/design-system/', label: 'Design system' },
  { href: '/about/', label: 'About' },
];

/**
 * Header Navigation (organism)
 * Site name plus the main menu, built from Nav Items. Appears once, at the
 * top of every page (rendered by the root layout).
 *
 * Responsive:
 *  - Under 48rem: the links collapse behind a "Menu" button
 *    (aria-expanded / aria-controls). The menu closes on navigation and Esc.
 *  - From 48rem: the links sit inline next to the site name; the button hides.
 *  - The header is sticky so navigation is always one tap away.
 */
export default function HeaderNavigation({ links = NAV_LINKS, label = 'Main', menuId = 'main-menu' }) {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' || pathname.startsWith('/sites/') : pathname.startsWith(href);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.seal} aria-hidden="true">PH</span>
          <span className={styles.brandText}>
            Pangasinan Heritage
            <span className={styles.brandSub}>Digital Showcase</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
          <span>Menu</span>
        </button>

        <nav aria-label={label} className={`${styles.nav} ${open ? styles.open : ''}`} id={menuId}>
          <ul className={styles.list}>
            {links.map((l) => (
              <NavItem
                key={l.href}
                href={l.href}
                active={isActive(l.href)}
                layout={open ? 'menu' : 'bar'}
                onNavigate={() => setOpen(false)}
              >
                {l.label}
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
