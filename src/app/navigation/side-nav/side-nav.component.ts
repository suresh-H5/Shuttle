import { Component,OnInit } from '@angular/core';
import { NavItem } from '../models/nav-item';
import { EventManager } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  navItems: NavItem[] = [
    {
      displayName: 'Modules',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'Import',
          iconName: "group",
          route: 'devfestfl/speakers',
        },
        {
          displayName: 'Catalog',
          iconName: 'speaker_notes',
          route: 'devfestfl/sessions',
        }
      ]
    },
    {
      displayName: 'Area',
      iconName: 'videocam',
      children: [
        {
          displayName: 'AZ',
          iconName: 'group',
        },
        {
          displayName: 'Region',
          iconName: 'speaker_notes',

        },
        {
          displayName: 'Text',
          iconName: 'speaker_notes',
        }
      ]
    },
    {
      displayName: 'Compute',
      iconName: 'movie_filter',
      children: [
        {
          displayName: 'AppRunner',
          iconName: 'group',
          children: [
            {
              displayName: 'AppRunner Child1',
              iconName: 'person',
              route: 'michael-prentice'
            },
            {
              displayName: 'AppRunner Child2',
              iconName: 'person',
              route: 'stephen-fluin',
            },
            {
              displayName: 'AppRunner Child3',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'AutoSCaling',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'AutoSCaling child1',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'AutoSCaling child2',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'AutoSCaling child3',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'AutoSCaling child4',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Batch',
          iconName: 'feedback',
          route: 'feedback'
        },
        {
          displayName: 'Container',
          iconName: 'feedback',
          route: 'feedback'
        },
        {
          displayName: 'EC2',
          iconName: 'feedback',
          route: 'feedback'
        },
        {
          displayName: 'Elastic Beanstalk',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Network',
      disabled: true,
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Network Child 1',
          iconName: 'group',
          children: [
            {
              displayName: 'Network sub-child1- 1',
              iconName: 'person',
              route: 'michael-prentice'
            },
            {
              displayName: 'Network sub-child 1-2',
              iconName: 'person',
              route: 'stephen-fluin'
            }
          ]
        },
        {
          displayName: 'Network Child 2',
          iconName: 'group',
          children: [
            {
              displayName: 'Network sub-child2- 1',
              iconName: 'person',
              route: 'michael-prentice',
            },
            {
              displayName: 'Network sub-child2- 2',
              iconName: 'person',
              route: 'stephen-fluin'
            }
          ]
        }
      ]
    },
    {
      displayName: 'Storage',
      disabled: true,
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Storage Child 1',
          iconName: 'group',
          children: [
            {
              displayName: 'Storage sub-child1- 1',
              iconName: 'person',
              route: 'michael-prentice'

            },
            {
              displayName: 'Storage sub-child 1-2',
              iconName: 'person',
              route: 'stephen-fluin'
            }
          ]
        },
        {
          displayName: 'Storage Child 2',
          iconName: 'group',
          children: [
            {
              displayName: 'Storage sub-child2- 1',
              iconName: 'person',
              route: 'michael-prentice',
            },
            {
              displayName: 'Network sub-child2- 2',
              iconName: 'person',
              route: 'stephen-fluin'
            }
          ]
        }
      ]
    }
  ];
  filteredResources:NavItem[] = [];
  searchString: string = "";
  projectName: string = "Project Name";
  constructor() {
    
  }
  ngOnInit(): void {
    //Make an API call here to fetch the real time data
    this.filteredResources = this.navItems;
  }

  filterResources(event: any) {
    this.searchString = event.target.value;
    if (this.searchString && this.searchString.length > 2) {
      this.filteredResources = this.filter(this.navItems, (x: NavItem) => x.displayName.toLowerCase().includes(this.searchString.toLowerCase()));
    }
    else {
      this.filteredResources = this.navItems;
    }
  }
  
  filter(items: any, fn: any) {
    return items.reduce((r: any, o: any) => {
      var children = this.filter(o.children || [], fn);
      if (fn(o) || children.length) r.push(Object.assign({}, o, children.length && { children }));
      return r;
    }, []);
  }

}