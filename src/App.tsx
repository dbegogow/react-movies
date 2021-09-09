import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { landingPageDTO } from './movies/landingPage.module.d';
import './App.css';
import Menu from './Menu';
import MoviesList from './movies/MoviesList';
import IndexGenres from './genres/IndexGenres';

function App() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: 'Spider-Man: Far From Home',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
                    },
                    {
                        id: 2,
                        title: 'Luca',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'
                    }
                ],
                upcomingReleases: [
                    {
                        id: 31,
                        title: 'Soul',
                        poster: 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg'
                    }
                ]
            })
        }, 1000);

        return () => clearTimeout(timerId);
    });

    return (
        <BrowserRouter>
            <Menu />

            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <h3>In Theaters</h3>
                        <MoviesList movies={movies.inTheaters} />

                        <h3>Upcoming Releases</h3>
                        <MoviesList movies={movies.upcomingReleases} />
                    </Route>

                    <Route path="/genres">
                        <IndexGenres />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
