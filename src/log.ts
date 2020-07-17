import { ErrorCode } from "./errorcode";
import { LogLevel } from "./loglevel";

/**
 * Logging system. This is a simple command that takes the log level and prints to the console based on the level. Has 
 * some other general error functionality that can be super useful. Follows some general conventions about different 
 * error levels.
 * 
 * For debugging, the code will check `process.env.NODE_DEBUG` to run or not. Production code should have this set to 
 * false.
 * @param  {LogLevel} level
 * @param  {ErrorCode} ec
 * @param  {string} message
 * @returns string
 */
export function log(level: LogLevel, message: string, ec?: ErrorCode): string {
    if (ec === undefined) ec = ErrorCode.OK;
    var errorString: string = "";
    switch (level) {
        case LogLevel.info:
            // tslint:disable-next-line: max-line-length
            // NOTE: Information to be displayed for the user. This is helpful information for the user about the game itself.
            errorString = `Info\t|| ${message}`;
            console.log("\t", "\x1b[32m", errorString, "\x1b[0m");
            break;
        case LogLevel.debug:
            // NOTE: This is debug information only. To be run in verbose mode when running the engine.
            if (process.env.NODE_DEBUG === "true") {
                errorString = `Debug\t|| ${ec} ${ErrorCode[ec]}: ${message}`;
                console.log("\t", "\x1b[34m", errorString, "\x1b[0m");
            }
            break;
        case LogLevel.warning:
            // tslint:disable-next-line: max-line-length
            // NOTE: The engine can still run, but there are things that are missing that MAY cause issues.
            errorString = `Warn\t|| ${ec} ${ErrorCode[ec]}: ${message}`;
            console.log("\t", "\x1b[33m", errorString, "\x1b[0m");
            break;
        case LogLevel.error:
            // NOTE: The engine may start to break and can cause serious issues.
            errorString = `Error\t|| ${ec} ${ErrorCode[ec]}: ${message}`;
            console.error("\t", "\x1b[31m", errorString, "\x1b[0m");
            break;
        case LogLevel.critical:
            // tslint:disable-next-line: max-line-length
            // NOTE: At this stage, the engine will break and should stop running immediately if these logs are thrown.
            errorString = `Critical!! || ${ec} ${ErrorCode[ec]}: ${message}`;
            console.error("\t", "\x1b[30m", "\x1b[41m", errorString, "\x1b[0m");
            throw new Error(errorString);
        default:
            throw new Error("Something terrible happened or that logging level is not allowed.");
    }
    return errorString;
}
