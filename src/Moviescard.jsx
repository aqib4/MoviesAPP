import React from "react";

const Moviescard = ({ moviedata }) => {
  const { Year, Title, Type, Poster } = moviedata;
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        />
      </div>
      <div>
        <span>{Type}</span>
        <span>{Title}</span>
      </div>
    </div>
  );
};

export default Moviescard;
