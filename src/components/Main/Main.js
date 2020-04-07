import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../Series/Series';
import Singleseries from '../Series/SingleSeries/SingleSeries';

const Main = () => (
    <Switch>
      <Route exact path="/" component={Series}/>
      <Route path="/series/:id" component={Singleseries}/>
    </Switch>
  )


export default Main;