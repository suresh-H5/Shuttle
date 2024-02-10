import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ThemeService } from './theme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgComponent } from './svg/svg.component';
import { DroppableDirective } from './droppable.directive';
import { DraggableDirective } from './draggable.directive';
import { SvgTestComponent } from './svg-test/svg-test.component';
import { OverlayContainerComponent } from './overlay-container/overlay-container.component';
import { OpenOverlayContainerDirective } from './open-overlay-container.directive';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';


export function initializeApp(themeService: ThemeService) {
  return () => themeService.fetchData();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SvgComponent,
    DroppableDirective,
    DraggableDirective,
    SvgTestComponent,
    OverlayContainerComponent,
    OpenOverlayContainerDirective,
    LoginComponent,
    HomeComponent,
    // GooglesigninComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ThemeService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
