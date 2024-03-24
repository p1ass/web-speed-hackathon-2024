import {lazy, Suspense} from 'react';

const AuthorDetailPage = lazy(() => import('./AuthorDetailPage'));
const AuthorDetailPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <AuthorDetailPage />
    </Suspense>
  );
};

export { AuthorDetailPageWithSuspense as AuthorDetailPage };
