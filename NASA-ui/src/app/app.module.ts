import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { IndustriesComponent } from './industries/industries.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
// @ts-ignore
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		ContentComponent,
		IndustriesComponent,
		MapComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatDialogModule,
		ChartsModule,
		MatIconModule,
		HttpClientModule,
		MatSliderModule,
		MatCheckboxModule,
		FormsModule,
		MatTabsModule,
		MatRadioModule,
		MatFormFieldModule,MatInputModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
