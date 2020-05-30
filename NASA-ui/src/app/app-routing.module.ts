import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { IndustriesComponent } from './industries/industries.component';

const routes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'industries', component: IndustriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
