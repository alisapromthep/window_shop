import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from './style/theme/uiTheme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import Home from './pages/Home/Home';

const API_URL = "https://fakestoreapi.com"

function App() {

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



  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar categoryData={categoryData}/>
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
