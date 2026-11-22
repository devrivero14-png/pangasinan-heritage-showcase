import { Heading, Text, Button, Icon, ICON_NAMES, Image, ColorTokens } from '@/components/atoms';
import { HeritageCard, NavItem } from '@/components/molecules';
import { HeritageGrid, HeaderNavigation } from '@/components/organisms';
import { SITES, getSite } from '@/data/sites';
import { SearchFormDemo } from './Demos';
import styles from './page.module.css';

export const metadata = {
  title: 'Design system',
  description: 'The Atomic Design component library behind the Pangasinan Heritage Digital Showcase.',
};

function Component({ id, name, children, description }) {
  return (
    <section className={styles.component} id={id} aria-labelledby={`${id}-title`}>
      <Heading level={3} variant="section" id={`${id}-title`}>{name}</Heading>
      <Text variant="small">{description}</Text>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  const falls = getSite('bolinao-falls');
  const lighthouse = getSite('cape-bolinao-lighthouse');

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.intro}>
        <Text variant="accent">Atomic Design</Text>
        <Heading level={1} variant="page">Design system</Heading>
        <Text variant="lead">
          Every part of this site is built from the components below: atoms combine into molecules, and
          molecules into organisms. Pages only arrange organisms.
        </Text>
      </div>

      {/* ---------------- ATOMS ---------------- */}
      <div className={styles.level}>
        <div className={styles.levelHead}>
          <Heading level={2} variant="page">Atoms</Heading>
          <Text variant="small">The smallest building blocks. They know nothing about heritage sites.</Text>
        </div>

        <Component id="color-tokens" name="Color tokens" description="CSS custom properties in src/styles/tokens.css. Components reference tokens, never raw hex values.">
          <div className={styles.preview}><ColorTokens /></div>
        </Component>

        <Component id="typography" name="Typography" description="Heading (display, page, section, title) and Text (lead, body, small, accent). The HTML level and the visual variant are set separately.">
          <div className={`${styles.preview} ${styles.previewWhite} ${styles.stack}`}>
            <Text variant="accent">Accent text</Text>
            <Heading level={4} variant="display">Display heading</Heading>
            <Heading level={4} variant="page">Page heading</Heading>
            <Heading level={4} variant="section">Section heading</Heading>
            <Heading level={4} variant="title">Title heading</Heading>
            <Text variant="lead">Lead text introduces a page in one or two sentences.</Text>
            <Text>Body text is set at 16px with a 1.6 line height and a 68-character line length for comfortable reading on any screen.</Text>
            <Text variant="small">Small text is used for captions and secondary details.</Text>
          </div>
        </Component>

        <Component id="buttons" name="Button" description="Primary, secondary and ghost variants in two sizes. Renders a link when given an href. All buttons are at least 44px tall.">
          <div className={`${styles.preview} ${styles.row}`}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm" icon="arrowRight">Small with icon</Button>
            <Button variant="secondary" icon="arrowLeft" iconPosition="start">Back</Button>
          </div>
        </Component>

        <Component id="icons" name="Icon" description="Inline SVG icons, sized with the size prop and coloured with currentColor. Decorative by default; pass a title to make an icon meaningful.">
          <div className={styles.preview}>
            <ul className={styles.icons}>
              {ICON_NAMES.map((n) => (
                <li key={n}><Icon name={n} size={24} /><code>{n}</code></li>
              ))}
            </ul>
          </div>
        </Component>

        <Component id="image" name="Image" description="Responsive WebP photo (480, 960 and 1440 px wide) with a fixed aspect ratio, lazy loading and a placeholder when no photo exists.">
          <div className={`${styles.preview} ${styles.imageDemo}`}>
            <figure>
              <Image src="/images/sites/tayug-sunflower-eco-park" alt="A maze of sunflower hedges in a wide green field" sizes="16rem" className={styles.rounded} />
              <figcaption>Photo, 3 : 2</figcaption>
            </figure>
            <figure>
              <Image src="/images/sites/bolinao-falls" alt="Waterfall framed by tall tropical trees" sizes="16rem" ratio="1 / 1" className={styles.rounded} />
              <figcaption>Photo, 1 : 1</figcaption>
            </figure>
            <figure>
              <Image src={null} alt="" placeholderIcon="landmark" className={styles.rounded} />
              <figcaption>Placeholder (no photo yet)</figcaption>
            </figure>
          </div>
        </Component>
      </div>

      {/* ---------------- MOLECULES ---------------- */}
      <div className={styles.level}>
        <div className={styles.levelHead}>
          <Heading level={2} variant="page">Molecules</Heading>
          <Text variant="small">Small groups of atoms with one job each.</Text>
        </div>

        <Component id="heritage-card" name="Heritage Card" description="Postcard preview of one site. Narrow: photo on top. When its container is 34rem or wider, the photo moves to the left.">
          <div className={`${styles.preview} ${styles.cardDemo}`}>
            <HeritageCard site={falls} headingLevel={4} />
          </div>
          <div className={`${styles.preview} ${styles.wideDemo}`}>
            <HeritageCard site={lighthouse} headingLevel={4} />
          </div>
        </Component>

        <Component id="search-form" name="Search Form" description="Search box and category select. Controlled by its parent; announces the result count to screen readers.">
          <div className={styles.preview}><SearchFormDemo /></div>
        </Component>

        <Component id="nav-item" name="Navigation Item" description="One menu link. The current page gets aria-current=&quot;page&quot; and the soft sunset background.">
          <div className={styles.preview}>
            <ul className={styles.navDemo} aria-label="Navigation item examples">
              <NavItem href="/design-system/" active>Current page</NavItem>
              <NavItem href="/about/">Other page</NavItem>
            </ul>
          </div>
        </Component>
      </div>

      {/* ---------------- ORGANISMS ---------------- */}
      <div className={styles.level}>
        <div className={styles.levelHead}>
          <Heading level={2} variant="page">Organisms</Heading>
          <Text variant="small">Complete sections of a page, built from molecules.</Text>
        </div>

        <Component id="header-navigation" name="Header Navigation" description="Site name and main menu. Collapses behind a Menu button under 48rem; inline links from 48rem.">
          <div className={styles.headerDemo}>
            <HeaderNavigation label="Example" menuId="demo-menu" />
          </div>
        </Component>

        <Component id="heritage-grid" name="Heritage Grid" description="Responsive grid of Heritage Cards, optionally with a Search Form that filters it live.">
          <div className={styles.preview}>
            <HeritageGrid sites={SITES.slice(0, 3)} headingLevel={4} idPrefix="demo-grid" />
          </div>
        </Component>
      </div>
    </div>
  );
}
