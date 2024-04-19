import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateBrandFormsComponent } from '../../features/brands/components/create-brand-form2/create-brand-form.component';

@Component({
  selector: 'app-create-brand-page',
  standalone: true,
  imports: [
    CommonModule,
    CreateBrandFormsComponent,
  ],
  templateUrl: './create-brand-page.component.html',
  styleUrl: './create-brand-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandPageComponent { }
