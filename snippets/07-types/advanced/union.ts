import {DataScientist, Developer, WorkerType}from "./classes";

function startWorking( worker : DataScientist | Developer) {
    worker.name;        
    worker.doWork();    
    //Not availabe in intersection worker.age;
}

function getWorker(workerType: WorkerType) : DataScientist | Developer {

    switch(workerType) {
        case WorkerType.Data:
            return new DataScientist();
        case WorkerType.Software:
            return new Developer();
    }
}