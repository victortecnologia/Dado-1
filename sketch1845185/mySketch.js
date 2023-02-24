let numero = 1;
var mySound1;
var mySound2;
var mySound3;
var mySound4;
var mySound5;
var mySound6;

function preload() {
 mySound1 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.44%E2%80%8B.aac');
 mySound2 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.44%E2%80%8B(2).aac');
 mySound3 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B.aac');
 mySound4 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B(2).aac');
 mySound5 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B(3).aac');
 mySound6 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.46%E2%80%8B.aac');
}

function setup() {
 boton = createButton('Pulsa para tirar el dado');
 boton.size(100, 50);
 boton.mousePressed(cambiarNumero);
 createCanvas(300, 300);
 background(100);
}

function cambiarNumero() {
 numero = random(0, 6);
 dado = new Dado(6, numero);
 dado.mostrar();
 //textSize(8);
 //fill(0);
 //text(numero, 150,200 );
}
class Dado {
 constructor(_caras, _numero) {
  this.caras = _caras;
  this.numero = _numero;
 }
 mostrar() {
  if (this.numero > 0 && this.numero < 1) {
   mySound1.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(150, 150, 50, 50);
  }
  if (this.numero > 1 && this.numero < 2) {
   mySound2.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(100, 100, 50, 50);
   ellipse(200, 200, 50, 50);
  }
  if (this.numero > 2 && this.numero < 3) {
   mySound3.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(150, 150, 50, 50);
   ellipse(225, 225, 50, 50);
  }
  if (this.numero > 3 && this.numero < 4) {
   mySound4.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(100, 100, 50, 50);
   ellipse(100, 200, 50, 50);
   ellipse(200, 100, 50, 50);
   ellipse(200, 200, 50, 50);
  }
  if (this.numero > 4 && this.numero < 5) {
   mySound5.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(75, 225, 50, 50);
   ellipse(150, 150, 50, 50);
   ellipse(225, 75, 50, 50);
   ellipse(225, 225, 50, 50);
  }
  if (this.numero > 5 && this.numero < 6) {
   mySound6.play();
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(75, 150, 50, 50)
   ellipse(75, 225, 50, 50);
   ellipse(225, 150, 50, 50);
   ellipse(225, 75, 50, 50);
   ellipse(225, 225, 50, 50);
  }
 }
}