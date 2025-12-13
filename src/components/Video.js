"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Play } from "lucide-react";

export function Video({ videoId }) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full aspect-video max-w-5xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-700 dark:from-cyan-900 dark:via-cyan-900 dark:to-cyan-950 cursor-pointer shadow-2xl hover:shadow-2xl transition-shadow group">
        {!playVideo && (
          <>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <button
              onClick={() => setPlayVideo(true)}
              className="absolute inset-0 flex items-center justify-center group focus:outline-none"
              aria-label="Play Video"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-white/90 dark:bg-gray-900/90 rounded-full p-4 sm:p-6 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-lg">
                  <Play className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-600 dark:text-cyan-400 fill-current" />
                </div>
              </div>
              <span className="sr-only">Play Video</span>
            </button>
          </>
        )}
        {playVideo && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=1&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full aspect-video"
            allowFullScreen
          />
        )}
      </div>
    </Container>
  );
}
