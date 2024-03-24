import {Skeleton} from "@mui/material";
import {lazy, Suspense} from 'react';

import {Box} from "../../foundation/components/Box";

const EpisodeDetailPage = lazy(() => import('./EpisodeDetailPage'));

const EpisodeDetailPageWithSuspense: React.FC = () => {
  return (
      <Suspense fallback={<LoadingComicViewer />}>
        <EpisodeDetailPage/>
      </Suspense>
  );
};


const LoadingComicViewer = ()=>{
  return <Box>
    <Skeleton height={650} variant={"rectangular"} width={"100%"}></Skeleton>
  </Box>
}


export {EpisodeDetailPageWithSuspense as EpisodeDetailPage};
