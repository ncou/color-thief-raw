# Color Thief for NodeJs

This fork allows white color and uses 3 or 4 channels raw data for input

## How to use

### Get the dominant color from an image
```js
var ColorThief = require('color-thief-raw');

// getColor(sourceImage[, quality])
// sourceImage = {
//   data: [...], // 3 or 4 channels raw data
//   info: {
//     width: imageWidth,
//     height: imageHeight,
//     channels: numberOfChannels
//   }
// }
var dominantColor = ColorThief.getColor(sourceImage);
// dominantColor = [intRed, intGreen, intBlue]
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
var ColorThief = require('color-thief-raw');

// getPalette(sourceImage[, colorCount, quality])
var palette = ColorThief.getPalette(sourceImage, 8);
// palette = [ [intRed, intGreen, intBlue], [intRed, intGreen, intBlue], ... ]
```

## Credits
Source code based on

[color-thief](https://github.com/lokesh/color-thief/) ([MIT license](https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE))
by Lokesh Dhakar
lokeshdhakar.com

[color-thief-jimp](https://github.com/jeanmatthieud/color-thief-jimp) ([MIT license](https://raw.githubusercontent.com/jeanmatthieud/color-thief-jimp/master/LICENSE))
by Jean-Matthieu DECHRISTÉ
