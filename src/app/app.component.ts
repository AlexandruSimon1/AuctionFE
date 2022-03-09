import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';
import { AuthenticationService } from './security/authentication.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUserJob: Observable<User>;
  title = 'AuctionFE';
  public categories;
  currentUser: User;
  constructor(private categoryService: CategoryService,
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserJob = this.currentUserSubject.asObservable();
    var CronJob = require('cron').CronJob;
    var job = new CronJob('* 59 * * * *', function () {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.router.navigate(['/']);
    }, null, true, 'Europe/Bucharest');
    job.start();
  }

  ngOnInit() {
    this.getCategories();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(
      data => this.categories = data,
      err => console.log(err)
    );
  }
}
