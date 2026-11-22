'use client';

import { useState } from 'react';
import { SearchForm } from '@/components/molecules';
import { CATEGORIES } from '@/data/sites';

/** Interactive Search Form example for the design-system page. */
export function SearchFormDemo() {
  const [query, setQuery] = useState('Bolinao');
  const [category, setCategory] = useState('');
  return (
    <SearchForm
      query={query}
      category={category}
      categories={CATEGORIES}
      onQueryChange={setQuery}
      onCategoryChange={setCategory}
      onReset={() => { setQuery(''); setCategory(''); }}
      resultCount={query ? 2 : 8}
      total={8}
      idPrefix="demo"
    />
  );
}
