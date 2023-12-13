import {Component} from "./components";
import {rootDivID} from "./constants";
import {page404} from "./error_pages/404";

class Route {
    _path: string
    _component: Component
    constructor(path: string, component: Component) {
        this._path = path;
        this._component = component;
    }
    getElement():Node|undefined {
        return this._component.getElement();
    }
}

export class Router {
    _routes: Array<Route> = []
    _base: string
    constructor(base: string = '/') {
        this._base = base;
    }

    registerRoute(path: string, component: Component) {
        this._routes.push(new Route(path, component))
    }

    _getRoute(path: string) {
        return this._routes.find((item) => item._path === path)
    }

    navigate(path: string) {
       const root = document.getElementById(rootDivID);
       if (root) {
           const route = this._getRoute(path)
           if (route) {
               const element = route.getElement()
               if (element)
                root.replaceChildren(element)
           } else {
               const element = new page404().getElement()
               console.log(element)
               root.replaceChildren(element)
           }
       }
    }
}
