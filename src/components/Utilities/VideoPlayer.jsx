"use client";
import { X, YoutubeLogo } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";
const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary bg-color-secondary float-right px-3 mb-1"
        >
          <X size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="fixed  bottom-5 right-5 w-48 bg-color-primary text-color-youtube flex justify-center items-center rounded-md p-2 space-x-2 opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
    >
      <YoutubeLogo size={58} />
      <p className="text-color-secondary ">Play Trailer</p>
    </button>
  );
};
export default VideoPlayer;
