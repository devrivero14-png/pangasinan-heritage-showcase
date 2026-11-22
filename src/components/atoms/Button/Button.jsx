import Link from 'next/link';
import Icon from '../Icon/Icon';
import styles from './Button.module.css';

/**
 * Button (atom)
 * One component for every call to action. Renders a <button>, or a link
 * when `href` is given (internal paths use next/link for client-side
 * navigation), so links look like buttons without losing link semantics.
 *
 *   <Button onClick={reset}>Clear search</Button>
 *   <Button href="/sites/casa-real/" variant="secondary" icon="arrowRight">Read more</Button>
 *
 * variant: 'primary' | 'secondary' | 'ghost'      size: 'md' | 'sm'
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'end',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [styles.button, styles[variant], styles[size], fullWidth ? styles.full : '', className].join(' ');
  const content = (
    <>
      {icon && iconPosition === 'start' && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <Icon name={icon} size={18} />}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a href={href} className={cls} {...rest}>{content}</a>
    ) : (
      <Link href={href} className={cls} {...rest}>{content}</Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
