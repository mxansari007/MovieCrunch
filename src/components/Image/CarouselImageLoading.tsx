import {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './asset/CarouselImageLoading.scss';



const CarouselImageLoading = (props:{url:string}) => {
    const [loading,setLoading]  = useState(true);

    return <>
        <img src={props.url}  onLoad={()=>{setLoading(false)}} style={{display:loading?'none':'block'}} />
        <div style={{display:loading?'block':'none'}}><CircularProgress /></div>
    </>
}

export default CarouselImageLoading;