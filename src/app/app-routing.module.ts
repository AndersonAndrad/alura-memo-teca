import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ConfirmDeleteThinkComponent } from './components/modal/confirm-delete-think/confirm-delete-think.component';
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
  {
    path: 'pensamentos/excluir-pensamentos/:id',
    component: ConfirmDeleteThinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
