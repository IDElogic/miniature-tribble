
import './App.scss';
import ListItem from './Components/ListItem/ListItem';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";


const App = () => {
  return( 
    <div>
      <Home/>,
      <Login/>,
      <Register/>,
    </div>
  );
};

export default App;
