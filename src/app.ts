import {Router} from "./router";
import {LoginForm} from "./pages/login_form/login_form";
import {RegisterForm} from "./pages/registration_form/registeration_form";
import './css/all.css';

export const router = new Router()
router.registerRoute('/login/', LoginForm)
router.registerRoute('/registration/', RegisterForm)
//todo check for user here and go to login page if all is sucks
//router.navigate('/login')
router.navigate(window.location.pathname)
