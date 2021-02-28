import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Components/Pages/LandingPage';
import Customize from './Components/Pages/Customize';
import MyPlan from './Components/Pages/MyPlan';
import Checkout from './Components/Pages/Checkout';
import Cart from './Components/Pages/Cart';
import Auth from './Components/Pages/Auth';

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/customize' component={ Customize } />
        <Route exact path='/my-plan' component={ MyPlan } />
        <Route exact path='/checkout' component={ Checkout } />
        <Route exact path='/cart' component={ Cart } />
        <Route exact path='/auth' component={ Auth } />
    </Switch>
)