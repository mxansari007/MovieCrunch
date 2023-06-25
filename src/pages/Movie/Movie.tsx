import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './assets/Movie.scss';
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';


type data = {
    poster_path:string,
    original_title:string,
    overview:string,
    status:string,
    vote_average:number,
    release_date:string,
    homepage:string,
    title:string,
    production_countries:Array<{iso_3166_1:string,name:string}>,
    genres:[{id:Number,name:string}],
    popularity:number,
    spoken_languages:[{english_name:string,iso_639_1:string,name:string}],
    tagline:string,
    production_companies:[{id:number, logo_path:string, name: string, origin_country:string}],
    runtime:number
}



const Movie = ()=>{

    let {userId} = useParams();
    let [data,setData] = useState<data>({
        poster_path:"",
        original_title:"",
        overview:"",
        status:"",
        vote_average:0,
        release_date:"",
        homepage:"",
        title:"",
        production_countries:[{iso_3166_1:'',name:''}],
        genres:[{id:0,name:''}],
        popularity:0,
        spoken_languages:[{english_name:'',iso_639_1:'',name:''}],
        tagline:'',
        production_companies:[{id:0,logo_path:'',name:'',origin_country:''}],
        runtime:0
    });

    const [loading,setLoading]  = useState(true);

    useEffect(()=>{
        window.scrollTo({top:0});

        axios.get(`https://api.themoviedb.org/3/movie/${userId}?language=en-US`,{
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWFhMDljY2RhODEyMGUwYTVlZjhhY2FmYjRjZTcyMiIsInN1YiI6IjY0OTViNmMxZDVmZmNiMDBlMjA1NmUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1woHRI_SGg8LKusxqIBKPXtBEmINa7U-jgHUKhcQL0'
            }
        }).then((res=>{
            setData(data = res.data);
            console.log(data);
            console.log(data.genres)
            
        })).catch(err=>{
            console.log(err);
        })

        
    },[])


    console.log(userId);

    return (
        <div className="Movie-container">
    <section>
    <h2 className="Title">{data.title}</h2>
     <div className="imageContainer">
    <img className="image"
        onLoad={()=>{setLoading(false)}} 
       style={{display:loading?'none':'block'}} 
       src={'https://image.tmdb.org/t/p/original'+data.poster_path} 
    />
     <div style={{display:loading?'block':'none'}}><CircularProgress /></div>
    </div>
    <div className="movie-info">
    <p><span className="subtitle">Overview:</span> {data.overview}</p>
    <p><span className="subtitle">Tagline:</span>  {data.tagline}</p>
    <p><span className="subtitle">status:</span>{data.status}</p>
    <p><span className="subtitle">Rating:</span> {data.vote_average}</p>
    <p><span className="subtitle">Popularity:</span>{data.popularity}</p>
    <p><span className="subtitle">Release Date: </span>{data.release_date}</p>
    <p><span className="subtitle">Production Countries:</span> {data.production_countries.map(d=><li>{d.name}</li>)}</p>
    <p><span className="subtitle">Genres:</span> {data.genres.map(d=><li>{d.name}</li>)}</p>
    <p><span className="subtitle">Spoken Languages:</span> {data.spoken_languages.map(d=><li>{d.english_name}</li>)}</p>
   <p><span className="subtitle">Length:</span> {Math.floor(data.runtime/60)}hrs {data.runtime%60} mins</p>
   <Button id="btn" variant="outlined">
   <Link to={data.homepage}>More Info</Link>
   </Button>
   </div>
    
    </section>
    </div>
    )
}


export default Movie