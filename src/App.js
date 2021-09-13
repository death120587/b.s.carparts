import '../node_modules/antd/dist/antd.css';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import MainLayouyt from './Components/Layouts/MainLayout';
import Home from './Components/Home';
import BrandList from './Components/References/Brands/List';
import ModelList from './Components/References/Models/List';
import GoodsList from './Components/References/Goods/List';


function App(props) {
  const { history } = props;

  return (
    <div className="App">
          <MainLayouyt>
            <Switch>
              <Route history={history} path='/home' component={Home} />
              <Route history={history} path='/brands' component={BrandList} />
              <Route history={history} path='/models' component={ModelList} />
              <Route history={history} path='/goods' component={GoodsList} />
              <Redirect from='/' to='/home'/>
            </Switch>
          </MainLayouyt>
        </div>
  );
}

export default withRouter(App);
