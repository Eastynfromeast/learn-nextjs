import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
	title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
	// await new Promise(resolve => setTimeout(resolve, 1000));
	const response = await fetch(API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovie();
	return (
		<div className={styles.container}>
			{movies.map(movie => (
				<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
			))}
		</div>
	);
}
