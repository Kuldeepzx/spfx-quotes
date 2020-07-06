import { HttpClient, IHttpClientOptions, HttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';
// import { Constants } from './Constant';


export class ServiceProvider {
    private wpcontext:WebPartContext;
    public constructor(context: WebPartContext){
        this.wpcontext = context;
    }
        private httpClientOptionsForGlobal: IHttpClientOptions = {
            headers: new Headers({
                // "x-rapidapi-host":"http://quotes.rest/qod.json?category=inspire",
                // "x-rapidapi-key":'ffb3fe791fmsh8b2d733f2fda1a5p1d8eddjsnbc079289ed83',

            }),
            method:"GET",
            mode: "cors",
        };
        
    public async getTotals(){
        var response = await this.wpcontext.httpClient  
        .get("https://quotes.rest/qod.json?category=inspire", HttpClient.configurations.v1,this.httpClientOptionsForGlobal);  
        console.log(response);  
        var responeJson : any = await response.json();  
        return responeJson;  
        } 
}
