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
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl:
        "https://www.freecodecamp.org/news/best-html-html5-tutorial/",
    },
    {
      name: "CSS3",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl:
        "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
    },
    {
      name: "SCSS",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl:
        "https://www.freecodecamp.org/news/best-css-and-css3-tutorial/",
    },
    {
      name: "JavaScript",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Angular",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl: "https://angular.io/",
    },
    {
      name: "TypeScript",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl: "https://www.typescriptlang.org/",
    },
    {
      name: "Node.js",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl: "https://nodejs.org/en/",
    },
    {
      name: "Visual Studio Code",
      iconUrl: "../../assets/devicons/css3-original.png",
      resourceUrl: "https://nodejs.org/en/",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
