import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { NoteListComponent } from './pages/notes/note-list.component';
import { NoteFormComponent } from './pages/notes/note-form.component';
import { HospitalisationListComponent } from './pages/hospitalisations/hospitalisation-list/hospitalisation-list.component';
import { HospitalisationFormComponent } from './pages/hospitalisations/hospitalisation-form/hospitalisation-form.component';
import { RendezvousListComponent } from './pages/rendezvous/rendezvous-list/rendezvous-list.component';
import { RendezvousFormComponent } from './pages/rendezvous/rendezvous-form/rendezvous-form.component';
import { ChambreListComponent } from './pages/chambres/chambre-list/chambre-list.component';
import { ChambreFormComponent } from './pages/chambres/chambre-form/chambre-form.component';
import { PaiementFormComponent } from './pages/paiements/paiement-form/paiement-form.component';
import { PaiementListComponent } from './pages/paiements/paiement-list/paiement-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';





const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'patients',
        loadChildren: () => import('./pages/patients/patients.module').then(m => m.PatientsModule)
      },
      {
        path: 'chambres',
        children: [
          { path: '', component: ChambreListComponent },
          { path: 'add', component: ChambreFormComponent },
          { path: 'edit/:id', component: ChambreFormComponent }
        ]
      },
      {
        path: 'paiements',
        children: [
          { path: '', component: PaiementListComponent },
          { path: 'add', component: PaiementFormComponent },
          { path: 'edit/:id', component: PaiementFormComponent }
        ]
      },

      {
        path: 'notes',
        children: [
          { path: '', component: NoteListComponent },
          { path: 'add', component: NoteFormComponent },
          { path: 'edit/:id', component: NoteFormComponent }
        ]
      },
      {
        path: 'hospitalisations',
        children: [
          { path: '', component: HospitalisationListComponent },
          { path: 'add', component: HospitalisationFormComponent },
          { path: 'edit/:id', component: HospitalisationFormComponent }
        ]
      },
      {
        path: 'rendezvous',
        children: [
          { path: '', component: RendezvousListComponent },
          { path: 'add', component: RendezvousFormComponent },
          { path: 'edit/:id', component: RendezvousFormComponent }
        ]
      },

      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then((m) => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'apexchart',
        loadComponent: () => import('./demo/pages/core-chart/apex-chart/apex-chart.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/extra/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [


    ]
  }
];

@NgModule({
  imports: [BrowserModule,HttpClientModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
