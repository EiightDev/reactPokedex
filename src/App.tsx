import React, { FunctionComponent } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageNotFound from "./pages/page-not-found";
import PokemonAdd from "./pages/pokemon-add"
import PokemonDetail from "./pages/pokemon-detail";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonList from "./pages/pokemon-list";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/pokemons" component={PokemonList} />
        <Route exact path="/pokemons/add" component={PokemonAdd} />
        <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <Route path="/pokemons/:id" component={PokemonDetail} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
};

export default App;
