import { Pipe, PipeTransform } from "@angular/core";
import { User } from "./user";

@Pipe({
  name: "userDisplay",
})
export class UserDisplayPipe implements PipeTransform {
  transform(user: User): string {
    return `${user.name} (@${user.username})`;
  }
}
