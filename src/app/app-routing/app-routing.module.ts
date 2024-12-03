import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { WallComponent } from "../wall/wall.component";
import { LoginGuard } from "../login.guard";
import { AuthGuard } from "../auth.guard";
import { ProfileComponent } from "../profile/profile.component";
const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "wall", component: WallComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
