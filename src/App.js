import { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import { router } from "constants/root.router"
import AppLayout from "components/layout/AppLayout"
import CircleFullscreen from "components/loader/CircleFullscreen"

const App = () => (
  <Router>
    <Switch>
      <AppLayout>
        <Suspense fallback={<CircleFullscreen />}>
          {router.map((route) => (
            <Route
              key={route.path}
              exact={route.exact || false}
              path={route.path}
            >
              {route.component}
            </Route>
          ))}
        </Suspense>
      </AppLayout>
    </Switch>
  </Router>
)

export default App
