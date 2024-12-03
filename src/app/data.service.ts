import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post, User } from "./user";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  private usersUrl = "https://jsonplaceholder.typicode.com/users";
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";
  posts: Post[] = [];

  fetchData() {
    this.http.get<User[]>(this.usersUrl).subscribe((users: User[]) => {
      this.http.get<Post[]>(this.postsUrl).subscribe((posts: any[]) => {
        this.posts = posts.map((post) => {
          const { title, body, userId } = post;
          const user = users.find((user) => user.id === userId);
          return {
            title,
            body,
            user,
          };
        });
      });
    });
  }
}
