import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import addImage from './add-image';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
	console.warn('production');
} 

console.warn(process.env.NODE_ENV);


// addImage();