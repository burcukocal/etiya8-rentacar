import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ModelDetailsDto } from '../../models/model-details-dto';
import { ModelsApiService } from '../../services/modelsApi.service';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelDetailsComponent {
  @Input()  modelId!: number;
  modelDetails !: ModelDetailsDto;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit() :void {
    this.getModelDetails();
  }
  getModelDetails() {
    this.modelsApiService.getById(this.modelId).subscribe({
      next: (modelDetails) => {
        modelDetails = this.modelDetails;
      },
      complete: () => {
        this.change.markForCheck();
      }
    });
  }
}
