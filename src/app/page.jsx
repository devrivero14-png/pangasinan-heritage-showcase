import { Heading, Text, Image } from '@/components/atoms';
import { HeritageGrid } from '@/components/organisms';
import { SITES } from '@/data/sites';
import styles from './page.module.css';

export default function HomePage() {
  const towns = new Set(SITES.map((s) => s.town)).size;

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <Text variant="accent">The Pangasinan Heritage Digital Showcase</Text>
            <Heading level={1} variant="display" id="hero-title">Greetings from Pangasinan</Heading>
            <Text variant="lead">
              From the islands of the Lingayen Gulf to the pilgrim church of Manaoag: {SITES.length} heritage
              sites across {towns} towns, gathered in one place for visitors and locals.
            </Text>
          </div>
          <figure className={styles.postcard} aria-hidden="true">
            <Image
              src="/images/sites/hundred-islands"
              alt=""
              sizes="26rem"
              className={styles.postcardPhoto}
            />
            <figcaption>Hundred Islands, Alaminos</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="sites-title">
        <div className="container">
          <div className={styles.sectionHead}>
            <Heading level={2} variant="page" id="sites-title">Heritage sites</Heading>
            <Text variant="small">Search by name or town, or pick a category.</Text>
          </div>
          <HeritageGrid sites={SITES} searchable priorityFirst headingLevel={3} />
        </div>
      </section>
    </>
  );
}
