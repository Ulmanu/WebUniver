import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl:'./sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    document.getElementById("user").innerHTML=this.tokenStorage.getUser().username;
    document.getElementById("email").innerHTML=this.tokenStorage.getUser().email;
    document.getElementById("logo").src =this.tokenStorage.getUser().image;
  }

}
