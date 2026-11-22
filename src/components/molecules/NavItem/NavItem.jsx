import Link from 'next/link';
import styles from './NavItem.module.css';

/**
 * Navigation Item (molecule)
 * One link in the Header Navigation. Marks the current page with
 * aria-current="page" so the active state is announced, not just coloured.
 *
 *   <NavItem href="/about/" active={pathname === '/about/'}>About</NavItem>
 *
 * Responsive: full-width row with a large tap area inside the mobile menu;
 * compact pill inside the desktop header (styled by the `layout` prop).
 */
export default function NavItem({ href, active = false, layout = 'bar', onNavigate, children }) {
  return (
    <li className={`${styles.item} ${styles[layout]}`}>
      <Link
        href={href}
        className={styles.link}
        aria-current={active ? 'page' : undefined}
        onClick={onNavigate}
      >
        {children}
      </Link>
    </li>
  );
}
