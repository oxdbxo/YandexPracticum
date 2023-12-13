import {Router} from "./router";
import {LoginForm} from "./forms/login_form/login_form";
import './css/main.css'
import './css/text.css'
import './css/layout.css'
import './css/components.css'
import './forms/forms.css'
import {Page5xx} from "./error_pages/5xx";
import {RegisterForm} from "./forms/register_form/register";


const router = new Router()
router.registerRoute('/', new LoginForm())
router.registerRoute('/register', new RegisterForm())
router.registerRoute('/login', new LoginForm())
router.registerRoute('/500', new Page5xx())
//todo check for user here and go to login page if all is sucks
//router.navigate('/login')
router.navigate(window.location.pathname)
