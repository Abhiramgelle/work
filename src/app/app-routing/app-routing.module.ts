import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet} from '@angular/router';
import { ExampleComponent } from '../example/example.component';
import { TryComponent } from '../try/try.component';
import { Example2Component } from '../example2/example2.component';
import { FamilyComponent } from '../family/family.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { SectionsComponent } from '../sections/sections.component';
import { ListComponent } from '../list/list.component';
import { DetailsComponent } from '../details/details.component';
import { ParentComponent } from '../parent/parent.component';
import { NewComponent } from '../new/new.component';
import { ProjectComponent } from '../project/project.component';
import { DetailslistComponent } from '../detailslist/detailslist.component';



 const routes: Routes = [
  { path: 'detailslist', component: DetailslistComponent },
  { path: '', component: FamilyComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'sections/:dept', component: SectionsComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'list/:dept/:sec', component: ListComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'new', component: NewComponent },
  { path: 'try', component: TryComponent },
  { path: 'tri', redirectTo:'/try' },
  { path: 'family', component: FamilyComponent },
  { path: 'try/:guy', component: TryComponent },
  { path: '**', component: Example2Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterOutlet,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
