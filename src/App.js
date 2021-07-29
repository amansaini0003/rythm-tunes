import React, { useState } from "react";
import "./styles.css";

const musicDB = {
  punjabi: [
    {
      name: "Yaar Anmulle - Sharry Mann",
      link: "https://youtu.be/iiQmg8Sldu8"
    },
    { name: "BROWN MUNDE - AP DHILLON", link: "https://youtu.be/VNs_cCtdbPc" }
  ],
  evergreen: [
    {
      name: "Likhe Jo Khat Tujhe Woh Teri Yaad Mein ",
      link: "https://youtu.be/vTQkB6MvKZc"
    },
    {
      name: "Pal Pal Dil Ke Paas Tum Rehti Ho",
      link: "https://youtu.be/AMuRRXCuy-4"
    }
  ],
  relax: [
    {
      name: "4 AM Coding Session - Lofi Hip Hop Mix",
      link: "https://youtu.be/1YlxJrSaqPw"
    },
    {
      name: "Beautiful Relaxing Music for Stress Relief",
      link: "https://youtu.be/2OEL4P1Rz04"
    }
  ],
  bollywood: [
    { name: "KHAIRIYAT | CHHICHHORE", link: "https://youtu.be/hoNb6HuNmU0" },
    { name: "Namo Namo - Lyrical ", link: "https://youtu.be/dx4Teh-nv3A" }
  ]
};

const musicGenreWeKnow = Object.keys(musicDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("relax");

  function clickhandler(genre) {
    var newGenre = genre;
    setGenre(newGenre);
  }

  return (
    <div className="App">
      <h1> Rythm Tunes 🎵</h1>
      <h2>Select music based on your mood 🎶</h2>
      <p>
        What's your mood? Choose according to your mood and Let music flow in
        your heart and enrich your soul.{" "}
      </p>

      <hr />

      <ul>
        {musicGenreWeKnow.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => clickhandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </ul>

      <ul className="list">
        {musicDB[selectedGenre].map((song) => (
          <li key={song.name}>
            <div id="song-name">{song.name}</div>
            <a href={song.link} id="song-link">
              Play
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
