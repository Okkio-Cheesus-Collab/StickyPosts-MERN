import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Navbar = lazy(() => import("./ConstantComponents/NavBar/Navbar"));

const Home = lazy(() => import("./pages/Home/Home"));

const Board = lazy(() => import("./pages/Board/Board"));

const AppRouter = () => (
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Route 
                path="/"
                component={Navbar}/>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home} />
                <Route
                    exact
                    path="/board"
                    component={Board} />
            </Switch>
        </Suspense>
    </Router>
);

export default AppRouter;