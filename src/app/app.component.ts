import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  title = 'YOU-DRIVE teach';

  items: NbMenuItem[] = [
    {
      title: 'Übersicht',
      icon: 'grid-outline',
      expanded: true,
    },
    {
      title: 'Unterrichte',
      icon: 'book-open-outline',
      expanded: false,
      children: [
        {
          title: 'Aktuell',
          badge: {
            text: '2',
            status: 'danger',
          },
        },
        {
          title: 'Kommend',
          badge: {
            text: '9',
            status: 'warning',
          },
        },
        {
          title: 'Archiviert',
          badge: {
            text: '87',
            status: 'primary',
          },
        },
      ],
    },
    {
      title: 'Fragenkataloge',
      icon: 'grid-outline',
      expanded: true,
    },
    {
      title: 'Einstellungen',
      icon: 'options-2-outline',
      children: [
        {
          title: 'Updates'
        },
        {
          title: 'Schülerbildschirm'
        },
        {
          title: 'Steuerung per Tablet'
        },
        {
          title: 'Google Maps'
        }
      ]
    },
    {
      title: 'Virtuelle Tafel',
      icon: 'edit-2-outline',
    },
    {
      title: 'Beenden',
      icon: 'logout',
    },
  ];

  constructor(private router: Router,
    private menuService: NbMenuService,
    private sidebarService: NbSidebarService) {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.menuService.onItemClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe( (item) => {
        console.log(item);
        switch (item.tag) {
          case 'sidebar':
            switch (item.item.title) {
              case 'Übersicht':
                this.router.navigate(['']);
                break;
              case 'Aktuell':
                this.router.navigate(
                  [
                    {
                      outlets: {
                        primary: ['lecture'],
                        subheader: ['lecture']
                      }
                    }
                  ]);
                break;
              case 'Virtuelle Tafel':
                this.router.navigate(
                  [
                    {
                      outlets: {
                        primary: ['blackboard'],
                        subheader: ['blackboard']
                      }
                    }
                  ]);
                break;
            }

          break;
        }
      });
  }

  toogleSidebar() {
    console.log(1)
    this.sidebarService.toggle(true);
    return false;
  }
}
