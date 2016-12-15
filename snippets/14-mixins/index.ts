import applyMixins from './applyMixins';

class BackendProgrammer {    
    createDatabase() : boolean {
        console.log('Creating database');
        return true;
    }
}

class FrontProgrammer {
    createSpa(): boolean {
        console.log('Creating Spa Web');
        return true;
    }
}




