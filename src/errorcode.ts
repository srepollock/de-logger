/**
 * Engine error codes
 */
export enum ErrorCode {
    OK = 0,
    EngineFailed = 1,
    Error, // General Errors
    DocumentUndefined,
    EngineInitialization = 100, // Engine Errors
    EngineInstanceUndefined,
    EngineInstanceNotUndefined,
    EngineClientNotSet,
    EngineWindowUndefined,
    EngineStartedEarly,
    EngineRunning,
    EngineNotRunning,
    EngineCleanupFailed,
    MessageSystemInitialization = 200, // MessageSystem Errors
    MessageSystemUndefined,
    DuplicateListener,
    UnsubscribeFailed,
    MessageRecieverNotFound,
    FailedAddingListener,
    ListenerUndefined,
    BrowserWindowUndefined = 300, // BrowserWindow Errors
    BrowserWindowDidNotClose,
    ContainerUndefined,
    SceneUndefined = 400, // Scene Errors
    SceneNameUndefined,
    SceneManagerUndefined,
    SceneManagerCleanupFailed,
    SceneNotLoaded,
    EntityInitialization = 500, // Entity Errors
    EntityParentUndefined,
    EntityAlreadyHasChild,
    EntityAlreadyHasComponent,
    EntityChildNotFound,
    EntityComponentNotFound,
    RenderSystemUndefined = 600, // RenderSystem Errors
    RenderSystemInitializationFailed,
    CanvasNotFound,
    RenderSystemCleanupFailed,
    PhysicsSystemUndefined = 700, // PhysicsSystem Error
    WindowUndefined, // Window Errors
    GameWindowUndefined,
    AssetLoaderUninitialized, // Asset Errors
    AssetManagerUndefined,
    NoFileExtension,
    NoAssetName,
    LoadAssetFailed,
    JSONAssetNotLoaded,
    JSONDataUndefined,
    AssetManagerDidNotGetAsset,
    JSONLoaderPathImport,
    JSONLoaderFsImport,
    JSONLoaderFsStat,
    FileDoesNotExist,
    FileDataUndefined,
    ErrorLoadingFile = 800, // Helper Function Errors
    ReadJSONFile,
    WriteJSONFile,
    FileContentsNotRead,
}