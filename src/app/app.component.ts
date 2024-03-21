import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  switch: boolean = true;
  newMenu = [
    {
        name: 'Mascotas',
        url: '/pets',
        icon: 'pets'
    },
    {
        name: 'Adopciones',
        url: '/adoptions',
        icon: 'favorite'
    },
    {
        name: 'Verificados',
        url: '/verified',
        icon: 'verified_user'
    },
    {
        name: 'Shelters',
        url: '/shelters',
        icon: 'home'
    },
]
helpMenu = [
  {
    name: 'Configuración',
    url: '/pets',
      icon: 'settings'
  },
  {
      name: 'Soporte',
      url: '/adoptions',
      icon: 'contact_support'
  },
  {
      name: 'Mensajes',
      url: '/verified',
      icon: 'message'
  },
]
  constructor(private router: Router){ }

  home(){
    this.router.navigate(['/home'])
  }

  redirect (selectedMenu:string){
    let submenu = this.newMenu.filter((option)=>{
        return option.name === selectedMenu
    })

    this.router.navigate([submenu[0].url])
}
}
