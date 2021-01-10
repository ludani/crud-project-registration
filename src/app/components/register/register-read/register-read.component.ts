import { RegisterService } from './../register.service';
import { Register } from './../register.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-read',
  templateUrl: './register-read.component.html',
  styleUrls: ['./register-read.component.css']
})
export class RegisterReadComponent implements OnInit {

  readRegister: Register[]
  displayedColumns = ['id', 'nameProject', 'price', 'risc', 'action']

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

    this.registerService.read().subscribe(readRegister => {
      this.readRegister = readRegister;
      console.log(readRegister);
    })
  }

}
