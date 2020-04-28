import { Component, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';

// Examle for create embedded view with context 

interface User{
  name: string;
  email:string
}
interface UserTemplateContext{
user:User;
}

@Component({
  selector: "yb-embedded-view",
  template: `
    <ng-container #container> </ng-container>
    <ng-template #userTemplate let-currentUser="user">
      <div>
        <h4>Name: {{ currentUser.name }}</h4>
        <h5>Email: {{ currentUser.email }}</h5>
      </div>
    </ng-template>
  `,
  styles: [``],
})
export class EmbeddedViewComponent implements AfterViewInit {
  constructor() {}
  @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild("userTemplate") userTemplate: TemplateRef<UserTemplateContext>;

  users = [
    { name: "yossi", email: "yossi@gmail.com" },
    { name: "jorge", email: "jorge@gmail.com" },
  ];

  ngAfterViewInit(): void {
    for (let i = 0; i < this.users.length; i++) {
      this.container.createEmbeddedView(this.userTemplate,{
        user:this.users[i]
        });
    }
  }
}
