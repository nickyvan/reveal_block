import TweenMax from 'gsap/TweenMax';
import Revealer from './Revealer';
class PageScroll {
  constructor(el, options) {
    this.el = el;
    this.reveals = [];
    this.el.querySelectorAll('.fuck').forEach((el, i) =>
      this.reveals.push(
        new Revealer(el, {
          direction: i % 2 === 0 ? 'lr' : 'rl',
          bgcolor: options.color
        })
      )
    );
    this.animation = false;
    window.addEventListener('resize', () => this.setPageSize(), false);
  }
  setPageSize = () => {
    if (this.animation) return;
    TweenMax.set(this.el, {
      clip: `rect(0px ${window.innerWidth}px ${window.innerHeight}px 0px)`
    });
  };
  hide = () => {
    this.el.style.zIndex = 1;
    this.reveals.forEach((el) => el.reset());
  };
  show = () => {
    this.el.style.zIndex = 2;
    this.reveals.forEach((el) => el.reset());
  };
  showEle = () => {
    return new Promise((resolve, err) => {
      this.el.style.zIndex = 2;

      let parray = this.reveals.map((el) => {
        el.animated();
      });
      Promise.all(parray).then(() => {
        this.animation = false;
        resolve();
      });
    });
  };
  animated = (next) => {
    if (this.animation) return;
    this.animation = true;
    let winH = window.innerHeight;
    let winW = window.innerWidth;
    this.reveals.forEach((el) => el.reset());
    if (next) {
      return new Promise((resolve, err) => {
        TweenMax.fromTo(
          this.el,
          1,
          { zIndex: 3, clip: `rect(0px ${winW}px 0px 0px)` },
          {
            clip: `rect(0px ${winW}px ${winH}px 0px)`,
            ease: 'Power4.easeOut',
            onComplete: () => {
              this.show();
              let parray = this.reveals.map((el) => {
                el.animated();
              });
              Promise.race(parray).then(() => {
                this.animation = false;
                resolve();
              });
            }
          }
        );
      });
    } else {
      return new Promise((resolve, err) => {
        TweenMax.fromTo(
          this.el,
          1,
          { zIndex: 3, clip: `rect(0px ${winW}px ${winH}px 0px)` },
          {
            clip: `rect(0px ${winW}px 0px 0px)`,
            ease: 'Power4.easeOut',
            onComplete: () => {
              this.animation = false;
              this.hide();
              resolve();
            }
          }
        );
      });
    }
  };
}

export default PageScroll;
