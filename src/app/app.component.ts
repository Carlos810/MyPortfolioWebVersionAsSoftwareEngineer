import { Component , signal, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './layout/hero/hero.component';
import { TimelineComponent } from './layout/timeline/timeline.component';
import { ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';

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
  private routerSub?: Subscription;

  constructor(private router: Router, private viewport: ViewportScroller) {
    // Ensure page scrolls to top on navigation (including initial load)
    this.routerSub = this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        try {
          this.viewport.scrollToPosition([0, 0]);
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  scrollToNavbar(): void {
    const el = document.getElementById('navbar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    // Fallback: use viewport service
    try {
      this.viewport.scrollToPosition([0, 0]);
    } catch (e) {
      window.scrollTo({ top: 0, behavior: 'smooth' } as any);
    }
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }


}
