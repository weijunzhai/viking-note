import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import addImage from './add-image';
import Heading from './components/heading/heading';
import React from 'react';

const heading = new Heading();
heading.render("hello world");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
	console.warn('production');
} 

console.warn(process.env.NODE_ENV);


// addImage();