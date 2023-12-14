import {rootDivID} from "./constants";
import {Page404} from "./pages/error_pages/404";
import {Page5xx} from "./pages/error_pages/5xx";

class Route {
    path: string;
    class: any;

    constructor(path: string, routeClass: any) {
        this.path = path;
        this.class = routeClass;
    }
}

export class Router {
    _root: HTMLElement|null;
    _routes: Array<Route> = [
        new Route('/404/', Page404),
        new Route('/500/', Page5xx),
    ]
    _base: string;

    constructor(base: string = '/') {
        this._base = base;
        this._root = document.getElementById(rootDivID);
    }

    normalizePath(path: string) {
        let _path = path;
        if (_path.length > 1 && _path[_path.length-1] !== '/') {
            _path += '/';
        }
        return _path;
    }

    registerRoute(path: string, routeClass: any) {
        let _path = this.normalizePath(path)
        const index = this._getRouteIndex(_path)
        if (index === -1) {
            this._routes.push(new Route(_path, routeClass))
        }
        else {
            this._routes[index] = new Route(_path, routeClass)
        }
    }

    _getRouteIndex(path: string) {
        return this._routes.findIndex(item => item.path == path)
    }

    _getRoute(path: string) {
        return this._routes.find(item => item.path === path)
    }

    navigate(path: string) {
        const _path = this.normalizePath(path)
        try {
            if (this._root) {
                const route = this._getRoute(_path)
                if (route) {
                    this.setPage(route)
                } else {
                    this.setPage(this._getRoute('/404/'))
                }
            }
        } catch (err) {
            console.error(err)
            this.setPage(this._getRoute('/500/'))
        }
    }

    setPage(route: Route|undefined): void {
        if (route) {
            const obj = new (route.class)
            if (this._root) {
                this._root.replaceChildren(obj.div)
            }
            console.log(route)
            if (window.history)
                window.history.pushState([], '', route.path)
        }
    }
}
