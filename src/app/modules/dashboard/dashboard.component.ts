import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService,
              private httpClient: HttpClient
  ) {
  }

  ngOnInit() {

  }

}
