import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { HeroesComponent} from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificationsComponent} from './certifications/certifications.component';
import { ExperienceDetailComponent} from './experience-detail/experience-detail.component';
import { ExperienceComponent} from './experience/experience.component';
import { PrintViewerComponent } from './print-viewer/print-viewer.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent} from './education/education.component';
const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'heroes', component:HeroesComponent},
  { path:'profile', component:ProfileComponent},
  { path:'detail/:id', component: HeroDetailComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'skills', component:SkillsComponent},
  { path:'certifications', component:CertificationsComponent},
  { path:'experience', component:ExperienceComponent},
  { path:'experienceDetail/:id', component:ExperienceDetailComponent},
  { path:'printViewer/:url', component:PrintViewerComponent},
  { path:'education', component:EducationComponent},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
