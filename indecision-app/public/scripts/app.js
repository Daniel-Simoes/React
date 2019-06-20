'use strict'

console.log('App.js is running!');

//JSX - JavaScript XLM
var Template = React.createElement(
    'p',
    null,
    'This is JSX from appRoot.js!'
 );
var appRoot = document.getElementById('app')

ReactDOM.render(Template,appRoot);