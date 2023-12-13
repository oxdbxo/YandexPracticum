import {Router} from "./router";
import {LoginForm} from "./login_form/login_form";
import './css/main.css'
import './css/text.css'
import './css/layout.css'

const router = new Router()
router.registerRoute('/', new LoginForm())
router.registerRoute('/login', new LoginForm())
//todo check for user here and go to login page if all is sucks
router.navigate(window.location.pathname)
