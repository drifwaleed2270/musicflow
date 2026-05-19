'use client';

import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart } from 'lucide-react';

const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://picsum.photos/id/1015/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    cover: "https://picsum.photos/id/201/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

export default function MusicFlow() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    cover: "https://picsum.photos/id/1015/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Levitating",
    artist: "Dua Lipa",
    cover: "https://picsum.photos/id/201/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Save Your Tears",
    artist: "The Weeknd",
    cover: "https://picsum.photos/id/870/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    cover: "https://picsum.photos/id/1016/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    id: 5,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    cover: "https://picsum.photos/id/133/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  },
  {
    id: 6,
    title: "Heat Waves",
    artist: "Glass Animals",
    cover: "https://picsum.photos/id/201/300/300",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  }
];
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="p-6">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">MusicFlow</h1>
        <p className="text-zinc-400">Listen anywhere</p>
      </div>

      {/* Song List */}
      <div className="px-6 space-y-4">
        {songs.map(song => (
          <div
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className="flex items-center gap-4 bg-zinc-900 p-3 rounded-xl active:bg-zinc-800"
          >
            <img src={song.cover} className="w-16 h-16 rounded-lg" />
            <div>
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-zinc-400">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 p-4">
        <div className="flex items-center gap-4">
          <img src={currentSong.cover} className="w-14 h-14 rounded-md" />
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{currentSong.title}</p>
            <p className="text-xs text-zinc-400 truncate">{currentSong.artist}</p>
          </div>
          <button onClick={togglePlay} className="bg-emerald-500 text-black p-3 rounded-full">
            {isPlaying ? <Pause size={24} /> : <Play size={24} fill="black" />}
          </button>
        </div>

        <audio ref={audioRef} src={currentSong.audio} />
      </div>
    </div>
  );
}
