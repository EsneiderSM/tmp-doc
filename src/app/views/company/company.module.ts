import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CreateCompanyComponent } from './create/create-company.component';
import { CompanyRoutingModule } from './company-routing.module';


@NgModule({
  imports: [
    CompanyRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ CreateCompanyComponent ]
})
export class EmpresaModule { }
