import { Register } from './../register.model';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent implements OnInit {

  register: Register = {
    nameProject: '',
    price: null,
  }

  constructor(private registerService: RegisterService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  createRegister(): void{
    this.registerService.create(this.register).subscribe(() => {
      this.registerService.showOnConsole('Projeto criado!');
      this.router.navigate(['/register']);
    })
  }

  cancel(): void{
    
  }

}
