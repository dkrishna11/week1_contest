import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setInfo }) => {
  let [search, setSearch] = useState("");

  async function getImages() {
    try {
      let response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: search,
        },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
        }
      })
      setInfo(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search Image here...."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={getImages}>Search</button>
    </div>
  );
};

export default SearchBar;
