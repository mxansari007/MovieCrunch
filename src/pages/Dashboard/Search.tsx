import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import './assets/scss/Search.scss';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

type searchData = string;

const Search = () => {


   
    let [searchData,setSerchData] = useState<searchData>('');
   let navigate = useNavigate();
    const handleClick = ()=>{
      let query:Array<string> = searchData.split(' ');
      
      let makelink:string = '/search/';
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

      
          navigate(makelink);
    }
const handleKey = (e) =>{
  if(e.key === 'Enter'){
    handleClick();
  }
}

   
    return (
    <div className="Container">
    
      
        <input type="text" onKeyDown={handleKey} onChange={(e)=>{setSerchData(e.target.value)}} placeholder="Search Movies" className="searchInput" />    
        <div className="btn">
        <Button  onClick={handleClick} variant="contained" endIcon={<SearchIcon />}>
        Search
      </Button>
      </div>
    </div>
    )
}


export default Search;