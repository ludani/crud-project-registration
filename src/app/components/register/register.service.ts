import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //PASSANDO O PARAMETRO POST AQUI
  baseUrl = 'https://5ff8b52a17386d0017b51780.mockapi.io/api/project';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }
 //EXEMPLO
  showOnConsole(msg: string): void {
    this.snackbar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }
    create(register: Register): Observable<Register> {
      return this.http.post<Register>(this.baseUrl, register)
    };

    read(): Observable<Register[]>{
      return this.http.get<Register[]>(this.baseUrl)
      
    }
  }

   