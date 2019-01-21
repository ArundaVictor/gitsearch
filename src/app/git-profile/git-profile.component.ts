import { Component, OnInit } from '@angular/core';
import { GhProfileService } from '../gh-profile.service';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent implements OnInit {

  constructor(private profileService:GhProfileService) {
   this.profileService.getProfileInfo().subscribe(); {
     console.log();
   };
   }

  ngOnInit() {
  }

}
