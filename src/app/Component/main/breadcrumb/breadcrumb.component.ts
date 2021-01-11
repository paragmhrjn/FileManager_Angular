import { Component } from '@angular/core';

@Component({
    selector: 'app-breadcrumb',
    template: `
    

    <div aria-label="breadcrumb">
    <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">item</a></li>
    <li class="breadcrumb-item"><a href="#">item</a></li>
    </ol>
    </div>

   `,
  styles:[
      `
      .breadcrumb{
        border-radius: 0 20px;
        box-shadow: 0px 2px 10px -1px  #888888; 
    }
    
    .breadcrumb-item a{
        text-decoration: none;
        font-weight: lighter;
        font-style: italic;
    }
      `
  ]

})

 export class breadcrumbComponent{
     
 }