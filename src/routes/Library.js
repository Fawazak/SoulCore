import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import Transitions from "../components/Transitions";

const LibraryPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRef = ref(storage, "gs://sama-pilates.firebasestorage.app/"); // ✅ better to reference folder directly
        const result = await listAll(videosRef);

        const videoURLs = await Promise.all(
          result.items.map((item) => getDownloadURL(item))
        );

        setVideos(
          videoURLs.map((url, index) => ({
            title: index === 0 ? "Intro Video" : `Workout Video ${index}`,
            url: url,
          }))
        );
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading videos...</p>
      </div>
    );
  }

  const introVideo = videos[0];
  const workoutVideos = videos.slice(1);

  return (
    <Transitions>
        <div className="min-h-screen bg-slate-200 flex flex-col items-center pt-32 px-4 font-final">
            <h1 className="text-denim text-4xl md:text-6xl font-bold mb-20 text-center">
            On-Demand Library
            </h1>

            {/* Top section: Intro video + welcome text */}
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mb-12">
            {/* Intro video */}
            <div className="lg:w-1/2 flex ml-10">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm">
                <video
                    className="w-full h-[550px] object-cover"
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
                <div className="text-left text-gray-800 text-lg md:text-xl space-y-4">
                <h2 className="text-2xl font-bold text-denim">Welcome to the Library!</h2>
                <p className="py-10">
                    Here you can find all our workout videos on-demand. Start with the intro video and
                    explore the variety of classes below at your own pace. Enjoy your practice!
                </p>
                <p>
                    You can watch, pause, and replay any video as many times as you like. We hope you
                    enjoy your journey to fitness and wellness.
                </p>
                </div>
            </div>
            </div>

            {/* Workout videos grid below */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl  my-10 ml-10">
            {workoutVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <video
                    className="w-full h-60 md:h-72 object-cover"
                    src={video.url}
                    controls
                />
                <div className="p-4 text-center text-denim text-lg font-semibold">
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
