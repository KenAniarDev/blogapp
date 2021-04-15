import './App.css';
import './bootstrap-grid.css';
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import Sample from './Sample'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 
  return (
    <Router>
       <div className="App">
        <Navbar />
        <div className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sample">
              <Sample />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
