import { Component, OnInit } from '@angular/core';
import { Result } from '../../_model/result';
import { AssociationRule } from '../../_model/association-rule';
import { AprioriService } from '../../_services/apriori.service';
@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {


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