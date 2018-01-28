import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created Yet';
  serverName='Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created! Server Name:  ' + this.serverName;
    this.serverCreated = true;
    
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }
}
