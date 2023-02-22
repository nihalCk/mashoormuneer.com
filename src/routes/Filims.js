import React from 'react'
import FilimVideos from '../components/FilimVideos/FilimVideo';

import FilimsData from './FilimsData';



const Filims = () => {
  return (
    <>
      {FilimsData.map((props) => (
        <FilimVideos
          video1={props.video1} video2={props.video2} video3={props.video3}/>
      ))}
      {/* <FilimVideos video1={FilimVideoOne} video2={FilimVideoOne} video3={FilimVideoOne} />
        <FilimVideos video1={FilimVideoOne} video2={FilimVideoOne} video3={FilimVideoOne} />
        <FilimVideos video1={FilimVideoOne} video2={FilimVideoOne} video3={FilimVideoOne} /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



    </>
  )
}

export default Filims