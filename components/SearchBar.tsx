"use client";

import { useState } from "react";

import SearchMake from "./SearchMake";

const SearchBar = () => {
    const [make, setMake] = useState("");

    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchMake make={make} setMake={setMake} />
            </div>
        </form>
    );
};

export default SearchBar;
