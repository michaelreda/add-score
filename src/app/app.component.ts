import { HttpClient } from "@angular/common/http";
import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
 
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
   
  }

  urlChanged() {
    var iframe = document.getElementsByTagName("iframe")[0];
    if (iframe.getAttribute("src").indexOf("round_add") == -1) {
      window.location.href = "https://michaelreda.github.io/leaderboard/";
    }
  }
}
