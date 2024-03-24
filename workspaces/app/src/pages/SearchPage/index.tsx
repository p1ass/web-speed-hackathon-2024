import {lazy, Suspense} from 'react';

const SearchPage = lazy(() => import('./SearchPage'));

const SearchPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
};

export { SearchPageWithSuspense as SearchPage };
