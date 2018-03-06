import { Component } from '@angular/core';
import { contentFactory } from './content';
import * as mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public content:string;
  public config: any
  constructor(){
    this.config = {
      /**
       * Reference: http://codemirror.net/doc/manual.html#config
       */
      codemirror: {
        theme: 'eclipse',
        // keyMap: 'vim',
        mode: 'gfm',
      },
      /**
       * Reference: marked.js
       */
      markdown: {
  
      },
      mermaid: {
  
      }
    };
    this.content = contentFactory();
    mermaid.initialize({
        startOnLoad:false
    });
  }
  handleFocus(event: any) {
    console.log(event);
  }
  handleBlur(event: any) {
    console.log(event);
  }
  handleValueChange(event: any) {
    console.log(event);
    this.content = event;
  }
}
