import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'experience',
  pure: false
})
export class PositionPipe implements PipeTransform {

  transform(input: User[], desiredExperience) {
    var output: User[] = [];
    if(desiredExperience === "more" ) {
      for (var i = 0; i < input.length; i++) {
        if (input[i].experience >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredExperience === "less") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].experience < 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
