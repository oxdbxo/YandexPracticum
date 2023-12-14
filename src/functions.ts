export function searchElementByName(where: Element|undefined, name: string): HTMLElement | undefined {
    if (where !== undefined) {
        for (const child of where.children) {
            if (child.getAttribute('name') === name) {
                return child as HTMLElement;
            } else {
                for (const _child of child.children) {
                    const ele: HTMLElement | undefined = searchElementByName(_child, name);
                    if (ele) {
                        return ele;
                    }
                }
            }
        }
    }
    return undefined;
}
