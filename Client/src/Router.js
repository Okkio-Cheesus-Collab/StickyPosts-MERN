import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const Board = lazy(() => import("./pages/board/Board"));

const AppRouter = () => (
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home} />
                <Route
                    exact
                    path="/board"
                    component={Board}
                />
            </Switch>
        </Suspense>
    </Router>
);

export default AppRouter;
