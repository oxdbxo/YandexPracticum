import Handlebars from "handlebars";
import {Route, Router} from "./router";
import {CenteredFormTemplate, LoginForm, RegistrationForm} from "./pages";
import {ProfileForm} from './pages/profile_form/profile_form'
import {Page404} from "./pages/error_pages/404";
import {Page5xx} from "./pages/error_pages/5xx";
import {ROOT_DIV_ID} from "./constants";
import * as components from './components';
import './css/all.css';
import {ForTest} from "./pages/for_test/for_test";

//init handlebars
Object.entries(components).forEach(([ name, component ]) => {
    Handlebars.registerPartial(name, component);
});
Handlebars.registerPartial('CenterdFormPage', CenteredFormTemplate)

//init router
export const router = new Router(
    ROOT_DIV_ID,
    [
        new Route('/', ForTest),
        new Route('/404/', Page404),
        new Route('/500/', Page5xx),
        new Route('/login/', LoginForm),
        new Route('/registration/', RegistrationForm),
        new Route('/profile/', ProfileForm),
    ]
)

//go to current page
//todo check for user here and go to login page if all is sucks
router.navigate(window.location.pathname)
