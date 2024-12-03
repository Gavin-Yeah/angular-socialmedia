import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: [
        "",
        [Validators.required, Validators.email, Validators.pattern("[a-z-Z]*")],
      ],
      password: ["", [Validators.required]],
    });
  }
  handleLogin() {
    if (!this.form.valid) {
      alert("Invalid User!");
    } else {
      const loginData = this.form.value;
      this.as.login(loginData);
      this.router.navigate(["/wall"]);
    }
  }
  ngOnInit() {}
}
