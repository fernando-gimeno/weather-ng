import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherResponse } from '../interfaces/weather-response';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  catchError,
  throwError,
} from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  baseUrl =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

  private _weatherData: BehaviorSubject<WeatherResponse> =
    new BehaviorSubject<WeatherResponse>({} as WeatherResponse);
  weatherData$: Observable<WeatherResponse> = this._weatherData.asObservable();
  private subscription?: Subscription;

  constructor(private http: HttpClient) {}

  getWeather(city: string, state: string) {
    this.subscription?.unsubscribe();
    this.subscription = this.http
      .get<WeatherResponse>(
        `${this.baseUrl}/${city}%2C%20${state}/next7days?unitGroup=metric&key=${environment.apiKey}&contentType=json`
      )
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error('Error getting weather data'));
        })
      )
      .subscribe((data) => {
        this._weatherData.next(data);
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
