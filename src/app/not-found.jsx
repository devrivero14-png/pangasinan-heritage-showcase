import { Heading, Text, Button } from '@/components/atoms';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-8)', display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
      <Heading level={1} variant="page">This page isn&apos;t on the map</Heading>
      <Text>The address may be mistyped, or the page may have moved.</Text>
      <Button href="/" icon="arrowLeft" iconPosition="start">Back to all heritage sites</Button>
    </div>
  );
}
