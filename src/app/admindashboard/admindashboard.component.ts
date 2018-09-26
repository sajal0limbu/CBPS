import { Component, OnInit } from '@angular/core';
import { AprioriService } from '../_services/apriori.service';
import { Result } from '../_model/result';
import { AssociationRule } from '../_model/association-rule';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

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
