import {Router} from "./router";
import {LoginForm, RegistrationForm} from "./pages";
import './css/all.css';

export const router = new Router()
router.registerRoute('/login/', LoginForm)
router.registerRoute('/registration/', RegistrationForm)
//todo check for user here and go to login page if all is sucks
router.navigate(window.location.pathname)
