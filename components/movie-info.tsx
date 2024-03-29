import potato from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
	const movie = await getMovie(id);
	return (
		<div className={potato.container}>
			<img src={movie.poster_path} alt={movie.title} className={potato.poster} />
			<div className={potato.info}>
				<h1 className={potato.title}>{movie.title}</h1>
				<h3> ★ {movie.vote_average.toFixed(1)}</h3>
				<p>{movie.overview}</p>
				<a href={movie.homepage} target={"_blank"}>
					Home &rarr;
				</a>
			</div>
		</div>
	);
}
