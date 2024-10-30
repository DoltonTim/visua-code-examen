import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscuelaComponent } from './escuela/escuela.component';

export const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  title:'home'

},
{
  path:'escuela',
  component:EscuelaComponent,
  title:'escuela'

},

{

  path:'**',
  redirectTo:'',
  pathMatch:'full'
}

];
