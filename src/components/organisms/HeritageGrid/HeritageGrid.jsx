'use client';

import { useMemo, useState } from 'react';
import { HeritageCard, SearchForm } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';
import Button from '@/components/atoms/Button/Button';
import { CATEGORIES } from '@/data/sites';
import styles from './HeritageGrid.module.css';

/** Does a site match the free-text query? Checks name, town, location, categories, summary. */
export function matchesQuery(site, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [site.name, site.town, site.location, site.summary, ...site.categories]
    .some((v) => v.toLowerCase().includes(q));
}

/**
 * Heritage Grid (organism)
 * A responsive grid of Heritage Cards. With `searchable`, a Search Form sits
 * above the grid and filters it live by text and category, with an empty
 * state when nothing matches.
 *
 *   <HeritageGrid sites={SITES} searchable />          // home page
 *   <HeritageGrid sites={related} headingLevel={3} />  // "More places" on a detail page
 *
 * Responsive: CSS Grid with `auto-fill, minmax(min(100%, 18rem), 1fr)` —
 * 1 column on phones, 2 on tablets, 3 on desktops, with no breakpoints to
 * maintain. Without JavaScript every site is still listed (the server-rendered
 * HTML contains all cards); search is an enhancement.
 */
export default function HeritageGrid({ sites, searchable = false, headingLevel = 3, priorityFirst = false, idPrefix = 'site' }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const shown = useMemo(
    () => sites.filter((s) => matchesQuery(s, query) && (!category || s.categories.includes(category))),
    [sites, query, category],
  );
  const reset = () => { setQuery(''); setCategory(''); };

  return (
    <div className={styles.wrap}>
      {searchable && (
        <SearchForm
          query={query}
          category={category}
          categories={CATEGORIES}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
          onReset={reset}
          resultCount={shown.length}
          total={sites.length}
          idPrefix={idPrefix}
        />
      )}

      {shown.length > 0 ? (
        <ul className={styles.grid}>
          {shown.map((site, i) => (
            <li key={site.slug} className={styles.cell}>
              <HeritageCard site={site} headingLevel={headingLevel} priority={priorityFirst && i === 0} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <Heading level={headingLevel} variant="section">No sites match your search</Heading>
          <Text variant="small">Try another name, town or category, or clear the filters to see all sites.</Text>
          <Button variant="secondary" onClick={reset}>Show all sites</Button>
        </div>
      )}
    </div>
  );
}
