export type Movie = {
  $id: string;
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  posterUrl: string;
  release_date: string;
  original_language: string;
};

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}: {
  movie: Movie;
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt="movie poster"
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "-"}</p>
          </div>

          <span>•</span>

          <p className="lang">{original_language.toUpperCase()}</p>

          <span>•</span>

          <p className="year">
            {release_date ? new Date(release_date).getFullYear() : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
