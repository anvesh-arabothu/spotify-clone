import React, { useState, useRef } from "react";
import "../album.css";
import Songs from "./Songs"; // Import the Songs component

const Album = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Search initiated for:", searchQuery);
  };

  const handleTextClick = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div className="album-container">
      <div className="tooltip-container">
        <img
          src="/images/s-name.png"
          alt="Logo"
          className="top-left-logo"
        />
        <span className="tooltip-text">Spotify</span>
      </div>
      <div className="side-container">
        <label className="icon-label">
          <img
            src="/images/home.jpg"
            alt="Home Icon"
            className="home-icon"
          />
          <span className="home-text">Home</span>
        </label>
        <label className="icon-label" onClick={handleTextClick}>
          <img
            src="/images/searc.png"
            alt="Search Icon"
            className="search-icon"
          />
          <span className="search-text">Search</span>
        </label>
      </div>
      <div className="side-box">
        <label className="box">
          <img
            src="/images/setting.jpg"
            alt="Set Icon"
            className="set-icon"
          />
          <span className="set-text">Settings</span>
          <span className="playlist-text">PLAYLIST</span>
        </label>
        <label className="box">
          <img
            src="/images/library.jpg"
            alt="lib Icon"
            className="lib-icon"
          />
          <span className="lib-text">Your Library</span>
        </label>
        <label className="box">
          <img
            src="/images/play.jpg"
            alt="play Icon"
            className="play-icon"
          />
          <span className="play-text">Add playlist</span>
        </label>
        <label className="box">
          <img
            src="/images/profile.png"
            alt="profile Icon"
            className="profile-icon"
          />
          <span className="profile-text">Profile</span>
        </label>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          ref={searchInputRef}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="What do you want to play?"
          className="search-input"
        />
        <img
          src="/images/search.png"
          alt="Search"
          className="search-image"
          onClick={handleSearchClick}
        />
      </div>
      <div className="songs-container">
        <Songs searchQuery={searchQuery} /> {/* Pass searchQuery to filter songs */}
      </div>
    </div>
  );
};

export default Album;
