const SearchListing = (props) => {
  return (
    <div className="listing-search">
      <div className="location">
        Gurugram
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M1 1L5 5L9 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="search-bar">
        <div className="search-bar-inner">
          <div className="search-badges">
            <div className="search-result-badge">
              Sector 57
              <div className="remove">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M9 1L1 9"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1L9 9"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="search-result-badge add">+ Add</div>
          </div>
          <input type="search" className="search-input" />
          <div className="search-icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                stroke="#535353"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 15.75L12.4875 12.4875"
                stroke="#535353"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListing;
