export namespace Utilities {
   export namespace Logging {
        export function log(msg) {
            console.log(msg);
        }
        export function error(msg) {
            console.error(msg);
        }
    }

}

Utilities.Logging.error("Error happened!");
Utilities.Logging.log("Logging information");