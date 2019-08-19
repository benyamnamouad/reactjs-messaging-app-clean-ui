import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import NewThread from "./components/NewThread/NewThread";

function App() {
  return (
    <div className="App">

        <main>
            <Switch>

                <Route  exact path='/' component={Home}/>
                <Route  exact path='/new-thread' component={NewThread}/>

            </Switch>
        </main>

    </div>
  );
}

export default App;
