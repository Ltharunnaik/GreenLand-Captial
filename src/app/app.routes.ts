import { Routes } from '@angular/router';
import { Home3Component } from './componte\'s/home3/home3.component';
import { Home4Component } from './componte\'s/home4/home4.component';
import { HomeComponent } from './componte\'s/home/home.component';
import { BoxedlayoutComponent } from './componte\'s/boxedlayout/boxedlayout.component';
import { ListviewComponent } from './shop/listview/listview.component';
import { ProductsingleComponent } from './shop/productsingle/productsingle.component';
import { ShopfullwidthComponent } from './shop/shopfullwidth/shopfullwidth.component';
import { SidebarComponent } from './shop/sidebar/sidebar.component';
import { AboutComponent } from './page\'s/about/about.component';
import { FaqsComponent } from './page\'s/faqs/faqs.component';
import { GridviewComponent } from './Blog/gridview/gridview.component';
import { PostComponent } from './Blog/post/post.component';
import { StandardComponent } from './Blog/standard/standard.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  {
    path:'BoxedLayout', component:BoxedlayoutComponent
  },
  {
    path:'home-3', component:Home3Component
  },
  {
    path:'home-4', component:Home4Component
  },
  {
    path:'shop-listview', component:ListviewComponent
  },
  { path: 'Product-Single', component: ProductsingleComponent },  
  {
    path:'Shopfull-Width', component:ShopfullwidthComponent
  },
  {
    path:'Sidebar', component:SidebarComponent
  },
  {
    path:'About', component:AboutComponent
  },
  {
    path:'Faqs', component:FaqsComponent
  },
   {
    path:'gridview', component:GridviewComponent
  },
  {
    path:'post', component:PostComponent
  },
  {
    path:'standard', component:StandardComponent
  },
  {
    path:'contact', component:ContactComponent
  }
];
