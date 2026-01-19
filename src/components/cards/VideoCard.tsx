import { Play } from "lucide-react";

import React, { useState, useRef, useEffect } from "react";

import PlayButtonImage from "../../assets/images/common/play_button_image.webp";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isActive }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [canPlay, setCanPlay] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsPlaying(false);
    setCanPlay(false);
    setError(null);
  }, [video.id]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !canPlay) return;

    const playVideo = async () => {
      try {
        if (isPlaying) {
          await videoElement.play();
        } else {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      } catch (err) {
        console.error("Play error:", err);
        setIsPlaying(false);
        setError("Cannot play video");
      }
    };

    playVideo();
  }, [isPlaying, canPlay]);

  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  const handleCanPlay = (): void => {
    setCanPlay(true);
    setError(null);
  };

  const handleVideoClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (canPlay) {
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlayClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (canPlay) {
      setIsPlaying(true);
    } else {
      if (videoRef.current) {
        videoRef.current.load();
      }
    }
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement>,
  ): void => {
    console.error("Video error:", video.url, e);
    setError("Failed to load video");
    setIsPlaying(false);
  };

  const handleLoadStart = (): void => {
    setCanPlay(false);
  };

  console.log(canPlay);

  return (
    <div
      className={
        "relative flex-shrink-0 w-[292px] h-[550px] rounded-[4px] overflow-hidden bg-gray-200 group snap-center"
      }
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        loop
        playsInline
        muted={false}
        preload="metadata"
        poster={video.thumbnail}
        onClick={handleVideoClick}
        onError={handleVideoError}
        onCanPlay={handleCanPlay}
        onLoadStart={handleLoadStart}
        crossOrigin="anonymous"
      >
        <source src={video.url} type="video/mp4" />
        <source src={video.url} type="video/quicktime" />
      </video>

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity"
          onClick={handlePlayClick}
        >
          <div className={"cursor-pointer"}>
            <img
              src={PlayButtonImage}
              alt={"Play Button"}
              className={"w-[32px] h-[32px] object-cover"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
