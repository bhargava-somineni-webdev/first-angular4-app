import { Component } from '@angular/core';

//@Component is the component decorative. We use that to
//config related files to this component
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent {
  serverId: number = 10; //example of string interpolation. We use this string in html using {{serverId}}
  serverStatus: string = 'offline';
  //we can also call the below function using {{getServerStatus()}} in our html file instead of {{serverStatus}}
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
