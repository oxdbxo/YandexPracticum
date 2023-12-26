export function openNewWindow(href: string) { //temporary for test page onle
    const link = document.createElement("a")
    link.href = href;
    link.target = '_blank';
    link.click()
}
