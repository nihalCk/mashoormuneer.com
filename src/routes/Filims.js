import React from 'react'
import FilmVideos from '../components/FilmVideos/FilmVideos';

import FilmsData from './FilmsData';



const Films = () => {
  return (
    <>
      {FilmsData.map((props) => (
        <FilmVideos
          video1={props.video1} video2={props.video2} video3={props.video3}/>
      ))}
    </>
  )
}

export default Films