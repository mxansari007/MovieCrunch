import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from './assets/images/1.jpg';
import './assets/scss/Popular.scss';
import axios from 'axios';
import {Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import CarouselImageLoading from '../../components/Image/CarouselImageLoading.tsx';

const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
};








const onInitialized = (e) => {
    console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
    console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
    console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
    console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};



const Popular = ()=>{

    let [movieData, setData]  = useState([]);

    useEffect(()=>{
        
        axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
            method:'GET',
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWFhMDljY2RhODEyMGUwYTVlZjhhY2FmYjRjZTcyMiIsInN1YiI6IjY0OTViNmMxZDVmZmNiMDBlMjA1NmUxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1woHRI_SGg8LKusxqIBKPXtBEmINa7U-jgHUKhcQL0',
                accept:'application/json',
            }
        }).then(res=>{
            console.log(res.data);
            setData(movieData = res.data.results);
            console.log(movieData);
        }).catch(err=>{
            console.log(err);
        })
    },[])

   const items = movieData.map(
            (d) => 
            <div 
            className='item' 
            data-value={d.id} 
            id={d.id}><Link to={'/movie/'+d.id}><CarouselImageLoading 
            url={'https://image.tmdb.org/t/p/original'+d.poster_path} 
           /></Link></div>)



    return <div className="Carousel">
    <h2 style={{padding:'10px'}}>Popular Movies</h2>
      <AliceCarousel
        mouseTracking
        keyboardNavigation
        items={items}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized}
        autoPlay={true}
        autoPlayInterval={3000}
        infinite={true}
        disableDotsControls={true}
        
    />
    </div>
}


export default Popular;