function getMoviesLists() {
    return [
        {
            id: 1,
            name: "My list",
            user: "Itamar"
        },
        {
            id: 2,
            name: "Sci-fi Movies",
            user: "Itamar"
        },
        {
            id: 3,
            name: "Romance Movies",
            user: "Jane Doe"
        },
    ];
}

function getMoviesList(moviesListId) {
    return getMoviesLists().find(
        movieList => movieList.id === moviesListId
    );
}

function getMoviesByListId(movieListId) {
    // for now, it's returning the same list, ignoring the id
    return [
        {
            id: 1,
            title: "The Polar Express",
            year: 2004,
            category: "Animation"
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            category: "Action"
        },
        {
            id: 3,
            title: "Clash of the Titans",
            year: 2010,
            category: "Action"
        },
        {
            id: 4,
            title: "Inception",
            year: 2010,
            category: "Sci-fi"
        },
        {
            id: 5,
            title: "Tenet",
            year: 2020,
            category: "Sci-fi"
        },
        {
            id: 6,
            title: "Interstellar",
            year: 2014,
            category: "Sci-fi"
        },
        {
            id: 7,
            title: "American Sniper",
            year: 2014,
            category: "Drama"
        }
    ];
}

export { getMoviesLists, getMoviesList, getMoviesByListId }
