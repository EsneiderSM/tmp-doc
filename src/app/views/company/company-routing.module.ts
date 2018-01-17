import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCompanyComponent } from './create/create-company.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Empresas'
    },
    children: [
      {
        path: 'crear',
        component: CreateCompanyComponent,
        data: {
          title: 'Nueva Empresa'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
