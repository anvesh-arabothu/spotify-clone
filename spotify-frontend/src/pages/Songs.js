import React from "react";

const songsData = [
  { id: 1, title: "Song 1", artist: "Artist 1", cover: "/images/cover1.jpg" },
  { id: 2, title: "Song 2", artist: "Artist 2", cover: "/images/cover2.jpg" },
  { id: 3, title: "Song 3", artist: "Artist 3", cover: "/images/cover3.jpg" },
  { id: 1, title: "Song 1", artist: "Artist 1", cover: "/images/cover1.jpg" },
  { id: 2, title: "Song 2", artist: "Artist 2", cover: "/images/cover2.jpg" },
  { id: 3, title: "Song 3", artist: "Artist 3", cover: "/images/cover3.jpg" },
  { id: 1, title: "Song 1", artist: "Artist 1", cover: "/images/cover1.jpg" },
  { id: 2, title: "Song 2", artist: "Artist 2", cover: "/images/cover2.jpg" },
  { id: 3, title: "Song 3", artist: "Artist 3", cover: "/images/cover3.jpg" },
  { id: 1, title: "Song 1", artist: "Artist 1", cover: "/images/cover1.jpg" },
  { id: 2, title: "Song 2", artist: "Artist 2", cover: "/images/cover2.jpg" },
  { id: 3, title: "Song 3", artist: "Artist 3", cover: "/images/cover3.jpg" },
];

const Songs = ({ searchQuery }) => {
  const filteredSongs = songsData.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredSongs.map((song) => (
        <div key={song.id} className="song-item">
          <img src={song.cover} alt={`${song.title} cover`} />
          <div className="song-info">
            <span className="song-title">{song.title}</span>
            <span className="song-artist">{song.artist}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Songs;
