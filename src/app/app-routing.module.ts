import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlaceholdersModule } from './placeholders/placeholders.module';
import { TablesModule } from './tables/tables.module';
import { ListsModule } from './lists/lists.module';
import { PopupsModule } from './popups/popups.module';


const routes: Routes = [
  {path: 'placeholders',loadChildren:()=>

import('./placeholders/placeholders.module').then(m=>PlaceholdersModule)
},

{path: 'tables',loadChildren:()=>

import('./tables/tables.module').then(m=>TablesModule)
},

{path: 'lists',loadChildren:()=>

  import('./lists/lists.module').then(m=>ListsModule)
  },
  {path: 'popups',loadChildren:()=>
  
    import('./popups/popups.module').then(m=>PopupsModule)
    },
  {path: '',component:HomeComponent}, // localhost:4200 da yani sayfa ilk açıldığında HomeComponent
  {path:'**',component:NotFoundComponent} // içerisinde hiç bir path ile eşleşmiyorsa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
