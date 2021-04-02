import axios from '../axios';
import React, { useEffect, useState } from 'react'
// import requests from '../Request';
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

function Row({ title , fetchUrl , isLargeRow = false }) {
    const [movies , setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/"
    // A snipper code which runs based on a specific condition
    useEffect(()=>{
        // if [] run once when the row loads, and dont run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    console.log(movies);

    const opts ={
        height: "600px",
        width: "100%",
        playerVars:{
            autoplay:1,
        },
    };

        const handleClick =(movie) =>{
            if (trailerUrl){
                setTrailerUrl('');
            }else{
                movieTrailer(movie?.title || movie?.name|| "")
                .then(url=>{
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error=> console.log(error));
            }
        }


    return (
        <div className="row">

            <h2>{title}</h2>
            <div className="row__posters">

            {movies.map((movie) => 
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img key={movie.id} onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src ={`${base_url}${
                isLargeRow ? movie.poster_path: movie.backdrop_path
            }`} alt={movie.name} />  
            ))}
            </div>
            
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            
        </div>
    )
}

export default Row
