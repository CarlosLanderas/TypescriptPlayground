import {getData} from './asyncFunction';


class Consumer {
    
    async consume() : Promise<string> {
        
        let data= await getData();
        console.log(data);
        return data;
    }
}

new Consumer().consume().then (d => console.log(d));