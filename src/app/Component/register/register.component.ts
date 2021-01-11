import { Component } from '@angular/core';

@Component({ 
    templateUrl: 'register.component.html',
    styles: [`
    #register .container #register-row #register-column #register-box {
        margin-top: 120px;
        max-width: 600px;
        height: auto;
        border: 1px solid #9C9C9C;
        background-color: #EAEAEA;
        border-radius: 0px 50px;
        box-shadow: 0px 0px 20px -2px;
      }
      #register .container #register-row #register-column #register-box #register-form {
        padding: 20px;
      }
      #register .container #register-row #register-column #register-box #register-form #register-link {
        margin-top: -85px;
      }
    `]
})
export class RegisterComponent {

}