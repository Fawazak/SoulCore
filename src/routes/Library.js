import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Transitions from "../components/Transitions";

const LibraryPage = () => {
  const [introVideo, setIntroVideo] = useState(null);
  const [categorizedVideos, setCategorizedVideos] = useState({
    align: [],
    tone: [],
    restore: [],
    other: [],
  });
  

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRef = ref(storage, "gs://sama-pilates.firebasestorage.app/");
        const result = await listAll(videosRef);

        const videoObjects = await Promise.all(
            result.items.map(async (item, index) => {
                const url = await getDownloadURL(item);
          
                // Clean up filename -> replace "-" with spaces and remove ".mp4"
                let cleanTitle = item.name
                  .replace(/-/g, " ")   // replace dashes with spaces
                  .replace(/\.mp4$/i, ""); // remove .mp4 at the end (case insensitive)
          
                return {
                  title: cleanTitle,
                  url,
                  index,
                };
              })
            );
        const intro = videoObjects.find(video => 
            video.title.toLowerCase().includes("intro")
            );
        // first video = intro
        if (intro) {
            setIntroVideo(intro);
          }

        // categorize remaining
        const categorized = { align: [], tone: [], restore: [], other: [] };
        videoObjects.forEach((video) => {
          const title = video.title.toLowerCase();
          if (title.includes("align")) {
            categorized.align.push(video);
          } else if (title.includes("tone")) {
            categorized.tone.push(video);
          } else if (title.includes("restore") || title.includes("stretch")) {
            categorized.restore.push(video);
          } else {
            if(!title.includes("intro")){
                categorized.other.push(video);
            }
            
          }
        });

        setCategorizedVideos(categorized);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  if (!introVideo) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading videos...</p>
      </div>
    );
  }

  const renderVideoGrid = (videos) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <video
            className="w-full h-60 md:h-60 object-cover"
            controlsList="nodownload" 
            onContextMenu={e => e.preventDefault()}
            src={video.url}
            controls
            onEnded={(e) => {
              e.target.currentTime = 0;
              e.target.pause();
            }}
          />
          <div className="p-2 text-center text-denim text-lg font-semibold">
            {video.title}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Transitions>
      <div className="min-h-screen bg-slate-200 flex flex-col items-center pt-32 px-4 font-final">
        <h1 className="text-denim text-4xl md:text-6xl font-bold mb-20 text-center">
          On-Demand Library
        </h1>

        {/* Top section: Intro video + welcome text */}
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mb-12">
          {/* Intro video */}
          <div className="lg:w-1/2 flex lg:ml-10  ">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
              <video
                className="w-full h-[550px] object-cover"
                controlsList="nodownload" 
                onContextMenu={e => e.preventDefault()}
                src={introVideo.url}
                controls
                onEnded={(e) => {
                  e.target.currentTime = 0;
                  e.target.pause();
                }}
              />
            </div>
          </div>

          {/* Welcome text */}
          <div className="lg:w-1/2 flex mt-16">
            <div className="text-left text-gray-800 text-lg md:text-xl space-y-10">
              <h2 className="text-2xl font-bold text-denim">
                Welcome to Your Library, Your Space!
              </h2>
              <p>
                This is your space to move, breathe, and grow, from anywhere in
                the world.
              </p>
              <p>
                Start with the intro video, then explore a wide range of classes
                designed to fit your mood, schedule, and goals.
              </p>
              <p>
                Watch, pause, and replay as often as you like. Take it at your
                own pace and enjoy the journey toward feeling stronger, more
                balanced, and more connected.
                <br />
                <br />
                Enjoy!
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full max-w-7xl mb-12 px-4 space-y-12">
          {/* Energize & Align */}
          <div>
            <h3 className="text-2xl font-bold text-denim mb-2">
              Energize & Align
            </h3>
            <p className="text-gray-600 text-base">
              Full-body flows designed to build strength, balance, and energy.
            </p>
            {renderVideoGrid(categorizedVideos.align)}
          </div>

          {/* Target & Tone */}
          <div>
            <h3 className="text-2xl font-bold text-denim mb-2">Target & Tone</h3>
            <p className="text-gray-600 text-base">
              Short, focused sessions that sculpt and strengthen specific muscle
              groups.
            </p>
            {renderVideoGrid(categorizedVideos.tone)}
          </div>

          {/* Release & Restore */}
          <div>
            <h3 className="text-2xl font-bold text-denim mb-2">
              Release & Restore
            </h3>
            <p className="text-gray-600 text-base">
              Gentle stretches and restorative flows to relax, recover, and
              reset your body.
            </p>
            {renderVideoGrid(categorizedVideos.restore)}
          </div>

          {/* Other (optional) */}
          {categorizedVideos.other.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-denim mb-2">Other</h3>
              {renderVideoGrid(categorizedVideos.other)}
            </div>
          )}
        </div>
      </div>
    </Transitions>
  );
};

export default LibraryPage;
