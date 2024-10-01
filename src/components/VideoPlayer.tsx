import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        loop
        muted
        autoPlay
        playsInline
        tabIndex={0}
        style={{
          pointerEvents: "none",
          MozBackfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
        className="absolute -bottom-40 -left-14"
      >
        <source
          src="3d-globe.webm"
          type="video/webm; codecs=av01.0.12M.08.0.110.01.01.01.0"
        />
        <source src="3d-globe.mp4" type="video/mp4" />
      </video>

      <button
        onClick={togglePlayPause}
        className="absolute -bottom-40 right-0 rounded-full border-2 border-slate-950/20 p-1"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-gray-500"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
            <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
