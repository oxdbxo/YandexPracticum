export function searchElementByName(root: HTMLElement, name: string): HTMLElement | undefined {
    const ele = root.querySelector(`[name="${name}"]`);
    if (ele instanceof HTMLElement) //преобразование т.к. querySelector возвращает Element | null
        return ele;
    else
        return undefined;
}
