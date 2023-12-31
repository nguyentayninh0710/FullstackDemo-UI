import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ErrorComponent } from "./error/error.component";
import { ListTodoComponent } from "./list-todo/list-todo.component";
import { LogoutComponent } from "./logout/logout.component";
import { RouteGuardService } from "./service/route-guard.service";
import { TodoComponent } from "./todo/todo.component";

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent , canActivate: [RouteGuardService]},
    {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
    {path: 'todos', component:ListTodoComponent , canActivate: [RouteGuardService]},
    {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]},
    {path: '**', component: ErrorComponent },
] ;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}