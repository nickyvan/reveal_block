import React, { Component } from 'react';
import './App.css';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
class App extends Component {
	render() {
		return (
			<div className="App">
        <nav className="page_nav">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
				<section className="content content--full flexy flexy--row">
					<h2 className="needReveal_content content__title content__title--medium content__title--half content__title--right">
						<div id="rev-4" className="content__title__inner">
							funky foxes love
						</div>
						<br />
						<div
							id="rev-5"
							className="needReveal_content content__title__inner content__title__inner--offset-2">
							technology
						</div>
					</h2>
					<div
						id="rev-3"
						className="needReveal_image content__image-wrap content__image-wrap--half">
						<img
							className="content__image"
							src={image1}
							alt="Some animation"
						/>
					</div>
				</section>
				<section className="content content--full flexy flexy--row">
					<div
						id="rev-6"
						className="needReveal_image content__image-wrap content__image-wrap--half">
						<img
							className="content__image"
							src={image2}
							alt="Some animation"
						/>
					</div>
					<h2 className="content__title content__title--medium content__title--half content__title--left">
						<div id="rev-7" className="needReveal_content content__title__inner">
							fierce bears make
						</div>
						<br />
						<div
							id="rev-8"
							className="needReveal_content content__title__inner content__title__inner--offset-2">
							responsiveness
						</div>
					</h2>
				</section>
				<section className="content content--full flexy flexy--row">
					<h2 className="content__title content__title--medium content__title--half content__title--right">
						<div id="rev-10" className="needReveal_content content__title__inner">
							fresh meerkats dig
						</div>
						<br />
						<div
							id="rev-11"
							className="needReveal_content content__title__inner content__title__inner--offset-2">
							team play
						</div>
					</h2>
					<div
						id="rev-9"
						className="needReveal_image content__image-wrap content__image-wrap--half">
						<img
							className="content__image"
							src={image3}
							alt="Some animation"
						/>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
