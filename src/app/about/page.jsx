import { Heading, Text, Button } from '@/components/atoms';

export const metadata = {
  title: 'About',
  description: 'How the Pangasinan Heritage Digital Showcase is built: fast, mobile-first, accessible and static.',
};

const GOALS = [
  ['Lightning fast', 'Static HTML, about 90 KB of JavaScript, photos in WebP sized to the screen (about 10–80 KB each on phones), one 16 KB font file and no third-party scripts.'],
  ['Mobile-first', 'Styles start from a 320px phone and add layout as space allows. Cards respond to their container, not only the screen.'],
  ['Maintainable', 'Atomic Design: atoms, molecules and organisms in src/components, with all content in src/data/sites.js.'],
  ['Accessible', 'Built to WCAG 2.1 AA: text contrast of at least 4.5 : 1, keyboard focus outlines, a skip link, labelled form fields, alt text and 44px touch targets.'],
  ['Deployable', 'Next.js static export creates plain files in out/ that GitHub Pages serves directly.'],
];

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-6)', display: 'grid', gap: 'var(--space-5)', maxWidth: '48rem', marginInline: 'auto' }}>
      <Text variant="accent">About the project</Text>
      <Heading level={1} variant="page">A heritage guide that loads on any connection</Heading>
      <Text variant="lead">
        The Pangasinan Provincial Tourism Office wants more people to discover the province&apos;s heritage sites.
        Many visitors browse on mobile data, so this showcase is built to stay quick and usable on 3G and 4G.
      </Text>
      <dl style={{ display: 'grid', gap: 'var(--space-4)', margin: 0 }}>
        {GOALS.map(([term, text]) => (
          <div key={term} style={{ display: 'grid', gap: 'var(--space-1)', padding: 'var(--space-4)', background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-lg)' }}>
            <dt style={{ fontWeight: 750, color: 'var(--color-gulf)' }}>{term}</dt>
            <dd style={{ margin: 0 }}>{text}</dd>
          </div>
        ))}
      </dl>
      <div><Button href="/design-system/" variant="secondary" icon="arrowRight">See the design system</Button></div>
    </div>
  );
}
