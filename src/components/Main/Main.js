import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../../containers/Series/Series';
import Singleseries from '../../containers/SingleSeries';

function Main(props){

  return(
    <Switch>
      <Route exact path="/" component={Series}/>
      <Route path="/series/:id" component={Singleseries}/>
    </Switch>
  )
}

export default Main;