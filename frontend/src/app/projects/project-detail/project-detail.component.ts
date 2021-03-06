import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PROJECTS } from '../projects';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  // projects = PROJECTS;
  project: any;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.project = PROJECTS[+params.get('projectId')];
    });
  }

}
