import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {

  highlightHeader = input(false, {
    transform: booleanAttribute
  })

  divider = input(false, {
    transform: booleanAttribute
  })
}
