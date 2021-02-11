import { HttpClient } from "@angular/common/http";
import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from "@angular/core";
import $ from "jquery";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  @ViewChild("iframe") iframe: ElementRef;
  url =
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://keepthescore.co/board/vpawwrumadr/") +
    "&callback=?";

  constructor(private http: HttpClient) {
    console.log(this.url);
  }

  isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
    input !== null && input.tagName === "IFRAME";
  ngOnInit() {
    // var iframe = document.getElementById("iframe");
    // var div = document.getElementById("PlaceToPutTable");
    // if (iframe instanceof HTMLIFrameElement ) {
    //   console.log(iframe.contentWindow.document.getElementById(
    //     "full-monty"
    //   ));
    //   div.innerHTML = iframe.contentWindow.document.getElementById(
    //     "full-monty"
    //   ).innerHTML;
    // }
    // this.http.get(this.url, { responseType: "text" }).subscribe(res => {
    //   res = res.substring(32);
    //   res = res.slice(0, -2);
    //   res = JSON.parse(res);
    //   let html = res["contents"];
    //   this.http
    //     .post(
    //       "https://cors-anywhere.herokuapp.com/" +
    //         encodeURIComponent("https://www.html2json.com/api/v1"),
    //       html
    //     )
    //     .subscribe(htmlJson => {
    //       console.log(htmlJson);
    //     });
    //   // console.log(res);
    //   // $("iframe").html(res["contents"]);
    // });
  }
}
