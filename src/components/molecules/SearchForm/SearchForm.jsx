import { Icon } from '@/components/atoms';
import Button from '@/components/atoms/Button/Button';
import styles from './SearchForm.module.css';

/**
 * Search Form (molecule)
 * A labelled search box plus a category select. It is "controlled": it
 * holds no state itself and reports changes to its parent (the Heritage
 * Grid), which does the filtering. The result count is announced to screen
 * readers through a polite live region.
 *
 *   <SearchForm query={q} category={cat} categories={CATEGORIES}
 *               onQueryChange={setQ} onCategoryChange={setCat}
 *               resultCount={3} total={8} onReset={reset} />
 *
 * Responsive: fields stack on phones; from 40rem the search box and
 * category select share one row (search takes the remaining width).
 */
export default function SearchForm({
  query,
  category,
  categories,
  onQueryChange,
  onCategoryChange,
  onReset,
  resultCount,
  total,
  idPrefix = 'site',
}) {
  const filtering = query.trim() !== '' || category !== '';

  return (
    <form role="search" className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor={`${idPrefix}-q`} className={styles.label}>Search sites</label>
          <div className={styles.inputWrap}>
            <Icon name="search" className={styles.icon} />
            <input
              id={`${idPrefix}-q`}
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Name, town or category"
              autoComplete="off"
              className={styles.input}
            />
          </div>
        </div>
        <div className={`${styles.field} ${styles.select}`}>
          <label htmlFor={`${idPrefix}-cat`} className={styles.label}>Category</label>
          <select
            id={`${idPrefix}-cat`}
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className={styles.input}
          >
            <option value="">All categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className={styles.status}>
        <p aria-live="polite" className={styles.count}>
          {filtering ? `Showing ${resultCount} of ${total} sites` : `${total} heritage sites`}
        </p>
        {filtering && (
          <Button variant="ghost" size="sm" onClick={onReset}>Clear filters</Button>
        )}
      </div>
    </form>
  );
}
