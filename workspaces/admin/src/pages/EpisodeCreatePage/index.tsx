import {lazy, Suspense} from "react";


const EpisodeCreatePage = lazy(() => import('./EpisodeCreatePage'));

const EpisodeCreatePageWithSuspense: React.FC = () => {
  return (
      <Suspense fallback={null}>
        <EpisodeCreatePage/>
      </Suspense>
  );
};

export {EpisodeCreatePageWithSuspense as EpisodeCreatePage}
