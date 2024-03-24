import {lazy, Suspense} from "react";

const EpisodeDetailPage = lazy(() => import('./EpisodeDetailPage'));

const EpisodeDetailPageWithSuspense: React.FC = () => {
  return (
      <Suspense fallback={null}>
        <EpisodeDetailPage/>
      </Suspense>
  );
};

export {EpisodeDetailPageWithSuspense as EpisodeDetailPage}
