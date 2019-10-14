import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './sources/bootstrap.min.css';
import './sources/bootstrap-grid.min.css';
import './sources/bootstrap-reboot.min.css';
import Home from './components/Home';
import Browse from './components/Browse';
import 'bootstrap/dist/js/bootstrap.js';


const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Browse" component={Browse} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
