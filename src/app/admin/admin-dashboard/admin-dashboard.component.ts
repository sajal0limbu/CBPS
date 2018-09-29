import { Component, OnInit } from '@angular/core';
import { AssociationRule } from '../../_model/association-rule';
import { Result } from '../../_model/result';
import { AprioriService } from '../../_services/apriori.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  result:Result;
  associationRules:AssociationRule[];
  constructor(private aprioriService: AprioriService) { }

  ngOnInit() {
  }

  runApriori(){
    this.aprioriService.aprioriRun().subscribe(data =>{
      console.log("Algorithm is running...");
    },
    error=>{
      console.log("Algorithm Failed to run");
      console.log("Error", error);
    });
  }

  showAprioriResult(){
    this.aprioriService.aprioriResult().subscribe(
      data=>{

        this.result = data;
        this.associationRules=this.result['associationRules'];
        console.log("result", data);
        console.log("association Rules", this.result['associationRules']);
        
      },
      error=>{
        console.log("Error",error);
      }
    )
  }

}
