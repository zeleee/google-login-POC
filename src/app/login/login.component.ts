import { Component, OnInit } from "@angular/core";
import { GoogleLogin } from 'nativescript-google-login';
import * as application from "tns-core-modules/application";
import { isIOS } from "tns-core-modules/platform/platform";


@Component({
    selector: "ns-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    constructor() {

     }

    ngOnInit(): void {
        if(isIOS){
            GoogleLogin.init({
                google: {
                    initialize: true,
                    serverClientId: "1098248567151-cuqm0lc770tglcknrumjobi72gd75do6.apps.googleusercontent.com",
                    clientId: "1098248567151-cuqm0lc770tglcknrumjobi72gd75do6.apps.googleusercontent.com",
                    isRequestAuthCode: false
                },
                viewController: application.ios.rootController
            });
    
        } else {
            GoogleLogin.init({
                google: {
                    initialize: true,
                    serverClientId: "1098248567151-cuqm0lc770tglcknrumjobi72gd75do6.apps.googleusercontent.com",
                    clientId: "1098248567151-cuqm0lc770tglcknrumjobi72gd75do6.apps.googleusercontent.com",
                    isRequestAuthCode: false
                },
                activity: application.android.foregroundActivity
            });
        }
    }

    login(e: Event){
        console.log("1")
        GoogleLogin.login(result=>{
            console.dir("s");
            console.dir(result.userToken);
        });
    }
}
