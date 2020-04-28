import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Inject, AfterViewInit, ComponentFactory, Injector, ComponentRef } from '@angular/core';
import { SubComponent } from './sub.component';

@Component({
  selector: 'yb-main-component',
  template:`
        <h3> host view Example </h3>
        <ng-container #container></ng-container>
  `,
  styles:[``]
})
export class MainComponent implements OnInit, AfterViewInit{
  @ViewChild('container',{read:ViewContainerRef}) container:ViewContainerRef;
  private subFactory:ComponentFactory<SubComponent>

  constructor(private componentFuctoryResolver:ComponentFactoryResolver,
              private injector:Injector) { }

  ngOnInit(): void {
    this.subFactory = this.componentFuctoryResolver.resolveComponentFactory(SubComponent)
  }

  ngAfterViewInit():void {

    // One way to insert comonent to container
    const subComponent:ComponentRef<SubComponent> =  this.subFactory.create(this.injector);
    subComponent.instance.title = "Somthing else";
    this.container.insert(subComponent.hostView);

    //Two way to attach component to container
    this.container.createComponent(this.subFactory)
  }

}
