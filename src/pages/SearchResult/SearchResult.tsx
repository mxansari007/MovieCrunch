import axios from "axios";
import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Search from '../Dashboard/Search';
import ImageLoading from '../../components/Image/ImageLoading.tsx';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './assets/SearchResult.scss';

type search = {
  userId:string;
}

type data = {
  results:[];
}

 const SearchResult = ()=>{

    let { userId } = useParams<search>();
    let [data,setData] = useState([]);
    let [delay,setDelay] = useState(true);
    let [page,setPage] = useState(1);

    useEffect(()=>{
     
        console.log(userId);
        let query = userId.split(' ');
        let makelink = '';
        for(let i =0; i<query.length; i++){
          if(query.length==1){
            makelink +=query[i];
          }
          else if(i!=query.length-1){
            makelink +=query[i]+'%20';
          }
          else{
            makelink +=query[i];
          }
        }
  

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${makelink}&include_adult=false&language=en-US&page=${page}`,
        {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWFhMDljY2RhODEyMGUwYTVlZjhhY2FmYjRjZTcyMiIsInN1YiI6IjY0OTViNmMxZDVmZmNiMDBlMjA1NmUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1woHRI_SGg8LKusxqIBKPXtBEmINa7U-jgHUKhcQL0'
            }
        }).then(res => {
          console.log(res.data)
          setData(data = res.data.results);
          setDelay(false);
          console.log(data);
        }
          ).catch(err => console.log(err));

    },[userId,page])

useEffect(()=>{
  window.scrollTo({top:0, behavior:'smooth'});
  
},[page])

    return <div className="search-container">
    
    <div className="container"> 
    <Search />
    <div className="search-info">
      {data.length!=0?data.map(d =><Link to={'/movie/'+d.id} ><div style={{borderBottom:'1px solid white', padding: '5px',marginBottom:'25px'}}><ImageLoading page={page} width='100px' url={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} /><p style={{fontWeight:'bold',marginBottom:'10px'}}>{d.title}</p></div></Link>):<h2 style={{display:delay?'none':'block'}}>No Record Found</h2>}
      <div>
      {page>1?<Button variant="outlined" style={{marginRight:'10px'}} onClick={()=>{setPage(page-1)}}>
          Prev Page 
        </Button>:null}
        <Button variant="outlined" onClick={()=>{setPage(page+1)}}>
          Next Page
        </Button>

      </div>
    </div>

    </div>
    </div>
}

export default SearchResult;