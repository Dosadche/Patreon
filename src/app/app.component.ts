import { Component } from '@angular/core';
import { Founder, Patreon, User,  } from './models/user.model';
import { Startup } from './models/startup.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Patreon'
  
    constructor(){

      const mark = new Founder({
        name: 'Mark',
        balance: 0,
        startups: []
      })

      const fred = new Patreon({
        name: 'Fred',
        balance: 1000
      })

      const marksStartup = mark.createStartup(1, 'Facebook', 'Our goal is to connect people', 2000000)

      mark.startups.push(marksStartup)

      fred.donateToStartup(mark, mark.startups[0], 999)

      fred.donateToStartup(mark, mark.startups[0], 2)


    }
}
