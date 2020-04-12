import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'Blackscure';
    private client_id = '5746f35f66d7f6774de6';
    private client_secret= 'd6ba259c0a1c33aaeee76d1968f013503afa6f41';
    
    constructor(private _http:Http){
        console.log('Github Service Init...');
    }
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:string){
        this.username = username;
    }
}