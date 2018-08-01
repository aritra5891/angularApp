import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

	title = 'Hello World';
	courses;	
	constructor(service: CourseService) { 
		this.courses = service.getCourse();
	}
  
}
