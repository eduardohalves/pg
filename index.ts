// PC.2.4. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do
// segundo, é obtido multiplicado-se o anterior por uma constante. Utilizando uma linguagem de
// programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê
// exemplo de geração de seus primeiros 50 termos. 



class ProgressaoGeometrica {
  private a1: number;
  private razao: number;

  constructor(a1: number, razao: number) {
    this.a1 = a1;
    this.razao = razao;
  }

  gerarTermos(quantidade: number): number[] {
    const termos: number[] = [];

    for (let i = 0; i < quantidade; i++) {
      const termo = this.a1 * Math.pow(this.razao, i);
      termos.push(termo);
    }

    return termos;
  }
}

const pg = new ProgressaoGeometrica(2, 3);
const termos = pg.gerarTermos(50);

console.log(termos);