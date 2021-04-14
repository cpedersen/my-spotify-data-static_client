import React from "react";

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
      <h2>Songs</h2>
      {results?.map((item) => {
        return (
          <div key={item.id}>
            Track: {item.track_name} ({item.playlistName})
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
