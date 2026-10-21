import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';

@Component({
  selector: 'app-overview',
  imports: [
    Sidebar,
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {

}
