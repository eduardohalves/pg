"use strict";
class ProgressaoGeometrica {
    constructor(a1, razao) {
        this.a1 = a1;
        this.razao = razao;
    }
    gerarTermos(quantidade) {
        const termos = [];
        for (let i = 0; i < quantidade; i++) {
            const termo = this.a1 * Math.pow(this.razao, i);
            termos.push(termo);
        }
        return termos;
    }
}
const pg = new ProgressaoGeometrica(2, 3);
const termos = pg.gerarTermos(50);
console.log("Primeiros 50 termos da PG:");
console.log(termos);
