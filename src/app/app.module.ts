import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateThinkComponent } from './components/think/create-think/create-think.component';
import { ListThinksComponent } from './components/think/list-thinks/list-thinks.component';
import { ThinkComponent } from './components/think/think/think.component';
import { ConfirmDeleteThinkComponent } from './components/modal/confirm-delete-think/confirm-delete-think.component';
import { EditThinkingComponent } from './components/think/edit-thinking/edit-thinking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThinkComponent,
    ListThinksComponent,
    ThinkComponent,
    ConfirmDeleteThinkComponent,
    EditThinkingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
