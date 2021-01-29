import React, { useContext } from "react";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { StateContext } from "../components/StateProvider";
import useGoogleSearch from "../useGoogleSearch";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//
function SearchPage() {
  const globalState = useContext(StateContext);

  const {
    state: { term },
  } = globalState;
  console.log(term);

  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="searchPage__logo"
          />
        </Link>

        <div className="searchPage__headerbody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <DescriptionOutlinedIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <ImageOutlinedIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <LocalOfferOutlinedIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="option">
                <OndemandVideoOutlinedIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* we're going to have that code specified below here */}

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results(
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className="searchPage__resultImage"
                    src={item.pagemap?.cse_image[0]?.src}
                  />
                )}

                {item.displayLink}
              </a>

              <a href={item.link} className="searchPage__resultTitle">
                <h3>{item.title}</h3>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
