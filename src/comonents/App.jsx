import Header from "./Header";
import PopularMovies from "./PopularMovies";
import MoviesOnCinema from "./MoviesOnCinema";
import UpcomingMovies from "./UpcomingMovies";
import MovieDetail from "./MovieDetail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchMovies from "./SearchMovies";

function App() {





  return (
    <Router>
      <div className=" bg-gray-800">
        <Header/>
        <Switch>
          <Route path="/" exact component={PopularMovies}/>
          <Route path="/search/:search" component={SearchMovies}/>
          <Route path="/MoviesOnCinema" exact component={MoviesOnCinema}/>
          <Route path="/UpcomingMovies" exact component={UpcomingMovies}/>
          <Route path="/details/:id" component={MovieDetail}/>
        </Switch>
    </div>
    </Router>
    
  ) 
}

export default App;
