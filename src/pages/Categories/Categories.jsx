
import './assets/Categories.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Categories = ()=>{
    return <div className='categories-container'>
    
        <div className='container'>
          <div className='info-categories'>
            <h2>Categories</h2> 
            <Button sx={{mr:'10px'}} variant="outlined" color="info"><Link to="/Dashboard" >Action</Link></Button>
         </div>
         </div>
    </div>
}

export default Categories;