export class RestService {

    getAsync<T>(url:string) : Promise<T>{
       //simulate get data from server
       let data;
       return new Promise<T>( (res,rej) => {         
          res(data.json());
       });
    }
}