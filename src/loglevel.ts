/**
 * Logging levels
 * 
 * * Info is for developer and player information; general warnings and calls.  
 * * Debug is for developer information only; for debugging purposes and not shipped in the final version.  
 * * Warning is for developer and player; this is information that is handled, but should not be occuring normally.  
 * * Error is for developer and player; this is for engine errors that are handled but will cause weird 
 * results with the engine's running.  
 * * Critical is for developer and player; this is when the engine will crash. Errors here should throw an error, or 
 * handle an error and throw a new one. This is when the engine cannot continue running in any curcumstance.
 */
export enum LogLevel {
    "info" = 0,
    "debug",
    "warning",
    "error",
    "critical"
}