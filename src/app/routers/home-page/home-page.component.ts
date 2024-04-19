import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModelsListComponent } from '../../features/models/components/models-list/models-list.component';
import { BrandsListComponent } from '../../features/brands/components/brands-list/brands-list/brands-list.component';
import { MainLayoutComponent } from '../../shared/layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainLayoutComponent,
    ModelsListComponent,
    BrandsListComponent,
  ], //MainLayoutComponent pathler ile layout sağlanırsa importuna gerek kalmaz sildik.
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  selectedBrandId: number | null = null;

  onBrandSelect(brandId: number | null) {
    console.log('Selected brand:', brandId);
    this.selectedBrandId = brandId;
  }
}
