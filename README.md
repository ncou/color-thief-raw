# Color Thief with Jimp for NodeJs

A script for grabbing the color palette from an image. Uses Javascript and the [Jimp](https://github.com/oliver-moran/jimp) to make it happen.
This fork does NOT use canvas, and is can only used with NodeJs.

[See a Demo](http://lokeshdhakar.com/projects/color-thief) | [Read more on my blog](http://lokeshdhakar.com/color-thief)


## How to use

### Get the dominant color from an image
```js
var ColorThief = require('ColorThief');

// getColor(sourceImage[, quality])
var dominantColor = ColorThief.getColor(sourceImage);
// dominantColor = [intRed, intGreen, intBlue]
```

```js
returns {r: num, g: num, b: num}
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
var ColorThief = require('ColorThief');

// getPalette(sourceImage[, colorCount, quality])
var palette = ColorThief.getPalette(sourceImage, 8);
// palette = [ [intRed, intGreen, intBlue], [intRed, intGreen, intBlue], ... ]
```

## Changelog

### TBD
