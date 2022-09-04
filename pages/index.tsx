import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainSection, Header, Button, Input, EpisodeList, Episode, Spinner, ShowInfo, Error } from '../components';
import { useFetchEpisodes } from '../hooks';
import { Episode as EpisodeType } from '../types';

const PAGE_SIZE = 10;

const Home: NextPage = () => {
  const [isMounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [page, setPage] = useState(0);
  const [showSummary, setShowSummary] = useState(true);
  const [displayedEpisodes, setDisplayedEpisodes] = useState<EpisodeType[]>([]);
  const { results, error, loading } = useFetchEpisodes(searchQuery);

  const { _embedded } = results || {};

  const show = results ? {
    name: results?.name,
    summary: results?.summary,
    image: results?.image,
    availableOn: results?.webChannel?.name,
    genres: results?.genres
  } : null;

  const { episodes = [] } = _embedded || {};

  useEffect(() => {
    if (episodes.length) {
      const fullPage = page * PAGE_SIZE;
      const displayEpisodes = episodes.slice(0, fullPage + PAGE_SIZE);
      setDisplayedEpisodes(displayEpisodes);
    }
  }, [episodes, page])

  useEffect(() => {
    if (isMounted) {
      const query = window.location.hash.split('#')[1];
      if (query) {
        const decoded = decodeURIComponent(query);
        setSearchQuery(decoded);
        setInputValue(decoded);
      }
    } else {
      setMounted(true)
    }
  }, [isMounted]);

  const search = () => {
    setShowSummary(true);
    setSearchQuery(inputValue);
    window.location.hash = inputValue;
  }

  const showMore = () => {
    setPage(page + 1);
  }
  const isLastPage = (page + 1) * PAGE_SIZE > episodes?.length;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>TV episode search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection>
        <Header>
          TV episode search
        </Header>

        <p className="mt-3 text-2xl mb-7">
          Search for your favorite TV shows
        </p>

        <div className="mt-4 flex items-center bg-white p-7 justify-between w-full sticky top-0 z-10">
          <Input
            placeholder="Search shows here..."
            value={inputValue}
            onEnterPress={search}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="w-1/5">
            <Button onClick={search}>Search...</Button>
          </div>
        </div>
        <Spinner loading={loading} />
        {show && <>
          {showSummary && <ShowInfo show={show} hide={() => setShowSummary(false)} />}
          <EpisodeList>
            {displayedEpisodes.map(episode => <Episode key={episode.id} episode={episode} />)}
          </EpisodeList>
          <div className="m-5">
            {!isLastPage && <Button onClick={showMore}>Show more...</Button>}
          </div>
        </>}
        {error &&
          <Error />
        }
      </MainSection>
    </div>
  )
}

export default Home
