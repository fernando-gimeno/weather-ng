import { Component, OnInit } from '@angular/core';
import { IconType, NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  phosphorCrosshairDuotone,
  phosphorMapPinDuotone,
  phosphorSunDuotone,
  phosphorMoonDuotone,
  phosphorCloudRainDuotone,
  phosphorCloudSunDuotone,
  phosphorCloudMoonDuotone,
  phosphorCloudDuotone,
  phosphorCloudFogDuotone,
} from '@ng-icons/phosphor-icons/duotone';
import { Icon, WeatherResponse } from '../../interfaces/weather-response';
import { WeatherApiService } from '../../services/weather-api.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'left-side',
  standalone: true,
  imports: [NgIconComponent, DatePipe, ReactiveFormsModule],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss',
  viewProviders: [
    provideIcons({
      phosphorSunDuotone,
      phosphorMoonDuotone,
      phosphorCloudSunDuotone,
      phosphorCloudMoonDuotone,
      phosphorCloudDuotone,
      phosphorCloudFogDuotone,
      phosphorCloudRainDuotone,
      phosphorCrosshairDuotone,
      phosphorMapPinDuotone,
    }),
  ],
})
export class LeftSideComponent implements OnInit {
  weatherData: WeatherResponse | undefined;
  searchForm = new FormGroup({
    city: new FormControl(''),
  });
  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit(): void {
    this.weatherApi.getWeather('Minas', 'Lavalleja');
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

  getCurrentDate(): string {
    return new DatePipe('en-US').transform(new Date(), 'EEE, MMM YYYY')!;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.searchForm.value.city?.trim()) return;
    this.weatherApi.getWeather(this.searchForm.value.city, "Uruguay");
  }
}
