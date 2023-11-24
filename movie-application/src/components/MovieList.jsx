const MovieList = (props) => {
    return (<>
        {props.movies.map((movie, index) => (
            
            <div className="image-container col justify-content-start m3">
                <img src={movie.Poster} alt="movie" />
                <button className="favourite-button" onClick={() => props.favouriteMovieHandler(movie)}>{props.buttonName}</button>
            </div>
            
        ))}
    </>);
}

export default MovieList;