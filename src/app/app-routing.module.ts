import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
