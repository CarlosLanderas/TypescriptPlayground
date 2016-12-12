type frontEndFrameworks = "Angular" | "React" | "Knockout";


let logFramework = (framework: frontEndFrameworks) => {
    console.log(framework);
};


logFramework("React");
// error argument not assignable to parameter  --> logFramework("Backbone");


