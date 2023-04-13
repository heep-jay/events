import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {
  edit: boolean = false;
  drawer: boolean = false;
  drawer_min: boolean = true;
  template_one: boolean = false;
  template_two: boolean = false;
  template_three: boolean = false;
  template_four: boolean = false;
  template_five: boolean = false;
  template_six: boolean = false;
  template_seven: boolean = false;
  template_eight:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onEditClick(e: any) {
    this.edit = !this.edit;
    console.log('working')
  }
  onDesignClick(e: any) {
    this.edit = false;
  }
  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }
  setTemplateOne(){
    this.template_one = !this.template_one
    this.template_two = false;
    this.template_three = false;
    this.template_four = false;
    this.template_five = false;
    this.template_six = false;
    this.template_seven = false;
    this.template_eight = false
  }
  setTemplateTwo(){
    this.template_one = false;
    this.template_two = !this.template_two
    this.template_three= false;
    this.template_four = false;
    this.template_five = false;
    this.template_six = false;
    this.template_seven = false;
    this.template_eight = false
  }
  setTemplateThree(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = !this.template_three;
    this.template_four = false;
    this.template_five = false;
    this.template_six = false;
    this.template_seven = false;
  }
  setTemplateFour(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = false;
    this.template_four = !this.template_four
    this.template_five = false;
    this.template_six = false;
    this.template_seven = false;
    this.template_eight = false
  }
  setTemplateFive(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = false;
    this.template_four = false;
    this.template_five = !this.template_five;
    this.template_six = false;
    this.template_seven = false;
  }
  setTemplateSix(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = false;
    this.template_four = false;
    this.template_five = false;
    this.template_six = !this.template_six;
    this.template_seven = false;
    this.template_eight = false
  }
  setTemplateSeven(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = false;
    this.template_four = false;
    this.template_five = false;
    this.template_six = false;
    this.template_seven = !this.template_seven;
    this.template_eight = false
  }
  setTemplateEight(){
    this.template_one = false;
    this.template_two = false;
    this.template_three = false;
    this.template_four = false;
    this.template_five = false;
    this.template_six = false;
    this.template_seven = false;
    this.template_eight = !this.template_eight
  }
}
