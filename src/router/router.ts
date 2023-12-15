export class Route {
    path: string;
    class: any; //todo тип any, иначе проблемы с конструктором, с typeof Page не завелось. Используется только здесь.

    constructor(path: string, routeClass: any) {
        this.path = path;
        this.class = routeClass;
    }
}

export class Router {
    _root: HTMLElement|null;
    _routes: Array<Route>;

    constructor(rootDiv: string, routes: Array<Route> = []) {
        this._routes = routes;
        this._root = document.getElementById(rootDiv);
        window.addEventListener('popstate', (event) => {
            console.log(event)
        }, false);
    }

    normalizePath(path: string) {
        let _path = path;
        if (_path.length > 1 && _path[_path.length-1] !== '/') {
            _path += '/';
        }
        return _path;
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
                    this.setPage(route, false)
                } else {
                    this.setPage(this._getRoute('/404/'), false)
                }
            }
        } catch (err) {
            console.error(err)
            this.setPage(this._getRoute('/500/'), false)
        }
    }

    setPage(route: Route|undefined, setHistory: Boolean = true): void {
        if (route) {
            const obj = new (route.class)
            if (this._root) {
                this._root.replaceChildren(obj.div)
            }
            if (setHistory && window.history) {
                window.history.pushState([], '', route.path)
            }
        }
    }
}
