import {lazy} from 'react';


const TopPage = lazy(() => import('./TopPage'));

const TopPageWithSuspense: React.FC = () => {
  return (
      // <Suspense fallback={null}>
        <TopPage/>
      // </Suspense>
  );
};

export {TopPageWithSuspense as TopPage};
