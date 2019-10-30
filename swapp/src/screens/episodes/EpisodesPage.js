import React from 'react';
import EpisodesList from '../../components/episodes/EpisodesList';
import { Tiles } from '@rebass/layout';

const EpisodesPage = () => {
  return (
      <div>EpisodesPage</div>
   /*<Tiles columns={[1, 2, 3]}>
      {episodes.map(episode => {
        return <EpisodesList key={episode.name} episode={episode} />;
      })}
    </Tiles>*/
  );
};

export default EpisodesPage;
