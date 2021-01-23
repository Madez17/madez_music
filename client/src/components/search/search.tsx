import React from 'react';
import '../search/search.css';

interface Props {
    listSongs: (word: string) => void; 
}

function Search(props: Props) {
    const inputRef = React.createRef<HTMLInputElement>();

    const handleClick = async () => {
        const inputValue = inputRef.current && inputRef.current.value;

        if(inputValue) {
            props.listSongs(inputValue);
        }
    }

    return (
        <div className="search">
            <input
                ref={inputRef}
                className="search_input"
                type="text"
                placeholder="Search your song"
                required
                autoComplete="on"
            />
            <button onClick={handleClick}>Send</button>
        </div>
    );
}

export default Search;