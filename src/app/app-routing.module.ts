import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestComponent } from './test/test.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
      path:   'contact',
      component: ContactComponent
    },
     {
      path:   'portfolio',
      component: PortfolioComponent
    },
    {
      path:   'about',
      component: AboutComponent
    },
     {
      path:   'test',
      component: TestComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const RoutingComponents = [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TestComponent,
    BlogComponent
]
