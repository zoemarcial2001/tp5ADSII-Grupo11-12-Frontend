import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit {
  cliente: Cliente;
  clientes: Array<Cliente>;

  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente;
    this.clientes = new Array<Cliente>();
  }

  ngOnInit(): void {
  }

  getClientes(){
    
  }

  registrarCliente(){
    var fech = new Date();
    this.cliente.fechaAlta = fech.getDate() + "/" + fech.getMonth() +"/"+ fech.getFullYear();
    this.clienteService.createCliente(this.cliente).subscribe((cli) =>{
      console.log(cli);
    })
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
