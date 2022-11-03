import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../model/models";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(students?: Student[], filterText?: string): unknown {
    console.log('Filter pipe is executed')
    if(students?.length === 0 || filterText === '') {
      return students
    } else {
      return students?.filter((student) =>
      {
        return student.name?.toLowerCase() === filterText?.toLowerCase()
      })
    }
  }

}
