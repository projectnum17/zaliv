// src/assets/js/modules/test.js
var test = () => {
  console.log("test");
};

// src/assets/js/modules/example.js
var example = () => {
  console.log(1);
  test();
};

// src/assets/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  example();
});
