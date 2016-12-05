class BackendProgrammer {    
    createDatabase() : boolean {
        console.log("Creating database");
        return true;
    }
}

class FrontProgrammer {
    createSpa(): boolean {
        console.log("Creating Spa Web");
        return true;
    }
}

class FullStackProgrammer implements FrontProgrammer, BackendProgrammer{
     createDatabase: ()=> true;
     createSpa: () => true;
}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

// Apply mixings to FullStackProgrammer class
applyMixins(FullStackProgrammer, [BackendProgrammer, FrontProgrammer]);

let fullStack = new FullStackProgrammer();
fullStack.createDatabase();
fullStack.createSpa();
