
import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import './../styles/App.css';
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <BrowserRouter>
        
           <Switch>
             <Route exact path="/" component={ItemList}></Route>
             <Route path="/items/:id" component={ItemDetail}></Route>
           </Switch>
      
    </BrowserRouter>
    // <div>

    // </div>
  )
}

export default App;
