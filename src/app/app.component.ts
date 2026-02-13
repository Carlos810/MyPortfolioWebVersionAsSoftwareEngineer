import { Component , signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './layout/hero/hero.component';
import { TimelineComponent } from './layout/timeline/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    FormsModule,
    NavbarComponent,
    HeroComponent,
    TimelineComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'carlos-portfolio-clean';
  isEnabled = signal(true);


}
