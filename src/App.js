import logo from './logo.svg';
import './App.css';
// import Basic from './component/2.2/Basic';
// import Box1 from './component/3.1/Box1';
// import Buttons from './component/4-1/Buttons';
// import Quiz from './component/3.2/Quiz';
// import Card from './component/4-2/Card';
// import CardTemplate from './component/4-2/CardTemplate';
// import Increment from './component/7-1/Increment';
// import HideAndSeek from './component/7-2/HideAndSeek';
// import LifeCycle from './Component/8-1/LifeCycle';
// import BoxSlide from './Component/8-2/BoxSlide';
// import ChangingBox from './Component/8-3/ChangingBox';
// import ButtonColor from './Component/11-1/ButtonColor';
// import CheckBox from './Component/11-2/CheckBox';
// import Joke from './Component/12-1/Joke';
// import GetJoke from './Component/12-1/GetJoke';
// import List from './Component/13-1/List';
// import FormSub from './Component/11-3/FormSub';
// import Avatar  from './Component/13-2/Avatar';
// import Focus from './Component/14-1/Focus';
// import CopyText from './Component/14-2/CopyText';
import Homepage from './Component/16-1/Homepage';
import Header from './Component/16-1/Header';
import Products from './Component/16-1/Products';
import ProductDetail from './Component/16-1/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
