import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Pet } from '../shared/interfaces/pet.interface';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PetsService } from '../shared/services/pet.service';
import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";
import { pets } from '../constant/pets.list';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent {
  public petList: Pet[] = [];
  displayedColumns: string[] = ['name', 'age', 'size', 'status', 'prev', 'actions'];
  showSpinner = false;
  petStatus = ['Adoptado', 'No adoptado']
  color = 'red';
  public dataSource!: MatTableDataSource<Pet>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private petService: PetsService,
    private paginators: MatPaginatorIntl,
    private cd: ChangeDetectorRef
  ) {
    this.paginators.itemsPerPageLabel = "Registros por página";
    this.paginators.nextPageLabel = "Siguiente página";
    this.paginators.previousPageLabel = "Página anterior";
    this.paginators.lastPageLabel = "Ultima página";
    this.paginators.firstPageLabel = "Primera página";
  }

  ngOnInit(): void {
    this.showSpinner = true;
    // setTimeout(()=>this.getAllPets());
    setTimeout(() => this.getTemporalPets());
    this.showSpinner = false;
  }

  getTemporalPets() {
    this.showSpinner = true;
    this.petList = pets;
    this.dataSource = new MatTableDataSource(this.petList)
    setTimeout(()=> this.dataSource.paginator = this.paginator);
    setTimeout(()=> this.dataSource.sort = this.sort)
    this.showSpinner = false;

    if (this.paginator && this.sort) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

  }


  openImage(url: string) {

    window.open(url, '_blank');
  }

  adoptStyle(adopt: string) {
    if (adopt === "Adoptado") {
      this.color = '#8ae68a'
    } else if (adopt === "No adoptado") {
      this.color = '#e68a8a'
    }

    return this.color;
  }


  // getAllPets() {
  //   this.showSpinner = true; 
  //   this.petService.getAllPets().subscribe({
  //     next: (pets) => {
  //       this.dataSource = new MatTableDataSource(pets);
  //       setTimeout(() => this.dataSource.paginator = this.paginator);
  //       setTimeout(() => this.dataSource.sort = this.sort);
  //       this.showSpinner = false; 

  //      if (this.paginator && this.sort) {
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     }

  //     },
  //     error: (error) => {
  //       console.error('Error al obtener las mascotas:', error);
  //       this._snackBar.open('Error al cargar las mascotas', 'Cerrar', {
  //         duration: 3000,
  //       });
  //       this.showSpinner = false; 
  //     }
  //   });
  // }


  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    }
  }

  adoptFilter(value: string) {
    const filteredPets = this.petList.filter(pet =>
      pet.status.toLowerCase().includes(value.trim().toLowerCase())
    );
    this.dataSource = new MatTableDataSource(filteredPets);

    // No olvides volver a aplicar paginator y sort al nuevo dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
