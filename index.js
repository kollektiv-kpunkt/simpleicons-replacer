import * as simpleIcons from 'simple-icons/icons';


class siReplacer {
    constructor() {
        this.icons = simpleIcons;
        this.iconList = Object.keys(this.icons);
        this.iconList.forEach((icon) => {
            this[icon] = this.icons[icon];
        });
    }

    replace() {
        const icons = document.querySelectorAll('i[data-si]');

        icons.forEach(icon => {
            let iconName = icon.getAttribute('data-si').toLowerCase();
            iconName = "si" + iconName.charAt(0).toUpperCase() + iconName.slice(1);
            icon.innerHTML = simpleIcons[iconName].svg;
            this.setStyles(icon, window.getComputedStyle(icon));
        });
    }

    setStyles(icon, styles) {
        icon.style.width = (styles.width != "auto") ? styles.width : "1rem";
        icon.style.height = (styles.width != "auto") ? styles.width : "1rem";
        icon.style.display = (styles.display != "inline") ? styles.display : "inline-flex";
        icon.style.fill = icon.style.color || "currentColor";
    }
}

export default siReplacer;