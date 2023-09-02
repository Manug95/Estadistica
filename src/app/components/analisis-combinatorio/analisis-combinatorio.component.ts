import { Component } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-analisis-combinatorio',
  templateUrl: './analisis-combinatorio.component.html',
  styleUrls: ['./analisis-combinatorio.component.css']
})
export class AnalisisCombinatorioComponent {

  n = "n";
  p = "p";
  operacion = "-";
  cantidadSuperindices: string[] = [];

  arrSimple = " - ";
  combSimple = " - ";
  permSimple = " - ";
  arregloRep = " - ";
  combRep = " - ";
  permRep = " - ";

  constructor(private mathService: MathService) {}

  calcular(): void {
    switch (this.operacion) {
      case "arrSimp": this.arregloSimple(); break;
      case "combSimp": this.combinacionSimple(); break;
      case "permSimp": this.permutacionSimple(this.n); break;
      case "arrRep": this.arregloConRepeticion(); break;
      case "combRep": this.combinacionConRepeticion(); break;
      case "permRep": this.permutacionConRepeticion(); break;
      default: this.resetearResultados();
    }
  }

  resetearResultados(): void {
    this.arrSimple = " - ";
    this.combSimple = " - ";
    this.permSimple = " - ";
    this.arregloRep = " - ";
    this.combRep = " - ";
    this.permRep = " - ";
  }

  arregloSimple(): void {
    this.resetearResultados();

    let result = 1;

    const n = this.mathService.aEntero(this.n);
    const p = this.mathService.aEntero(this.p);

    let i = n;
    while (i >= (n-p+1)) {
      result *= i;
      i--;
    }

    this.arrSimple = result.toString();
  }

  combinacionSimple(): void {
    this.resetearResultados();

    const n = this.mathService.aEntero(this.n);
    const p = this.mathService.aEntero(this.p);

    const nFactorial = this.mathService.factorial(n);
    const pFactorial = this.mathService.factorial(p);
    const restaFactorial = this.mathService.factorial(n-p);
    const division = this.mathService.dividir(nFactorial, pFactorial*restaFactorial);

    this.combSimple = division.toString();
  }

  permutacionSimple(n: string): void {
    this.resetearResultados();
    this.permSimple = this.mathService.factorial(this.mathService.aEntero(n)).toString();
  }

  arregloConRepeticion(): void {
    this.resetearResultados();

    const n = this.mathService.aEntero(this.n);
    const p = this.mathService.aEntero(this.p);

    this.arregloRep = this.mathService.potencia(n,p).toString();
  }

  combinacionConRepeticion(): void {
    this.resetearResultados();

    const n = this.mathService.aEntero(this.n);
    const p = this.mathService.aEntero(this.p);

    const numerador = this.mathService.factorial(n+p-1);
    const pFactorial = this.mathService.factorial(p);
    const denominador = pFactorial * this.mathService.factorial(n-1);

    this.combRep = this.mathService.dividir(numerador, denominador).toString();
  }

  permutacionConRepeticion(): void {
    this.resetearResultados();

    this.cantidadSuperindices = this.p.split(",");

    const n = this.mathService.aEntero(this.n);

    const nFactorial = this.mathService.factorial(n);
    const losRepetidos = this.cantidadSuperindices.map(x => this.mathService.aEntero(x));
    const losRepetidosFactoriales = losRepetidos.map(x => this.mathService.factorial(x));
    const prodLosRepetidosFactoriales = this.mathService.multiplicarDatos(losRepetidosFactoriales);

    this.permRep = this.mathService.dividir(nFactorial, prodLosRepetidosFactoriales).toString();
  }

  leerN(value: string): void {
    this.n = value;
  }

  leerP(value: string): void {
    this.p = "p";
    // if (this.p.includes(",")) {
    //   this.cantidadSuperindices = this.p.split(",");
    // }
    // else {
    //   this.p = value;
    // }
    if (!this.p.includes(",")) {
      this.p = value;
    }
  }

  leerOperacion(value: string): void {
    this.operacion = value;
  }

  subindiceP(valor: string): string {
    return !valor.includes(",") ? valor : "p" || "p";
  }

}
