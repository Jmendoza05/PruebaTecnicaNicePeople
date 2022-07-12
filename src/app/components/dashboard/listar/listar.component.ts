import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContenidoService } from 'src/app/service/contenido.service';
import { Contenido } from '../../../models/contenido';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  page_size: any = 2;
  page_number: any = 1;
  pageSizeOptions = [2, 4]

  listContenidos: Contenido[] = [];
  listCategoria: any[] = [];
  contenidoModel: Contenido[] = [];
  id: any | null;
  tituloModal: string = '';
  descripcionModal: string = '';
  imgModal: string = '';
  dataSource!: MatTableDataSource<any>;
  constructor(private _contenidoService: ContenidoService) { }
  filterContenidos = '';
  ngOnInit(): void {
    this.obtenerContenidos();
  }

  obtenerContenidos() {
    this._contenidoService.getContenidos().subscribe(data => {
      this.listContenidos = data;
      console.log(this.listContenidos);
      for (let categoria of this.listContenidos) {
        if (!this.listCategoria.includes(categoria.categoria)) {
          this.listCategoria.push(categoria.categoria);
        }
      }
      this.dataSource = new MatTableDataSource(this.listContenidos);
    })
  }
  obtenerContenido(titulo: string, description: string, img: string) {
    this.tituloModal = titulo;
    this.descripcionModal = description;
    this.imgModal = img;
  }
  cambiarEstado(id: any, contenido: any) {
    this._contenidoService.editarProducto(id, contenido).subscribe();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
