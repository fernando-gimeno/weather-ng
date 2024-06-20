import { Component } from '@angular/core';
import { NgIconComponent, provideIcons,  } from "@ng-icons/core";
import { phosphorCloudDuotone, phosphorCrosshairDuotone, phosphorMapPinDuotone } from '@ng-icons/phosphor-icons/duotone';

@Component({
  selector: 'left-side',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss',
  viewProviders: [provideIcons({ phosphorCloudDuotone, phosphorCrosshairDuotone, phosphorMapPinDuotone })]
})
export class LeftSideComponent {

}
