async function getSongs(word: string) {
    const response = await fetch(`http://localhost:3080/api/search?q=${word}`)
    .then(response => response.json())
    .then(response => response.data.tracks.items);
    
    return response;
}

export default getSongs;