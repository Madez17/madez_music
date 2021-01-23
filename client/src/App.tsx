import React, { useState } from 'react';
import './App.css';

import Search from './components/search/search';
import ResultsList from './components/resultList/result-list';
import getSongs from './api';


function App() {
  const [ songsResult, setSongResult ] = useState(null);

  const listSongs = async (word: string) => {
    const dataSongs = await getSongs(word);
    setSongResult(dataSongs);
  }

  return (
    <div className="App">
      <div className="app_container">
        <div className="app_header">
          <div className="app_filter">
            <h1>Music, Songs and <br/> Spotify!
            </h1>
          </div>
        </div>

        <div className="app_search">
          <h2 className='app-search__title'>Unlimited music</h2>
          <p>Find more information about your favorite artist and song!</p>
          <Search listSongs={listSongs} />
          <ResultsList dataSongs={songsResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
