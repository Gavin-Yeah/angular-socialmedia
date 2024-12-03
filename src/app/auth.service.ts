import { Injectable } from "@angular/core";
import { getAllUsers } from "./users";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  users = getAllUsers();
  user: {
    username: string;
    name: string;
    password: string;
  } = undefined;
  constructor(private router: Router) {}
  login(data: { username: string; password: string }): void {
    const user = this.users.find((user) => user.username === data.username);
    if (user && user.password === data.password) {
      localStorage.setItem("authToken", "token");
    } else {
      console.error("Login failed:");
      alert("Login failed. Please check your credentials.");
    }
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem("authToken");
    return !!token;
  }
  logout() {
    localStorage.removeItem("authToken");
    this.router.navigate(["/login"]);
  }
}
