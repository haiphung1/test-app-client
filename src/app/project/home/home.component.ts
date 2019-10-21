import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private projectService : ProjectService) { }

  displayedColumns: string[] = [
    'id', 'name', 'information', 'deadline', 'type', 'status', 'action'
  ];
  projects = [];
  
  ngOnInit() {
    this.projectService.getAllProject().subscribe( data => {
      this.projects = data;
    })
  }

}
