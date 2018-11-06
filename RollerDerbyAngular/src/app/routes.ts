import {Route} from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { MatchComponent } from './pages/match/match.component';



export const routes:Route[] = [
  {path: 'match', component: MatchComponent},
  {path: '', component: AccueilComponent}

]