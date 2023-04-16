import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-team-generator',
  templateUrl: './team-generator.component.html',
  styleUrls: ['./team-generator.component.scss']
})
export class TeamGeneratorComponent implements OnInit {

  // teamForm : any = FormGroup

  final_teams : any = []
  total_teams : any = ''
  master_list : any = []
  master_teams : any = []

  teamA : any = [{'name': 'teamBplayer1', 'role': 'teamBplayerrole2'},{'name': 'teamBplayer2', 'role': 'teamBplayerrole2'},{'name': 'teamBplayer3', 'role': 'teamBplayerrole3'},{'name': 'teamBplayer4', 'role': 'teamBplayerrole4'},{'name': 'teamBplayer5', 'role': 'teamBplayerrole5'},{'name': 'teamBplayer6', 'role': 'teamBplayerrole6'},{'name': 'teamBplayer7', 'role': 'teamBplayerrole7'},{'name': 'teamBplayer8', 'role': 'teamBplayerrole8'},{'name': 'teamBplayer9', 'role': 'teamBplayerrole9'},{'name': 'teamBplayer10', 'role': 'teamBplayerrole10'},{'name': 'teamBplayer11', 'role': 'teamBplayerrole11'}]

  teamB : any = [{'name': 'teamBplayer1', 'role': 'teamBplayerrole2'},{'name': 'teamBplayer2', 'role': 'teamBplayerrole2'},{'name': 'teamBplayer3', 'role': 'teamBplayerrole3'},{'name': 'teamBplayer4', 'role': 'teamBplayerrole4'},{'name': 'teamBplayer5', 'role': 'teamBplayerrole5'},{'name': 'teamBplayer6', 'role': 'teamBplayerrole6'},{'name': 'teamBplayer7', 'role': 'teamBplayerrole7'},{'name': 'teamBplayer8', 'role': 'teamBplayerrole8'},{'name': 'teamBplayer9', 'role': 'teamBplayerrole9'},{'name': 'teamBplayer10', 'role': 'teamBplayerrole10'},{'name': 'teamBplayer11', 'role': 'teamBplayerrole11'}]
  
  teamAplayer1 : any = ''
  teamAplayer2 : any = ''
  teamAplayer3 : any = ''
  teamAplayer4 : any = ''
  teamAplayer5 : any = ''
  teamAplayer6 : any = ''
  teamAplayer7 : any = ''
  teamAplayer8 : any = ''
  teamAplayer9 : any = ''
  teamAplayer10 : any = ''
  teamAplayer11 : any = ''

  teamBplayer1 : any = ''
  teamBplayer2 : any = ''
  teamBplayer3 : any = ''
  teamBplayer4 : any = ''
  teamBplayer5 : any = ''
  teamBplayer6 : any = ''
  teamBplayer7 : any = ''
  teamBplayer8 : any = ''
  teamBplayer9 : any = ''
  teamBplayer10 : any = ''
  teamBplayer11 : any = ''

  teamAplayerrole1 : any = ''
  teamAplayerrole2 : any = ''
  teamAplayerrole3 : any = ''
  teamAplayerrole4 : any = ''
  teamAplayerrole5 : any = ''
  teamAplayerrole6 : any = ''
  teamAplayerrole7 : any = ''
  teamAplayerrole8 : any = ''
  teamAplayerrole9 : any = ''
  teamAplayerrole10 : any = ''
  teamAplayerrole11 : any = ''

  teamBplayerrole1 : any = ''
  teamBplayerrole2 : any = ''
  teamBplayerrole3 : any = ''
  teamBplayerrole4 : any = ''
  teamBplayerrole5 : any = ''
  teamBplayerrole6 : any = ''
  teamBplayerrole7 : any = ''
  teamBplayerrole8 : any = ''
  teamBplayerrole9 : any = ''
  teamBplayerrole10 : any = ''
  teamBplayerrole11 : any = ''

  // teamBplayer1role : any = ''
  // teamBplayer2role : any = ''
  // teamBplayer3role : any = ''
  // teamBplayer4role : any = ''
  // teamBplayer5role : any = ''
  // teamBplayer6role : any = ''
  // teamBplayer7role : any = ''
  // teamBplayer8role : any = ''
  // teamBplayer9role : any = ''
  // teamBplayer10role : any = ''
  // teamBplayer11role : any = ''


  constructor(private formbuilder : FormBuilder) {
 }

  ngOnInit(): void {
    
  }

  
  generate(){

    this.final_teams = []
    this.master_teams = []
    this.master_list = []
    let json : any = []

      json.push({'team':'a','name':this.teamAplayer1,'role': this.teamAplayerrole1})
      json.push({'team':'a','name':this.teamAplayer2,'role': this.teamAplayerrole2})
      json.push({'team':'a','name':this.teamAplayer3,'role': this.teamAplayerrole3})
      json.push({'team':'a','name':this.teamAplayer4,'role': this.teamAplayerrole4})
      json.push({'team':'a','name':this.teamAplayer5,'role': this.teamAplayerrole5})
      json.push({'team':'a','name':this.teamAplayer6,'role': this.teamAplayerrole6})
      json.push({'team':'a','name':this.teamAplayer7,'role': this.teamAplayerrole7})
      json.push({'team':'a','name':this.teamAplayer8,'role': this.teamAplayerrole8})
      json.push({'team':'a','name':this.teamAplayer9,'role': this.teamAplayerrole9})
      json.push({'team':'a','name':this.teamAplayer10,'role': this.teamAplayerrole10})
      json.push({'team':'a','name':this.teamAplayer11,'role': this.teamAplayerrole11})

      json.push({'team':'b','name':this.teamBplayer1,'role': this.teamBplayerrole1})
      json.push({'team':'b','name':this.teamBplayer2,'role': this.teamBplayerrole2})
      json.push({'team':'b','name':this.teamBplayer3,'role': this.teamBplayerrole3})
      json.push({'team':'b','name':this.teamBplayer4,'role': this.teamBplayerrole4})
      json.push({'team':'b','name':this.teamBplayer5,'role': this.teamBplayerrole5})
      json.push({'team':'b','name':this.teamBplayer6,'role': this.teamBplayerrole6})
      json.push({'team':'b','name':this.teamBplayer7,'role': this.teamBplayerrole7})
      json.push({'team':'b','name':this.teamBplayer8,'role': this.teamBplayerrole8})
      json.push({'team':'b','name':this.teamBplayer9,'role': this.teamBplayerrole9})
      json.push({'team':'b','name':this.teamBplayer10,'role': this.teamBplayerrole10})
      json.push({'team':'b','name':this.teamBplayer11,'role': this.teamBplayerrole11})

      this.generate_teams(json,this.total_teams)
  }

  generate_random(min:any, max:any){
    let arr = []
    while(arr.length < min){
      var candidateInt = Math.floor(Math.random() * max) 
      if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }

    if(min>10){
      arr.sort(function(a, b) {
        return a - b;
      });
    }

    return arr
  }

  generate_teams(teams:any, total:any){
    while(this.master_list.length != total){
      let team_list : any = this.generate_random(11,22)
      if(!this.master_list.includes(team_list)){
      let c1:any = 0
      let c2:any = 0
      let c3:any = 0
      let c4:any = 0

      let temp : any = []
      let data:any = {}
      data['wk'] = []
      data['bt'] = []
      data['ar'] = []
      data['bw'] = []
      let positions = this.generate_random(2,11)
      team_list.forEach((e:any, i:any) => {
        let crole = ''
        let vprole = ''
        if(i== positions[0]){
          crole = 'c'
        }
        else if(i == positions[1]){
          vprole = 'vc'
        }else{
          crole = ''
          vprole = ''
        }

        if(teams[e].role == 'wk'){
          c1+=1;
          data['wk'].push({'team':teams[e].team,'name':teams[e].name,'role':teams[e].role,'position': (crole != '') ? crole : vprole})
        }else if(teams[e].role == 'bt'){
          c2+=1;
          data['bt'].push({'team':teams[e].team,'name':teams[e].name,'role':teams[e].role,'position':(crole != '') ? crole : vprole})
        }else if(teams[e].role == 'ar'){
          c3+=1;
          data['ar'].push({'team':teams[e].team,'name':teams[e].name,'role':teams[e].role,'position':(crole != '') ? crole : vprole})
        }else if(teams[e].role == 'bw'){
          c4+=1;
          data['bw'].push({'team':teams[e].team,'name':teams[e].name,'role':teams[e].role,'position':(crole != '') ? crole : vprole})
        }

      });

      temp.push(data)

      // this.master_list.push(team_list)
      // console.log(c1,c2,c3,c4)
      if(c1>0 && c2> 0 && c3>0 && c4>0){
        // console.log(c1,c2,c3,c4)
        // let positions = this.generate_random(2,11)

        // temp.forEach((e:any,i:any) => {
        //   if(i== positions[0]){
        //     e.position = 'c'
        //   }
        //   else if(i == positions[1]){
        //     e.position = 'vc'
        //   }
        // });


        this.master_list.push(team_list)
        this.master_teams.push(temp)
      }
      }
    }

    console.log(this.master_teams)
  }

}
