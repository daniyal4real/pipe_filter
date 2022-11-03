import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/models";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  filteredStudents!: Student[]
  _filterText = ''
  constructor() { }

  ngOnInit(){
    this.filteredStudents = this.students
  }

  students: Student[] = [
    {name: 'Mark Alexander', course: 'MBA', marks: 0.52, DOB: new Date('11-12-1997'), gender: 'Male'},
    {name: 'Steve Melvood', course: 'BS', marks: 0.45, DOB: new Date('11-12-1998'), gender: 'Male'},
    {name: 'Max Cornell', course: 'BA', marks: 0.88, DOB: new Date('11-12-1999'), gender: 'Male'},
    {name: 'John Harvard', course: 'MS', marks: 0.23, DOB: new Date('11-12-2000'), gender: 'Male'},
    {name: 'Will Smith', course: 'MField', marks: 0.49, DOB: new Date('11-30-1997'), gender: 'Male'},
    {name: 'Sarah Smith', course: 'BS', marks: 0.85, DOB: new Date('05-12-1998'), gender: 'Female'},
    {name: 'Mery Jane', course: 'BA', marks: 0.12, DOB: new Date('11-07-1997'), gender: 'Female'},
    {name: 'Jerry Smith', course: 'MField', marks: 0.49, DOB: new Date('09-12-1999'), gender: 'Male'},
  ]

  set filterText(value: string) {
    this._filterText = value
    this.filteredStudents=this.filterStudentsByName(value)
  }

  get filterText() {
    return this._filterText
  }

  filterStudentsByName(filterTerm: string) {
    if(this.students.length === 0 || this.filterText === '') {
      return this.students
    } else {
      return this.students.filter((student) =>
      {
        return student.name?.toLowerCase() === filterTerm.toLowerCase()
      })
    }
  }



}
