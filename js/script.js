let char = new Miranha('Miranha');
let monster = new Duendeverde();

const stage = new Stage(char, monster, document.querySelector('.char'),  document.querySelector('.monster'));
stage.start();