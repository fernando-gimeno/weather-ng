import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LeftSideComponent, RightSideComponent]
})
export class AppComponent {
  title = 'Weather App';
}
