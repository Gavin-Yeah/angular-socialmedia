import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Post } from "../user";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  constructor() {}

  ngOnInit() {}
}
