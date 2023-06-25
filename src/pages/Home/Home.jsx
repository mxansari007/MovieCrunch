import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import './assets/Home.scss'

const Home = ()=>{
    return <div className="container-home">
    <div className="bio-data">
        <h2>Hey There👋! Myself Maaz</h2>
        <p style={{padding:'10px',marginBottom:'10px'}}>I have created this awesome app📱, in which you can search Movies🍿 around the world and get real quick information</p>
        <Button sx={{mr:'10px',mt:{md:'0',xs:'10px'}}}  variant="outlined" color="info" endIcon={<PhoneIphoneIcon />}><Link style={{fontWeight:'bold'}} to="/Dashboard" >Goto App</Link></Button>
        <Button sx={{mr:'10px',mt:{md:'0',xs:'10px'}}} variant="contained" color="secondary" endIcon={<LinkedInIcon />}><Link to="https://www.linkedin.com/in/maaz-ansari-a6b6b0137/">Linkdin</Link></Button>
        <Button sx={{mr:'10px',mt:{md:'0',xs:'10px'}}} variant="contained" color="success" endIcon={<GitHubIcon />}><Link to="https://github.com/mxansari007">github</Link></Button>
       <div className="tech-stack">
        <h2>Tech Stack</h2>
        <div className="tech">
            <div className="tech-item">
            <div className="techimage">
                <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png" />
                <p>React Js</p>
            </div>  
            </div>
            <div className="tech-item">
            <div className="techimage">
                <img src="https://miro.medium.com/max/1024/1*9U1toerFxB8aiFRreLxEUQ.png" />
                </div>
                <p>Sass</p>
            </div>
            <div className="tech-item">
            <div className="techimage">
                <img src="https://ouvoir.ca/sn_uploads/logo_savoir_tmdb.png&maxw=300" />
                </div>
                <p>TMDB API</p>
            </div>
            <div className="tech-item">
            <div className="techimage">
                <img src="https://seeklogo.com/images/M/material-ui-logo-88EC9AE3DB-seeklogo.com.png" />
                </div>
                <p>Material UI</p>
            </div>
        </div>
        </div>
        </div>
        
    </div>
}


export default Home;