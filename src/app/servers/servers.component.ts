import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //used as <app-servers></app-servers>
  //selector: '[app-servers]',//used as <div app-servers></div>
  //selector: '.app-servers',//used as <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  //===> below is inline html, instead of external html template  
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>
  //`,   
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false; //Example of property binding. You can use this, 
  //on html button to disable it. 
  //Eg: <button [disabled]="!allowNewServer">Add New</button>

  serverCreationStatus = 'No server was created.';
  serverName = 'Testserver';
  serverCreated = false;
  servers=['Testserver1', 'Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'New server created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; //HTMLInputElement is used to tell typescript
    //that the target is of type html element
  }

}
