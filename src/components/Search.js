import React, { useState, useContext } from "react";
import "./Search.css";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { StateContext } from "./StateProvider";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search({ hideButtons = false }) {
  const globalState = useContext(StateContext);
  const { dispatch } = globalState;

  const [input, setInput] = useState("");

  const history = useHistory();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const search = (e) => {
    console.log("The Search query is >>>", input);
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          value={input}
          onChange={handleInput}
        />
        <MicIcon className="search__micIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'am Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'am Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
