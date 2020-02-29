import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvbar',
  templateUrl: './nvbar.component.html',
  styleUrls: ['./nvbar.component.scss']
})
export class NvbarComponent implements OnInit {

  userName = 'JOAQUIN TREJO';

  constructor() { }

  ngOnInit(): void {
  }

}
