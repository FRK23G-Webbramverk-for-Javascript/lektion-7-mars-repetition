import MovieCard from "../MovieCard/MovieCard";

function DisplayMovies(props) {
    const { movies } = props;

    const movieCardComponents = movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.imdbID } />
    });

    return (
        <section>
            { movieCardComponents }
        </section>
    )
}

export default DisplayMovies;