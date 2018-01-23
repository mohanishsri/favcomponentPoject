import { Component } from '@angular/core';
import { favouriteEventChangeArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;
  viewMode = 'Map';
  post={    
  title :'string',
  isFavourite:true
  }

  loadcourses(){
    this.courses = [
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'}
  ];
  }

  onAdd(){
    this.courses.push({id: 4, name: 'course4'})
  }
  onRemove(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1);
  }

  trackCourse(index, course)
  {
      course?course.id:undefined;
  }
  onchangeraiseevent(eventArgs:favouriteEventChangeArgs)
  {
    console.log("Hi I am reusable componenet output event: ", eventArgs);
  }

}
