import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.as.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
