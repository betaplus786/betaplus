import React, { useState } from 'react';

const PopupVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoThumbnail, setVideoThumbnail] = useState('');

  const openPopupVideo = (url, thumbnail) => {
    setVideoUrl(url);
    setVideoThumbnail(thumbnail);
    setIsOpen(true);
  };

  const closePopupVideo = () => {
    setIsOpen(false);
    setVideoUrl('');
    setVideoThumbnail('');
  };

  return (
    <div>
      {/* Link to open the popup video */}
      <a href="https://www.youtube.com/watch?v=Ygpdo7oE83E" onClick={() => openPopupVideo('https://www.youtube.com/watch?v=Ygpdo7oE83E')}>
        Open Video
      </a>

      {/* Video thumbnail on the main screen */}
      {videoThumbnail && !isOpen && (
        <div>
          <img src={videoThumbnail} alt="Video Thumbnail" />
        </div>
      )}

      {isOpen && (
        <div className="popup-overlay">
          {/* Popup container */}
          <div className="popup-container">
            {/* Close button */}
            <span className="popup-close" onClick={closePopupVideo}>
              &times;
            </span>

            {/* Video element */}
            <video className="popup-video" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popup-container {
          position: relative;
          width: 80%;
          max-width: 800px;
          max-height: 80%;
          overflow: hidden;
        }

        .popup-close {
          position: absolute;
          top: 10px;
          right: 10px;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }

        .popup-video {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default PopupVideo;
