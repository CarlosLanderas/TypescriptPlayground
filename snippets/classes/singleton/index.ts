import Singleton from './singleton';

let singleton = Singleton.getInstance();

singleton.execute();
singleton.execute();

console.log(singleton.getExecutions());

let singleton2 = Singleton.getInstance();
singleton2.execute();

console.log(singleton2.getExecutions());