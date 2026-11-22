import styles from './Typography.module.css';

/**
 * Typography (atoms): Heading and Text.
 * Keeps the type scale in one place. The visual size (`variant`) is separate
 * from the HTML level (`level`) so headings stay in a correct outline for
 * screen readers while looking the way the layout needs.
 *
 *   <Heading level={1} variant="display">Greetings from Pangasinan</Heading>
 *   <Heading level={2} variant="title">Cape Bolinao Lighthouse</Heading>
 *   <Text variant="lead">Short intro paragraph.</Text>
 */
export function Heading({ level = 2, variant = 'section', className = '', children, ...rest }) {
  const Tag = `h${level}`;
  return (
    <Tag className={`${styles.heading} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Text({ as: Tag = 'p', variant = 'body', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.text} ${styles[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
