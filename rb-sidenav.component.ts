import {
  Input, Component, ViewEncapsulation, HostBinding, ViewChild, ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'rb-sidenav',
  templateUrl: 'rb-sidenav.component.html',
  styleUrls: ['rb-sidenav.component.scss']
})
export class RbSidenavComponent implements AfterContentInit {
  collapsed: boolean;
  @ViewChild('sideMenu') sideMenu: ElementRef;
  @ViewChild('indicator') indicator: ElementRef;

  constructor() {
  }

  ngAfterContentInit(): void {
    this.setCollapsed(false);
  }

  setCollapsed(val: boolean) {
    setTimeout(() => {
      const avtive = this.sideMenu.nativeElement.querySelector('rb-sidenav-item.active');
      if (!avtive) return;
      this.indicator.nativeElement.style.top = `${avtive.offsetTop}px`;
    }, 500);
    this.collapsed = val;
  }

  getCollapsed() {
    return this.collapsed;
  }
}

@Component({
  selector: 'rb-sidenav-item',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
})
export class RbSidenavItemComponent {
  @HostBinding('class') className = 'rb-menu-item waves-effect waves-light btn-flat';
  @HostBinding('class.active') @Input() active: boolean;
}

@Component({
  selector: 'rb-sidenav-separator',
  template: `<span><ng-content></ng-content></span>`,
  encapsulation: ViewEncapsulation.None,
})
export class RbSidenavSeparatorComponent {
  @HostBinding('class') className = 'rb-separator';
}

@Component({
  selector: 'rb-sidenav-divider',
  template: '<template></template>',
  encapsulation: ViewEncapsulation.None,
})
export class RbSidenavDividerComponent {
  @HostBinding('class') className = 'rb-divider';
}
