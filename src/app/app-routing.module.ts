import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { HizmetlerimizComponent } from './hizmetlerimiz/hizmetlerimiz.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';

const routes: Routes = [
  { path:"anasayfa", component:AnasayfaComponent },
  { path:"hizmetlerimiz", component:HizmetlerimizComponent},
  { path:"hakkimizda",  component:HakkimizdaComponent },
  { path:"iletisim", component:IletisimComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
