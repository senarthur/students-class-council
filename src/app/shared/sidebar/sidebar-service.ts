import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarCollapsed = signal(false);

  toggleSidebar() {
    this.isSidebarCollapsed.update(prev => !prev);
    document.body.classList.toggle('sidebar-collapsed', this.isSidebarCollapsed());
  }
}
