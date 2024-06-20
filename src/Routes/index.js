import React from 'react'
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import SplitWiseHome from '../Components/SplitWiseComponents/index';

function Routes() {
  return (
    <div>
      <Switch>
      <Route
            exact
            path="/"
            render={()=><SplitWiseHome/>}
          />
          <Route path="*" render={() => <div>PAGE NOT FOUND</div>} />
      </Switch>
    </div>
  )
}

export default Routes= withRouter(Routes)