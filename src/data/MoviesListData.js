function getMoviesLists() {
    return [{
            id: 1,
            name: "My list",
            created: "2022-01-01T00:00:00.000Z",
            updated: "2022-01-02T00:00:00.000Z",
            user: {
                id: 1,
                name: "Itamar",
                email: "itamarc@gmail.com",
                imageUrl: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
                registered: "2022-01-07T00:00:00.000Z"
            }
        },
        {
            id: 2,
            name: "Sci-fi Movies",
            created: "2022-01-01T00:00:00.000Z",
            updated: "2022-01-02T00:00:00.000Z",
            user: {
                id: 1,
                name: "Itamar",
                email: "itamarc@gmail.com",
                imageUrl: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
                registered: "2022-01-06T13:00:00.000Z"
            }
        },
        {
            id: 3,
            name: "Romance Movies",
            created: "2022-01-01T00:00:00.000Z",
            updated: "2022-01-02T00:00:00.000Z",
            user: {
                id: 2,
                name: "John",
                email: "john.constantine@realhell.com",
                imageUrl: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
                registered: "2022-01-07T10:00:00.000Z"
            }
        },
    ];
}

function getMoviesList(moviesListId) {
    return getMoviesLists().find(
        movieList => movieList.id === moviesListId
    );
}

function getMoviesListsByUser(userId) {
    return getMoviesLists().filter(
        movieList => movieList.user.id === userId
    );
}

function getMoviesByListId(movieListId) {
    // for now, it's returning the same list, ignoring the id
    return [{
            id: 1,
            title: "The Polar Express",
            year: 2004,
            categories: ["Animation"]
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            categories: ["Action"]
        },
        {
            id: 3,
            title: "Clash of the Titans",
            year: 2010,
            categories: ["Action", "Fantasy"]
        },
        {
            id: 4,
            title: "Inception",
            year: 2010,
            categories: ["Sci-fi"]
        },
        {
            id: 5,
            title: "Tenet",
            year: 2020,
            categories: ["Sci-fi"]
        },
        {
            id: 6,
            title: "Interstellar",
            year: 2014,
            categories: ["Sci-fi"]
        },
        {
            id: 7,
            title: "American Sniper",
            year: 2014,
            categories: ["Drama", "War"]
        }
    ];
}

const users = [
    {
        id: 1,
        name: "Itamar",
        email: "itamarc@gmail.com",
        imageUrl: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        registered: "2022-01-06T13:00:00.000Z"
    },
    {
        id: 2,
        name: "John",
        email: "john.constantine@realhell.com",
        imageUrl: "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        registered: "2022-01-07T10:00:00.000Z"
    }
];

function getUserById(userId) {
    return users.find(
        user => user.id === userId
    );
}

function getUserByEmail(email) {
    return users.find(
        user => user.email === email
    );
}

export { getMoviesLists, getMoviesList, getMoviesByListId, getUserById, getUserByEmail, getMoviesListsByUser };