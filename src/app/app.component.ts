import {
  Component,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit,
} from "@angular/core";



@Component({
  selector: "app-root",
  template: `
  <!--start embedded view example-->
   <yb-embedded-view></yb-embedded-view>
  <!--end embedded view example-->

  <!-- start host view example -->
  <yb-main-component></yb-main-component>
  <!-- end host view example -->
  `,
  styles: [``],
})
export class AppComponent  {
 
}
