import Link from 'next/link';
import { Heading, Text, Icon, Image } from '@/components/atoms';
import { CATEGORY_ICON } from '@/data/sites';
import styles from './HeritageCard.module.css';

/**
 * Heritage Card (molecule)
 * A heritage site shown as a postcard: photo in a white border, a postmark
 * stamp with the town, then the name, location, categories and a one-line
 * summary. The whole card is clickable through the title link (one link per
 * card, so screen-reader users hear each site once).
 *
 * Used only to preview tourist sites inside a Heritage Grid.
 *
 *   <HeritageCard site={site} headingLevel={3} priority={index === 0} />
 *
 * Responsive: the card measures its own width with a container query.
 * Narrow (< 34rem): photo on top. Wide (≥ 34rem): photo left, text right.
 */
export default function HeritageCard({ site, headingLevel = 3, priority = false }) {
  const href = `/sites/${site.slug}/`;
  const primary = site.categories[0];

  return (
    <article className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.media}>
          <Image
            src={site.image === false ? null : `/images/sites/${site.slug}`}
            alt={site.imageAlt}
            sizes="(min-width: 72rem) 360px, (min-width: 40rem) 50vw, 100vw"
            priority={priority}
            placeholderIcon={CATEGORY_ICON[primary]}
            className={styles.photo}
          />
          <span className={styles.postmark} aria-hidden="true">
            <Icon name={CATEGORY_ICON[primary]} size={14} />
            <span>{site.town}</span>
          </span>
        </div>

        <div className={styles.body}>
          <Heading level={headingLevel} variant="title" className={styles.title}>
            <Link href={href} className={styles.link}>{site.name}</Link>
          </Heading>
          <Text variant="small" className={styles.location}>
            <Icon name="pin" size={16} className={styles.pin} />
            {site.location}
          </Text>
          <ul className={styles.tags} aria-label="Categories">
            {site.categories.map((c) => (
              <li key={c} className={styles.tag}>
                <Icon name={CATEGORY_ICON[c]} size={13} />
                {c}
              </li>
            ))}
          </ul>
          <Text variant="small" className={styles.summary}>{site.summary}</Text>
        </div>
      </div>
    </article>
  );
}
