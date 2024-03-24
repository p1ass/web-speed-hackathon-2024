import {lazy, Suspense} from 'react';


const BookDetailPage = lazy(() => import('./BookDetailPage'));

const BookDetailPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BookDetailPage />
    </Suspense>
  );
};

export { BookDetailPageWithSuspense as BookDetailPage };
