/**
 * 
 */

export class FullScreenIcon {

    private static FONT_AWESOME_CDN: string = 'https://kit.fontawesome.com/<uniqueID>.js';
    private static EXPAND_CLASSES: string[] = ['fa-solid', 'fa-up-right-and-down-left-from-center'];
    private static SHRINK_CLASSES: string[] = ['fa-solid', 'fa-down-left-and-up-right-to-center'];
    private static DEFAULT_COLOR: string = '#cccccc';
    private static DEFAULT_SIZE: number = 36;

    private uniqueID: string;
    private scriptTag: HTMLScriptElement;
    private iconTag: HTMLElement;

    public constructor(uniqueID: string) {
        this.uniqueID = uniqueID;
        this.createScriptTag();
        this.createIconTag();
        this.displayExpandIcon();
        this.styleIcon();
        this.addClickHandler();
        this.addScriptToPage();
        this.addIconToPage();
        return this;
    }

    public top(n: number): FullScreenIcon {
        this.iconTag.style.top = `${n}px`;
        return this;
    }

    public bottom(n: number): FullScreenIcon {
        this.iconTag.style.bottom = `${n}px`;
        return this;
    }

    public left(n: number): FullScreenIcon {
        this.iconTag.style.left = `${n}px`;
        return this;
    }

    public right(n: number): FullScreenIcon {
        this.iconTag.style.right = `${n}px`;
        return this;
    }

    public size(n: number): FullScreenIcon {
        this.iconTag.style.fontSize = `${n}px`;
        return this;
    }

    public color(c: string): FullScreenIcon {
        this.iconTag.style.color = c;
        return this;
    }

    public show(): void {
        this.iconTag.style.display = 'block';
    }

    public hide(): void {
        this.iconTag.style.display = 'none';
    }

    // <script src="https://kit.fontawesome.com/a3008030ac.js" crossorigin="anonymous"></script>
    private createScriptTag(): void {
        this.scriptTag = document.createElement('script');
        this.scriptTag.src = this.makeScriptSrc();
        this.scriptTag.crossOrigin = 'anonymous';
    }

    private createIconTag(): void {
        this.iconTag = document.createElement('i');

    }

    private styleIcon(): void {
        this.iconTag.style.position = 'fixed';
        this.iconTag.style.display = 'block';
        this.size(FullScreenIcon.DEFAULT_SIZE).color(FullScreenIcon.DEFAULT_COLOR);
    }

    private addClickHandler(): void {
        this.iconTag.addEventListener('click', () => this.toggleFullScreen());
    }

    private addScriptToPage(): void {
        document.head.appendChild(this.scriptTag);
    }

    private addIconToPage(): void {
        document.body.appendChild(this.iconTag);
    }

    private makeScriptSrc(): string {
        return FullScreenIcon.FONT_AWESOME_CDN.replace('<uniqueID>', this.uniqueID);
    }

    private displayExpandIcon(): void {
        this.clearClassList();
        FullScreenIcon.EXPAND_CLASSES.forEach(className => this.iconTag.classList.add(className));
    }

    private displayShrinkIcon(): void {
        this.clearClassList();
        FullScreenIcon.SHRINK_CLASSES.forEach(className => this.iconTag.classList.add(className));
    }

    private clearClassList(): void {
        this.iconTag.classList.remove(...this.iconTag.classList);
    }

    private toggleFullScreen(): void {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            this.displayShrinkIcon();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            this.displayExpandIcon();
        }
    }


}