import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: "create",
  component: CreateComponent
}, {
  path: "edit/:id",
  component: EditComponent
}
];
