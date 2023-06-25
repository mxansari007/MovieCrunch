import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Movie from '../pages/Movie/Movie.tsx';
import SearchResult from '../pages/SearchResult/SearchResult.tsx';
import Categories from '../pages/Categories/Categories.jsx';

const Routing = () =>{
    return<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/movie/:userId" element={<Movie />} />
        <Route path="/search/:userId" element={<SearchResult />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>

    </>
}


export default Routing;