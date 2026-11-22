import { asset } from '@/lib/asset';
import Icon from '../Icon/Icon';
import styles from './Image.module.css';

const WIDTHS = [480, 720, 960, 1440];

/**
 * Image (atom)
 * Responsive, bandwidth-friendly photo for a heritage site.
 *  - WebP at four widths (480, 720, 960, 1440) with `srcset`/`sizes`, so a phone downloads
 *    a 10–80 KB version and only large screens fetch the bigger files.
 *  - Fixed aspect ratio (default 3:2) reserves space before the image loads,
 *    which prevents layout shift (good CLS).
 *  - Lazy-loaded unless `priority` is set (use it for the first visible image).
 *  - `src={null}` shows a branded placeholder instead of a broken image.
 *
 *   <Image src="/images/sites/bolinao-falls" alt="Waterfall framed by trees"
 *          sizes="(min-width: 64rem) 33vw, 100vw" />
 */
export default function Image({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  ratio = '3 / 2',
  placeholderIcon = 'landmark',
  className = '',
}) {
  if (!src) {
    return (
      <div className={`${styles.frame} ${styles.placeholder} ${className}`} style={{ aspectRatio: ratio }}>
        <Icon name={placeholderIcon} size={36} />
        <span>Photo coming soon</span>
      </div>
    );
  }

  const srcSet = WIDTHS.map((w) => `${asset(`${src}-${w}.webp`)} ${w}w`).join(', ');
  return (
    <div className={`${styles.frame} ${className}`} style={{ aspectRatio: ratio }}>
      <img
        className={styles.img}
        src={asset(`${src}-720.webp`)}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={720}
        height={480}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </div>
  );
}
