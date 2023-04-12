import { useEffect, useState  } from "react"
import { instance } from "../../utils/axios";
import Movies from './Movies';
import ringLoad from '../../assets/logo/ringSpin.gif'

const MoviesPage = () => {
    const [lotrMovies, setLotrMovies] = useState([])
    const [movieInfo, setMovieInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    //API has info we do not need....
    const movieNames = [
        "The Fellowship of the Ring",
        "The Two Towers",
        "The Return of the King",
    ]

    useEffect(() => {
        const fetchData = async () => {

            const res = instance.get("/movie");
            const data = (await res).data;
            const ids = data.docs.map((movie) => movie._id);
            setLotrMovies(ids);
            console.log(ids);
        };

        fetchData();

    }, []);

    useEffect(() => {
        const fetchMoviesData = async () => {
            const movieData = [];
            for(const ids of lotrMovies){
                const res = await instance.get(`/movie/${ids}`);
                const data = res.data;
                movieData.push(data);
            }
            
            let tempArr = [];
            for(const movie of movieData){
                const movieName = movie.docs[0].name;

                if(movieNames.indexOf(movieName) !== -1){
                    tempArr.push(movie.docs[0])
                }
            }
            // sort the tempArr array based on the index of movie names in movieNames array
            tempArr.sort((a, b) => {
                const indexA = movieNames.indexOf(a.name);
                const indexB = movieNames.indexOf(b.name);
                return indexA - indexB;
            });
            //set the data so we render to the screen.
            console.log(tempArr)
            setMovieInfo(tempArr);
            setIsLoading(false);
        }
        fetchMoviesData();
    }, [lotrMovies]);

    if (isLoading || !movieInfo.length) {
        return <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
                    <img src={ringLoad}></img>
                    <p style={{color:'white'}}>Loading...</p>
                </div>
    }
    return (
        <>
        { movieInfo.length > 0 &&
            <Movies movieInfo={movieInfo}/>
        }
        </>
    )
}

export default MoviesPage;