const nearestColor = require("nearest-color");
const namedColors = require("color-name-list");

function getClosesNamedColor(hex) {
  // nearestColor need objects {name => hex} as input
  const colors = namedColors.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  const nearest = nearestColor.from(colors);

  // get closest named color
  const color = nearest(hex); // => Fairy Tale

  return color;
}

console.log("colors", getClosesNamedColor("#f1c1d1"));
