import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CreateThinkComponent } from './components/think/create-think/create-think.component';
import { ListThinksComponent } from './components/think/list-thinks/list-thinks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full',
  },
  {
    path: 'criar-pensamento',
    component: CreateThinkComponent,
  },
  {
    path: 'listar-pensamento',
    component: ListThinksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
