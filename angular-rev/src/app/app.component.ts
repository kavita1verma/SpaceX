import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rev';

  launches;
  constructor(private httpclientobj: HttpClient) { 
    // this process is called dependency injection


  }
  ngOnInit() {
    let url = 'https://api.spacexdata.com/v3/launches?limit=100';
    //let url = 'assets/data/comments.json';
    this.httpclientobj.get(url).subscribe( (res)=> {  // res is a variable this will store url 500 data
       this.launches = res;
       console.log(this.launches);
    });  
    
   }
   
}
