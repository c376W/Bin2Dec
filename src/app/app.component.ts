import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bin2Dec';
  binValue='';
  dec="";
  warning="Hello! Welcome~ ^_^";
  regex=/[2-9]|\D/g;

  convertDec(){
    if(this.binValue.search(this.regex)>=0) {
      this.warning="The input value is invalid. Please enter a binary number."
      return;
    }else{
      this.warning="Yay~~~";
      this.dec=parseInt(this.binValue,2).toString();
      console.log(this.dec);

    }
    
  }
}
