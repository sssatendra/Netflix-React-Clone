import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import requests from '../Requests';
import Row from "../components/Row"

function Homescreen() {
    return (
        <div className="homescreen">
            <Navbar />
            <Banner />
            
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}isLargeRow />
            <Row title="Trending Now" fetchUrl ={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl ={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies} />
            <Row title="Romance Movie" fetchUrl ={requests.fetchRomanceMovie} />
            <Row title="Documentries" fetchUrl ={requests.fetchDocumentries} />
        </div>
    )
}

export default Homescreen
