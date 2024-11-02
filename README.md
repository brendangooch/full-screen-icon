# full-screen-icon
An icon that you can add to your webpage that, when clicked, toggles fullscreen mode on the browser.  Designed for use in simple mobile games in the browser that require user gestures in fullscreen mode without the page scrolling.

You need a (free) fontawesome account to use this package

Simply enter your unique font-awesome ID and instantiate the FullSCreenIcon class to add the functionality to your webpage

How to use

```javascript
const myFontAwesomeId = 'a23509723';
const icon = new FullScreenIcon(myFontAwesomeId).top(20).right(20).color('yellow').size(30);
```

You will now have a fullscreen icon in the top right hand corner of your page

The package adds a script pointing to the font awesome cdn to the head of your document.

The package appends a single postion: fixed <i> element to the bottom of your html document.