import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './style/theme/uiTheme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Home from './pages/Home/Home';
import MenuList from './component/MenuList/MenuList';
import { Box } from '@mui/material';

const API_URL = "https://fakestoreapi.com"

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  useEffect (()=>{
    axios
      .get(`${API_URL}/products/categories`)
      .then(res=>{
        setCategoryData(res.data);
      })
      .catch(err=>{
        console.log(err)
      })
  }, [])

  const handleMenu = ()=>{
    setMenuOpen(true);
    console.log('menu')
  }



  
  return (
    <ThemeProvider theme={theme}>
        <NavBar handleMenu={handleMenu} menuOpen={menuOpen} categoryData={categoryData}/>
        <Box sx={{display: menuOpen ? "inlined": "none",}}>
          <MenuList categoryData={categoryData}/>
        </Box>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
