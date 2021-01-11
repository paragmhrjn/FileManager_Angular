import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    

        <div class="row">
            
            <div class="col-12">
                 <div class="search">
            <input class="form-control" type="search" placeholder="Search file and folder"> 
            <i class="fa fa-search ico"></i>
            </div>
            <!--end of col-->
            </div>
            

           
        </div>

   `,
  styles:[
      `
      .search{
            display:flex;
    
      }

      

      .ico{
          padding:10px;
          cursor: pointer;
      }
      `
  ]

})

 export class SearchBarComponent{
     
 }