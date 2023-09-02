import { Component } from '@angular/core';
import { FuncionesEstDescpService } from 'src/app/services/funciones-est-descp.service';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-estadistica-descriptiva',
  templateUrl: './estadistica-descriptiva.component.html',
  styleUrls: ['./estadistica-descriptiva.component.css']
})
export class EstadisticaDescriptivaComponent {

  resultados:  (number | string[])[] = [];
  separador: string = ";";

  constructor(private analisisService: FuncionesEstDescpService) { }

  actualizarSeparador(nuevoValor: string): void {
    this.separador = nuevoValor;
  }

  calcular(data: string): void {
    const datosFormateados = this.formatearDatos(data);
    datosFormateados.sort((a,b) => a-b);
    const objResultados: {[key: string]: number | string[]} = this.analisisService.analisisCompleto(datosFormateados);
    const arrayResultados = this.ordenarDatos(objResultados);

    this.resultados = arrayResultados;
  }

  formatearDatos(datos: string): number[] {
    const separador = this.separador;
    return datos.split(separador).filter(x => x !== "").map(x => +x);
  }

  ordenarDatos(data: {[key: string]: number | string[]}): (number | string[])[] {
    const orden = [
      "media", "mediana", "moda", "q1", "q2", "q3", 
      "rango", "rangoIntercuartilico", "variancia", "desviacionEstandar", "coeficienteDeVariacion", 
      "max", "min", "baseInferior", "baseSuperior", "n"
    ];
  
    return Object.keys(data).map(k => orden.findIndex(i => i === k)).sort((a,b) => a-b).map(x => orden[x]).map(x => data[x]);//{[key: string]: number | string[]}
  
  }

  esArreglo(data: string[] | number): boolean {
    return Array.isArray(data);
  }

  muchasModas(data: string[] | number): string {
    if (typeof data !== "number") {
      return data.join(";");
    }
    else {
      return data.toString();
    }
  }

}
