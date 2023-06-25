import {useState,useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';



const ImageLoading = (props:{url:string,width:string,page:number}) => {
    const [loading,setLoading]  = useState(true);

useEffect(()=>{
    setLoading(true);
},[props.page])

    return <>
        <img src={props.url}  onLoad={()=>{ setLoading(false)}} style={{width:props.width,display:loading?'none':'block'}} />
        <div style={{display:loading?'block':'none'}}><CircularProgress /></div>
    </>
}

export default ImageLoading;

