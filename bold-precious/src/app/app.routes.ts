import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SilverPageComponent } from './pages/silver-page/silver-page.component';
import { LoginComponent } from './pages/login/login.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'countdown-timer',
    component: CountdownTimerComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'silver-page',
    component: SilverPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];
