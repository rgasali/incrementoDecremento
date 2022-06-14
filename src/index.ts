"use strict";

let spamContador = <HTMLSpanElement>document.getElementById("spamContador");
let btnIncremento = <HTMLButtonElement>document.getElementById("btnIncremento");
let btnDecremento = <HTMLButtonElement>document.getElementById("btnDecremento");
let inputSumarVarios = <HTMLInputElement>(
  document.getElementById("inputSumarVarios")
);
let btnSumarVarios = <HTMLButtonElement>(
  document.getElementById("btnSumarVarios")
);
let cantidad: number = 0;

function incrementar() {
  cantidad = cantidad + 1;
  return Number(cantidad);
}

function decrementar() {
  cantidad = cantidad - 1;
  return Number(cantidad);
}

function incrementoMasivo(agregar: number) {
  cantidad = cantidad + agregar;
  return Number(cantidad);
}

btnIncremento.addEventListener("click", () => {
  incrementar();
  spamContador.innerHTML = `${cantidad}`;
});

btnDecremento.addEventListener("click", () => {
  decrementar();
  if (cantidad < 0) {
    cantidad = 0;
  } else {
    spamContador.innerHTML = `${cantidad}`;
  }
});

btnSumarVarios.addEventListener("click", () => {
  incrementoMasivo(Number(inputSumarVarios.value));
  if (cantidad < 0) {
    cantidad = 0;
    spamContador.innerHTML = `${cantidad}`;
  } else {
    spamContador.innerHTML = `${cantidad}`;
  }
});
