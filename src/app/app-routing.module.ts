import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ConfirmDeleteThinkComponent } from './components/modal/confirm-delete-think/confirm-delete-think.component';
import { CreateThinkComponent } from './components/think/create-think/create-think.component';
import { EditThinkingComponent } from './components/think/edit-thinking/edit-thinking.component';
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
  {
    path: 'pensamentos/editar-pensamentos/:id',
    component: EditThinkingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
