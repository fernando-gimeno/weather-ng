import { Component, OnInit } from '@angular/core';
import { IconType, NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  phosphorCloudDuotone,
  phosphorCloudMoonDuotone,
  phosphorCloudSunDuotone,
  phosphorCompassDuotone,
  phosphorMoonDuotone,
  phosphorSunDuotone,
  phosphorCloudRainDuotone,
  phosphorCloudFogDuotone,
} from '@ng-icons/phosphor-icons/duotone';
import { WeatherApiService } from '../../services/weather-api.service';
import { Icon, WeatherResponse } from '../../interfaces/weather-response';
import { DatePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'right-side',
  standalone: true,
  imports: [NgIconComponent, DatePipe, PercentPipe],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
  viewProviders: [
    provideIcons({
      phosphorCloudDuotone,
      phosphorCompassDuotone,
      phosphorSunDuotone,
      phosphorMoonDuotone,
      phosphorCloudSunDuotone,
      phosphorCloudMoonDuotone,
      phosphorCloudFogDuotone,
      phosphorCloudRainDuotone,
    }),
  ],
})
export class RightSideComponent implements OnInit {
  weatherData?: WeatherResponse;

  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit(): void {
    this.weatherApi.weatherData$.subscribe((data) => {
      this.weatherData = data;
    });
  }

  getIcon(icon?: IconType): IconType {
    switch (icon) {
      case Icon.ClearDay:
        return 'phosphorSunDuotone';
      case Icon.ClearNight:
        return 'phosphorMoonDuotone';
      case Icon.PartlyCloudyDay:
        return 'phosphorCloudSunDuotone';
      case Icon.PartlyCloudyNight:
        return 'phosphorCloudMoonDuotone';
      case Icon.Cloudy:
        return 'phosphorCloudDuotone';
      case Icon.Fog:
        return 'phosphorCloudFogDuotone';
      case Icon.Rain:
        return 'phosphorCloudRainDuotone';
      default:
        return 'phosphorCrosshairDuotone';
    }
  }
}
