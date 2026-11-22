import { notFound } from 'next/navigation';
import { Heading, Text, Image, Button } from '@/components/atoms';
import { HeritageGrid } from '@/components/organisms';
import { SITES, getSite, getRelated, CATEGORY_ICON } from '@/data/sites';
import styles from './page.module.css';

// Static Site Generation: one HTML page per site is created at build time.
export function generateStaticParams() {
  return SITES.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const site = getSite(params.slug);
  if (!site) return {};
  return { title: site.name, description: site.summary };
}

export default function SitePage({ params }) {
  const site = getSite(params.slug);
  if (!site) notFound();
  const related = getRelated(site);

  return (
    <div className={`container ${styles.page}`}>
      <Button href="/" variant="ghost" size="sm" icon="arrowLeft" iconPosition="start" className={styles.back}>
        All heritage sites
      </Button>

      <article className={styles.layout}>
        <div className={styles.photoCard}>
          <Image
            src={site.image === false ? null : `/images/sites/${site.slug}`}
            alt={site.imageAlt}
            sizes="(min-width: 60rem) 640px, 100vw"
            priority
            placeholderIcon={CATEGORY_ICON[site.categories[0]]}
            className={styles.photo}
          />
        </div>

        <div className={styles.content}>
          <Text variant="accent">Heritage site in {site.town}</Text>
          <Heading level={1} variant="page">{site.name}</Heading>
          <Text variant="lead">{site.summary}</Text>

          <dl className={styles.facts}>
            <div className={styles.fact}><dt>Location</dt><dd>{site.location}</dd></div>
            <div className={styles.fact}><dt>Category</dt><dd>{site.categories.join(', ')}</dd></div>
            <div className={styles.fact}><dt>Ask at</dt><dd>{site.contact}</dd></div>
          </dl>

          <div className={styles.prose}>
            <Heading level={2} variant="section">About this place</Heading>
            {site.description.map((para) => <Text key={para.slice(0, 24)}>{para}</Text>)}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className={styles.related} aria-labelledby="related-title">
          <Heading level={2} variant="section" id="related-title">More places like this</Heading>
          <HeritageGrid sites={related} headingLevel={3} />
        </section>
      )}
    </div>
  );
}
