export function searchElementByName(root: HTMLElement, name: string): HTMLElement | undefined {
    const ele = root.querySelector(`[name="${name}"]`);
    if (ele instanceof HTMLElement) //преобразование т.к. querySelector возвращает Element | null
        return ele;
    else
        return undefined;
}

export function openNewWindow(href: string) { //temporary for test page onle
    const link = document.createElement("a")
    link.href = href;
    link.target = '_blank';
    link.click()
}
