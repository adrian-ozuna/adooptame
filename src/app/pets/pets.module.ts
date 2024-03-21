import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsRoutingModule } from './pets-routing.module';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import {MatButtonModule} from '@angular/material/button';
import { PetsComponent } from './pets.component';
import { PetComponent } from './pet/pet.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from '../shared/component/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    PetsComponent,
    PetComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgMultiSelectDropDownModule.forRoot()

    ]
})
export class PetsModule { }
