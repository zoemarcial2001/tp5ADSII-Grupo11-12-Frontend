import { Component, OnInit } from '@angular/core';
import { Maquinaria } from 'src/app/models/maquinaria';
import { MaquinariaService } from 'src/app/services/maquinaria.service';

@Component({
  selector: 'app-registrar-maquinaria',
  templateUrl: './registrar-maquinaria.component.html',
  styleUrls: ['./registrar-maquinaria.component.css']
})
export class RegistrarMaquinariaComponent implements OnInit {
  
  maquinaria : Maquinaria;
  maquinarias: Array<Maquinaria>;
  action!: boolean;
  categoria!: string;


  constructor( private maqService: MaquinariaService) {
    this.maquinarias = new Array<Maquinaria>();
    this.maquinaria = new Maquinaria;
  }

  ngOnInit(): void {
  }

  getMquinarias(){
    this.maqService.getMaquinarias().subscribe(
      (result)=>{
        this.maquinarias = result;
      }
    )
  }

  registrarMaquinaria(){
    this.maquinaria.estado = "disponible";
    this.maqService.guardarMaquinaria(this.maquinaria).subscribe((maq)=>{
      console.log(maq);
    });
  }

  onFileChanges(files:any){
    console.log("File has changed:", files);
    this.maquinaria.imagen = files[0].base64;

    console.log(this.maquinaria.imagen)
    }
}
