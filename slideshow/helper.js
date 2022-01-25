console.log('57');

export function addCSS(module) {
    if (!CSSInHead(module)) {
        const head = document.querySelector('head');
        let link = document.createElement('link');
        link.href = `./slideshow/${module}/${module}.css`;
        link.type = "text/css";
        link.rel = "stylesheet";
        head.appendChild(link);
    }
}


function CSSInHead(module) {
    const head = document.querySelector('head');
    for (let child of head.children) {
        if (child.href) {
            if (child.href.includes(module)) {
                return true
            }
        }
    }
    return false
}

console.log('hello');
console.log('conflict');
console.log('summon');
