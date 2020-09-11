import { Carro } from 'src/models/Carro';
import { Observable } from 'rxjs';
import { CarroService } from 'src/services/CarroService';

export interface ICarroService {
    cadastrar(carro: Carro) : Observable<Carro>;
    remover(carro_id: number) : boolean;
    editar(carro: Carro) : Observable<Carro>;
    listar() : Observable<Carro[]>;
    buscar(carro_id: number) : Observable<CarroService>;
    calcularLitros(carro: Carro, tipoCombustivel: string, distancia: number) : Number;
}