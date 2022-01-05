import React, { useState, useEffect } from 'react';
import './App.css'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import Navbar from './Navbar';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('net ninja');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container ownclass">
      <Navbar />
      <SearchBar onFormSubmit={search} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
