import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-wall",
  templateUrl: "./wall.component.html",
  styleUrls: ["./wall.component.css"],
})
export class WallComponent implements OnInit {
  constructor(public ds: DataService) {}

  ngOnInit() {
    this.ds.fetchData();
  }
}
