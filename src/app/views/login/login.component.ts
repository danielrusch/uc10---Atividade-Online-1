import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private LoginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  userModel = new User();

  mensagem = '';

  receberDados() {
    const ListaPalavras: string[] = [
      'select ',
      'from ',
      'drop ',
      'or ',
      'having ',
      'group ',
      'insert ',
      'exec ',
      '"',
      "'",
      '--',
      '#',
      '*',
      '; ',
    ];

    ListaPalavras.forEach((palavra) => {
      if (this.userModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = 'Dados inválidos';
        return;
      }
    });

    this.LoginService.login(this.userModel).subscribe(
      (response) => {
        console.log('deu certo');
        this.router.navigateByUrl('/');
      },
      (erro) => {
        // console.log(erro)
        // alert(erro.error)
        this.mensagem = erro.error;
      }
    );
  }
}
