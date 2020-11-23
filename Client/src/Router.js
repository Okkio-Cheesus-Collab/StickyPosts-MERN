import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import themeJson from './Config/Config.json'

const Navbar = lazy(() => import("./ConstantComponents/NavBar/Navbar"));

const Home = lazy(() => import("./pages/Home/Home"));

const Board = lazy(() => import("./pages/Board/Board"));

const Auth = lazy(() => import("./pages/Auth/Auth"));

let themePref = JSON.parse(localStorage.getItem('theme'))

if (themePref !== 'lightMode' && themePref !== 'darkMode') {
    themePref = themeJson.tempPref
} 

const sheet = document.styleSheets[0];
        sheet.insertRule(`:root{
            --theme-primary:${themeJson[themePref].primary};
            --theme-secondary:${themeJson[themePref].secondary};
            --theme-text:${themeJson[themePref].text};
            --theme-filter:${themeJson[themePref].filter};
            --theme-click:${themeJson[themePref].click}; 
            --theme-bg:${themeJson[themePref].bg};
            --theme-fields:${themeJson[themePref].fields}; 
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