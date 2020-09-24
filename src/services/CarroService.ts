import { ICarroService } from 'src/interfaces/ICarroService';
import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';

export class CarroService implements ICarroService {
  public apiUrl: string = Global.ApiUrl + "carros";
  
  cadastrar(carro: Carro): Observable<Carro> {
    throw new Error("Method not implemented.");
  }
  remover(carro_id: number): boolean {
    throw new Error("Method not implemented.");
  }
  editar(carro: Carro): Observable<Carro> {
    throw new Error("Method not implemented.");
  }
  listar(): Observable<Carro[]> {
    throw new Error("Method not implemented.");
  }
  buscar(carro_id: number): Observable<CarroService> {
    throw new Error("Method not implemented.");
  }
  calcularLitros(carro: Carro, tipoCombustivel: string, distancia: number): Number {
    throw new Error("Method not implemented.");
  }

}