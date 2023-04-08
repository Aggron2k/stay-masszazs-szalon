import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  //CRUD (CREAD, READ, UPDATE, DLTE)

  //Promise(FŐ), Observable

  // setTimeout(() => {

  // },3000);
  loadingWithPromise(email: string, password: string): Promise<boolean>{
    return new Promise((resolve,reject) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if(i === 3){
          clearInterval(interval)
            if (email === 'asd' && password === 'asd'){
              resolve(true);
            }
            else{
              //console.error('Hibás bevitel!');
              reject(false);
            }
        }
      }, 1000);
    });
  }
}
