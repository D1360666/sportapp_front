import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[]=[];

  ngOnInit(){
    this.items = [
      {
        label: 'Institución',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Mantenimiento',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Listados',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }]
        },
      {
        label: 'Jugador',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Mantenimiento',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          },
          {
            label: 'Listado',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }

        ]
      },
      {
        label: 'Secretaría',
        icon: 'pi pi-cog',
        items:[
          {
            label:'Actas',
            icon:'',
            routerLink:'listar'
          },
          {
            label:'Documentos',
            icon:'',
            routerLink:'listar1'
          },
          {
            label:'Control documentación',
            icon:'',
            routerLink:'listar2'
          }
        ]
      },
      {
        label: 'Tesorería',
        icon: 'pi pi-cog',
        items: [
          {
            label:'Movimientos',
            icon:'',
            routerLink: 'tMovim'
          }
        ]
      }
    ];
  }
}
