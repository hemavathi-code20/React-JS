import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../db';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        id='meal'
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={50} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={50} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;