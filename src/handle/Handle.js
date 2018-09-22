import PageScroll from './PageScroll';
export default class Handle {
  constructor() {
    this.animation = false;
    this.nal = document.querySelectorAll('.page_nav ul li');
    this.pages = [];
    document
      .querySelectorAll('.content')
      .forEach((el,i) =>
        this.pages.push(
          new PageScroll(el, { color: i % 2 === 0 ? '#fff' : '#000' })
        )
      );
    for (let i = 0; i < this.nal.length; i++) {
      this.nal[i].addEventListener('click', () => this.animated(i), false);
    }
    this.current = 0;
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].hide();
    }
    this.pages[this.current].animated(true);
  }
  animated = (i) => {
    if (i === this.current) return;
    if (this.animation) return;
    this.animation = true;
    if (i > this.current) {
      this.pages[i].animated(true).then((e) => {
        this.pages[this.current].hide();
        this.current = i;
        this.animation = false;
      });
    } else {
      this.pages[i].show();
      this.pages[this.current]
        .animated(false)
        .then((e) =>
          // this.current = i;
          // this.animation = false;
          this.pages[i].showEle()
        )
        .then((e) => {
          this.current = i;
          this.animation = false;
        });
    }
  };
}
