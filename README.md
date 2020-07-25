# react-timer
react-timer is a small countdown web app built with react

http://markbrandly.github.io/react-timer/

## Technical

react-timer uses Node.js with Webpack to compile React JSX and SASS into a single page application.

The timer tracks time using JavaScript's Date class, which allows it to accurately track time even while the page is minimized.

The current time is updated 6 times per second while the page is in focus. Chrome and other browsers will only update it once per second when minimized, however.

The applicaton meets all the specifications as defined by ./Countdown timer SPA.pdf.

The play/pause button borrows inspiration from Daniel Abdilla's article on CSS-Tricks: https://css-tricks.com/making-pure-css-playpause-button/

## Images

![counting.png](https://github.com/markbrandly/react-timer/blob/master/sample-images/counting.png)

![red.png](https://github.com/markbrandly/react-timer/blob/master/sample-images/red.png)