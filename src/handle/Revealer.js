import TweenMax from 'gsap/TweenMax';
class Revealer extends Component {
	constructor(el, options) {
		this.el = el;
		this.revealSettings = {
			direction: 'lr',
			bgcolor: '#f0f0f0',
			duration: 500,
			delay: 0,
			easing: 'Power4.easeOut'
		};
		this.isAnimating = false;
		this.layout();
	}
	layout = () => {
		// create content element
		this.content = document.createElement('div');
		this.content.classList.add('block-revealer__content');
		this.content.innerHTML = this.el.innerHTML;
		// hidden content
		this.content.style.opacity = 0;
		// create revealer element
		this.revealer = document.createElement('div');
		this.revealer.classList.add('block-revealer__element');
		// delete el contents
		this.el.innerHTML = '';
		// ad block-revealer
		this.el.appendChild(this.content);
		this.el.appendChild(this.revealer);
	};
	transformSetting = () => {
		this.revealer.style.backgroundColor = this.revealSettings.bgcolor;
		switch (this.revealSettings.direction) {
			case 'lr':
				this.revealer.style.transform = 'scale3d(0,1,1)';
				this.revealer.style.transformOrigin = '0 50%';
				this.revealSettings.origin_2 = '100% 50%';
				break;
			case 'rl':
				this.revealer.style.transform = 'scale3d(0,1,1)';
				this.revealer.style.transformOrigin = '100% 50%';
				this.revealSettings.origin_2 = '0 50%';
				break;
			case 'tb':
				this.revealer.style.transform = 'scale3d(1,0,1)';
				this.revealer.style.transformOrigin = '50% 0';
				this.revealSettings.origin_2 = '50% 100%';
				break;
			case 'bt':
				this.revealer.style.transform = 'scale3d(1,0,1)';
				this.revealer.style.transformOrigin = '50% 100%';
				this.revealSettings.origin_2 = '50% 0';
				break;
			default:
				this.revealer.style.transform = 'scale3d(0,1,1)';
				this.revealer.style.transformOrigin = '0 50%';
				this.revealSettings.origin_2 = '100% 50%';
				break;
		}
		let duration = this.revealSettings.duration;
		let from = {};
		let from2 = {};
		let to2 = {
			ease: this.revealSettings.easing,
			onComplete: () => {
				this.isAnimating = false;
			}
		};
		let to = {
			delay: this.revealSettings.delay,
			ease: this.revealSettings.easing,
			onComplete: () => {
				this.revealer.style.transformOrigin = this.revealSettings.origin_2;
				this.content.style.opacity = 1;
				TweenMax.fromTo(this.revealer, duration, from2, to2);
			}
		};

		if (
			this.revealSettings.direction === 'lr' ||
			this.revealSettings.direction === 'rl'
		) {
			from.scaleX = 0;
			to.scaleX = 1;
			from_2.scaleX = 1;
			to_2.scaleX = 0;
		} else {
			from.scaleY = 0;
			to.scaleY = 1;
			from_2.scaleY = 1;
			to_2.scaleY = 0;
		}
		return {
			duration: duration,
			from: from,
			to: to
		};
	};
	animation = () => {
		if (this.isAnimating) return;
		this.isAnimating = true;

		TweenMax.fromTo(
			this.revealer,
			this.transformSetting().duration,
			this.transformSetting().from,
			this.transformSetting().to
		);
	};
}

export default Revealer;
