import { RegisterService } from './../register.service';
import { Register } from './../register.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {

  register: Register

  constructor(
    private registerService: RegisterService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.registerService.readById(id).subscribe(register => {
      this.register = register;
    });
  }

  updateRegister(): void {
    this.registerService.update(this.register).subscribe(() => {
      this.registerService.showOnConsole('Produto atualizado com sucesso!');
      this.router.navigate(['/register']);
    })
  }

  cancel(): void {
    this.router.navigate(['/register']);
  }

}
