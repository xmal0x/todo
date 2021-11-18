import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  { path: "", component: MainComponent, data: { animation: "MainPage" } },
  { path: "about", component: AboutComponent, data: { animation: "AboutPage" }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
