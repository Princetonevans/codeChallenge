import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Patient } from '../models/patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  errorMessage: string;
  patientData: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getdata().subscribe(
      data => this.patientData = data,
      error => this.errorMessage = <any>error);
  }

}
