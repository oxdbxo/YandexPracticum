import Handlebars from "handlebars";
import {Route, Router} from "./router";
import {CenteredFormTemplate, LoginForm, MainPage, RegistrationForm} from "./pages";
import {ProfileForm} from './pages'
import {Page404} from "./pages";
import {Page5xx} from "./pages";
import {ROOT_DIV_ID} from "./constants";
import * as components from './components';
import './css/all.css';
import {TestPage} from "./tests";

//init handlebars
Object.entries(components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
});
Handlebars.registerPartial('CenterdFormPage', CenteredFormTemplate)

//init router
export const router = new Router(
    ROOT_DIV_ID,
    [
        new Route('/', TestPage),
        new Route('/404/', Page404),
        new Route('/5xx/', Page5xx),
        new Route('/login/', LoginForm),
        new Route('/registration/', RegistrationForm),
        new Route('/profile/', ProfileForm),
        new Route('/main/', MainPage),
    ]
)

//go to current page
router.navigate(window.location.pathname)
