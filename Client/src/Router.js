import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import themeJson from './Config/Config.json'

const Navbar = lazy(() => import("./ConstantComponents/NavBar/Navbar"));

const Home = lazy(() => import("./pages/Home/Home"));

const Board = lazy(() => import("./pages/Board/Board"));

const Auth = lazy(() => import("./pages/Auth/Auth"));

const themePref = themeJson[JSON.parse(localStorage.getItem('theme'))]
const sheet = document.styleSheets[0];
        sheet.insertRule(`:root{
            --theme-primary:${themePref.primary};
            --theme-secondary:${themePref.secondary};
            --theme-text:${themePref.text};
            --theme-filter:${themePref.filter};
            --theme-click:${themePref.click}; 
            --theme-bg:${themePref.bg};
            --theme-fields:${themePref.fields}; 
        }`);
const AppRouter = () => (
    <Router>
        <Suspense fallback={<p>Loading...</p>}>
            <Switch>
                <Route
                    exact
                    path="/board"
                    component={Board} />
                <Route component={NavRequired}/>
                
            </Switch>
        </Suspense>
    </Router>
);
const NavRequired = () => (
    <>
    {window.location.pathname !== "/board" ?
                    <Route component={Navbar}/>
                    : null
                }
    <Route
        exact
        path="/login"
        component={Auth} />
    <Route
        exact
        path="/"
        component={Home} />
    </>                
)

export default AppRouter;