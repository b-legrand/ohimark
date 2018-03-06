import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorComponent, PreviewComponent],
  exports: [
    EditorComponent,
    PreviewComponent,
  ]
})
export class CoreModule { }
