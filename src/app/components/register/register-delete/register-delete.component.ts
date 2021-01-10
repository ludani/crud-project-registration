import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../register.model';


@Component({
  selector: 'app-register-delete',
  templateUrl: './register-delete.component.html',
  styleUrls: ['./register-delete.component.css']
})
export class RegisterDeleteComponent implements OnInit {

  register: Register

  constructor(
    private registerService: RegisterService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //MUDAR O TIPO | ESTÁ SÓ DELETANDO OS DADOS DAS PLANILHAS
    const id = +this.route.snapshot.paramMap.get('id');
    this.registerService.readById(id).subscribe((register) => {
      this.register = register;
    });
  }

  deleteRegister(): void {
    this.registerService.delete(this.register.id).subscribe(() => {
      this.registerService.showOnConsole('Projeto excluído com sucesso !')
      this.router.navigate(['/register'])

    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }

}
