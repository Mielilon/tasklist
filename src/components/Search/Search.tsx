import React from 'react';
import './Search.sass';

function Search(): React.ReactElement {
  return (
    <div className="search">
      <svg className="search__icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.53845 9.53848L12.3077 12.3077" stroke="#54575E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.07694 10.4616C8.49849 10.4616 10.4616 8.49849 10.4616 6.07694C10.4616 3.65538 8.49849 1.69232 6.07694 1.69232C3.65538 1.69232 1.69232 3.65538 1.69232 6.07694C1.69232 8.49849 3.65538 10.4616 6.07694 10.4616Z" stroke="#54575E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input className="search__field" type="search" name="" id="" placeholder="Поиск по задачам..." />
      <button className="search__button search__button--settings" type="button">
        <svg className="search__icon" width="17" height="14" viewBox="0 0 17 14" fill="none">
          <path d="M16.3333 2.33333H13.9417C13.65 0.991667 12.4833 0 11.0833 0C9.68333 0 8.51667 0.991667 8.225 2.33333H0V3.5H8.225C8.51667 4.84167 9.68333 5.83333 11.0833 5.83333C12.4833 5.83333 13.65 4.84167 13.9417 3.5H16.3333V2.33333ZM11.0833 4.66667C10.0917 4.66667 9.33333 3.90833 9.33333 2.91667C9.33333 1.925 10.0917 1.16667 11.0833 1.16667C12.075 1.16667 12.8333 1.925 12.8333 2.91667C12.8333 3.90833 12.075 4.66667 11.0833 4.66667ZM0 11.6667H2.39167C2.68333 13.0083 3.85 14 5.25 14C6.65 14 7.81667 13.0083 8.10833 11.6667H16.3333V10.5H8.10833C7.81667 9.15833 6.65 8.16667 5.25 8.16667C3.85 8.16667 2.68333 9.15833 2.39167 10.5H0V11.6667ZM5.25 9.33333C6.24167 9.33333 7 10.0917 7 11.0833C7 12.075 6.24167 12.8333 5.25 12.8333C4.25833 12.8333 3.5 12.075 3.5 11.0833C3.5 10.0917 4.25833 9.33333 5.25 9.33333Z" fill="#54575E" />
        </svg>
      </button>
    </div>
  );
}

export default Search;
