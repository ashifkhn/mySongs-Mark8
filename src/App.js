import React, { useState } from "react";

const songsDB = {
  Prateek_Kuhad: [
    { name: "Cold Mess", rating: "4.8" },
    { name: "100 words", rating: "4.4" }
  ],

  Anuv_Jain: [
    {
      name: "Baarishen ",
      rating: "4.9"
    },
    {
      name: "Alag Asmaan",
      rating: "4.7"
    }
  ],
  Local_Train: [
    {
      name: "Choo Lo",
      rating: "4.2"
    },
    {
      name: "Dil Mere",
      rating: "4.8"
    }
  ]
};

export default function App() {
  const [selectedArtist, setArtist] = useState("Anuv_Jain");
  function artistClickHandler(artist) {
    setArtist(artist);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>MySongs</h1>
      <p style={{ textAlign: "center", fontSize: "larger" }}>
        Some of my favorite songs:
      </p>
      <div style={{ textAlign: "center" }}>
        {Object.keys(songsDB).map((artist) => (
          <button onClick={() => artistClickHandler(artist)}>
            <ul>
              <li style={{}}>{artist}</li>
            </ul>
          </button>
        ))}
        <hr></hr>

        <div>
          <ul>
            {songsDB[selectedArtist].map((artist) => (
              <li
                style={{
                  padding: "1rem",
                  border: "1px solid #D1D5DB",

                  borderRadius: "0.5rem"
                }}
                key={artist.name}
              >
                <div>
                  {artist.name} {artist.rating}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
