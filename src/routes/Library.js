import React from 'react';
import Transitions from "../components/Transitions";


const LibraryPage = () => {

  

  const videos = [
    { title: 'Full Body Flow', url: 'https://www.youtube.com/embed/VIDEO_ID1' },
    { title: 'Core Strengthener', url: 'https://www.youtube.com/embed/VIDEO_ID2' },
    { title: 'Relax & Stretch', url: 'https://www.youtube.com/embed/VIDEO_ID3' },
    // Add more videos here
  ];

  return (
    <Transitions>

    <div className="min-h-screen bg-slate-200 flex flex-col items-center pt-32 px-4 font-final">
      <h1 className="text-denim text-4xl md:text-6xl font-bold mb-10 text-center">
        On-Demand Library
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-60 md:h-72"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="p-4 text-center text-denim text-xl font-semibold">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      
    </div>
    </Transitions>

  );
};

export default LibraryPage;
