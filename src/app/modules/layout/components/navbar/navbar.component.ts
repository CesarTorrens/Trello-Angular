import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { Colors, NAVBAR_BACKGROUNDS } from '@models/colors.model';

import { AuthService } from '@services/auth.service';
import { BoardsService } from '@services/boards.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  isOpenOverlayCreateBoard = false;

  user$ = this.authService.user$;
  navBarBackgroundColor: Colors = 'sky';
  navBarColors = NAVBAR_BACKGROUNDS;

  constructor(
    private authService: AuthService,
    private router: Router,
    private boardsService: BoardsService
  ) {
    this.boardsService.backgroundColors$.subscribe((color) => {
      this.navBarBackgroundColor = color;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  closeOverlay(val: boolean) {
    this.isOpenOverlayCreateBoard = val;
  }

  get colors() {
    const classes = this.navBarColors[this.navBarBackgroundColor];
    return classes ? classes : {};
  }
}
