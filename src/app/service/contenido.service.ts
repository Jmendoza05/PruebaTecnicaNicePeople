import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Contenido } from '../models/contenido';


@Injectable({
  providedIn: 'root'
})
export class ContenidoService {
private url = 'https://node-server-nice.herokuapp.com/api/contenidos';
  constructor(private http: HttpClient) { }

  getContenidos():Observable<any>{
    return this.http.get(this.url);
  }
  getContenido(id: string):Observable<any>{
    return this.http.get(this.url+id);
  }
  editarProducto(id: string,contenido: Contenido): Observable<Contenido[]>{
    return this.http.put<Contenido[]>(this.url + id,contenido);
  }
}
