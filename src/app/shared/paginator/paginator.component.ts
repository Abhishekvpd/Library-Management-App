import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() pageConfig!: {
    pageSize: number;
    currentPage: number;
    totalPages: number;
  };

  @Output() pageEvent = new EventEmitter();

  pageSizeSelectHandler(event: any) {
    console.log(event.target.value);
    this.pageConfig.pageSize = event.target.value;
    this.pageEvent.emit();
  }

  paginationActionHandler(action: string) {
    action === 'PREV'
      ? this.pageConfig.currentPage--
      : this.pageConfig.currentPage++;
    this.pageEvent.emit();
  }
}
