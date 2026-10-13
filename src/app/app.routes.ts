import { Routes } from '@angular/router';
import { Liste } from './liste/liste';
import { Stats } from './stats/stats';

export const routes: Routes = [
  { path: '', component: Liste },
  { path: 'stats', component: Stats },
];