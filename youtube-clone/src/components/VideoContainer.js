import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);


  const getVideos = async () => {
    const data  = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  },[]);


  return (
      <div className='flex flex-wrap'>
        {videos.map((video) => {
          return (<Link key={video.id} to={'/watch?v=' + video.id}><VideoCard  info={video}/> </Link>)
        })}
      </div>
  );
}

export default VideoContainer