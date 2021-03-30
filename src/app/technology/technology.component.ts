import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.scss"],
})
export class TechnologyComponent implements OnInit {
  technologiesUsed = [
    {
      name: "HTML5",
      iconUrl: "./assets/devicons/html5-original.png",
      resourceUrl:
        "https://www.freecodecamp.org/news/best-html-html5-tutorial/",
    },
    {
      name: "CSS3",
      iconUrl: "./assets/devicons/css3-original.png",
      resourceUrl:
        "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
    },
    {
      name: "SCSS",
      iconUrl: "./assets/devicons/sass-original.png",
      resourceUrl: "https://sass-lang.com/",
    },
    {
      name: "JavaScript",
      iconUrl: "./assets/devicons/javascript-original.png",
      resourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Angular",
      iconUrl: "./assets/devicons/angularjs-original.png",
      resourceUrl: "https://angular.io/",
    },
    {
      name: "TypeScript",
      iconUrl: "./assets/devicons/typescript-original.png",
      resourceUrl: "https://www.typescriptlang.org/",
    },
    {
      name: "Node.js",
      iconUrl: "./assets/devicons/nodejs-original.png",
      resourceUrl: "https://nodejs.org/en/",
    },
    {
      name: "Express",
      iconUrl: "./assets/devicons/express-original.png",
      resourceUrl: "https://expressjs.com/",
    },
    {
      name: "Visual Studio Code",
      iconUrl: "./assets/devicons/Visual_Studio_Code_1.35_icon.png",
      resourceUrl: "https://code.visualstudio.com/",
    },
    {
      name: "Heroku",
      iconUrl: "./assets/devicons/heroku-plain.png",
      resourceUrl: "https://code.visualstudio.com/",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
