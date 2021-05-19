import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Components/Pages/LandingPage';
import Customize from './Components/Pages/Customize';
import MyPlan from './Components/Pages/MyPlan';
import Checkout from './Components/Pages/Checkout';
import Cart from './Components/Pages/Cart';
import Auth from './Components/Pages/Auth';
import Register from './Components/Pages/Register';
// import Success from './Components/Pages/Success';
// import Test from './Components/Test';
import HowTo from './Components/Pages/HowTo';
import Dashboard from './Components/Pages/Dashboard';
import Tips from './Components/Pages/Tips';

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/customize' component={ Customize } />
        <Route exact path='/my-plan' component={ MyPlan } />
        <Route exact path='/checkout' component={ Checkout } />
        <Route exact path='/cart' component={ Cart } />
        <Route exact path='/auth' component={ Auth } />
        <Route exact path='/register' component={ Register } />
        <Route path='/success/:sessionId' component={ MyPlan } />
        {/* <Route exact path="/test" component={ Test } /> */}
        <Route exact path="/how-to" component={ HowTo } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route exact path="/tips" component={ Tips } />
    </Switch>
)