import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GifsModule } from '../gifs/gifs.module';

@NgModule({
  declarations: [SideBarComponent],
  exports: [SideBarComponent, GifsModule],
  imports: [CommonModule],
})
export class SharedModule {}
