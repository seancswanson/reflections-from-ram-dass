import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { InformationComponent } from "./information/information.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "information", component: InformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
