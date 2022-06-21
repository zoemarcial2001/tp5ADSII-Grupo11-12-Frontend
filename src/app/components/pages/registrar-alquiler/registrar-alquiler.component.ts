import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alquiler } from 'src/app/models/alquiler';
import { Cliente } from 'src/app/models/cliente';
import { Maquinaria } from 'src/app/models/maquinaria';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { MaquinariaService } from 'src/app/services/maquinaria.service';

@Component({
  selector: 'app-registrar-alquiler',
  templateUrl: './registrar-alquiler.component.html',
  styleUrls: ['./registrar-alquiler.component.css']
})
export class RegistrarAlquilerComponent implements OnInit {
  alquiler: Alquiler;
  clientes!:Array<Cliente>;
  maquinarias!: Array<Maquinaria>;
  alquileres!: Array<Alquiler>;

  constructor(private alquilerService: AlquilerService, private maquinariaService: MaquinariaService, private clienteService:ClienteService) {
    this.alquiler = new Alquiler;
    this.clientes = new Array<Cliente>();
    this.alquileres = new Array<Alquiler>();
    this.maquinarias = new Array<Maquinaria>();
    this.getClientes();
    this.getMaquinarias();
  }

  ngOnInit(): void {
  }

  getClientes(){
    this.clienteService.getClientes().subscribe((cli) => {
      for(var i=0; i < cli.length; i++){
        var cliente = new Cliente;
        cliente = cli[i];
        this.clientes.push(cliente);
      }
    })
  }

  getMaquinarias(){
    this.maquinariaService.getMaquinarias().subscribe((maq) => {
      for(var i=0; i < maq.length; i++){
        var maquinaria = new Maquinaria;
        maquinaria = maq[i];
        this.maquinarias.push(maquinaria);
      }
    })
  }

  getAlquileres(){
    this.alquilerService.getAlquileres().subscribe(
      (result)=>{
        this.alquileres = result;
      }
    )
  }

  registrarAlquiler(){
    this.alquilerService.createAlquiler(this.alquiler).subscribe((alq)=>{
      console.log(alq);
    })
  }

  resetForm(form: NgForm){
    form.reset();
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
