import { COLOR_TOKENS } from './tokens';
import styles from './ColorTokens.module.css';

/**
 * Color Tokens (atom)
 * The palette lives in src/styles/tokens.css as CSS custom properties.
 * Components use `var(--color-gulf)` etc., never hex values, so changing a
 * token re-themes every component. This component renders the palette as
 * swatches for the design-system page.
 *
 *   color: var(--color-gulf);          // in any CSS module
 *   <ColorTokens />                    // swatch list
 */
export default function ColorTokens({ tokens = COLOR_TOKENS }) {
  return (
    <ul className={styles.grid}>
      {tokens.map((t) => (
        <li key={t.variable} className={styles.token}>
          <span className={styles.swatch} style={{ background: `var(${t.variable})` }} aria-hidden="true" />
          <span className={styles.meta}>
            <strong>{t.name}</strong>
            <code>{t.variable}</code>
            <span>{t.value} · {t.contrast}</span>
            <span className={styles.use}>{t.use}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
