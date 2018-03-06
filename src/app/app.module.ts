import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel"
import { CodemirrorModule } from "ng2-codemirror";
import { AngularSplitModule } from "angular-split";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularSplitModule,
    ScrollPanelModule,
    CodemirrorModule,
    MarkdownModule.forRoot({
      provide: MarkedOptions,
      useValue: {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      }
    }),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * 
 * 
// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

// using specific option with FactoryProvider
MarkdownModule.forRoot({
  provide: MarkedOptions,
  useFactory: markedOptionsFactory,
}),
 */