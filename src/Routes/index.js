import React from 'react'
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import JobComponent from '../Components/JobPage';

function Routes() {
  return (
    <div>
      <Switch>
      <Route
            exact
            path="/"
            render={()=><JobComponent/>}
          />
          <Route path="*" render={() => <div>PAGE NOT FOUND</div>} />
      </Switch>
    </div>
  )
}

export default Routes= withRouter(Routes)