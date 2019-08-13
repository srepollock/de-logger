/**
 * Error codes
 */
export enum ErrorCode {
    OK = 0,
    EngineFailed = 1,
    Error, // General Errors
    DocumentUndefined,
    EngineInitialization = 100, // Engine Errors
    EngineInstanceNull,
    EngineInstanceNotNull,
    EngineInstanceUndefined,
    EngineClientNotSet,
    EngineWindowUndefined,
    EngineStartedEarly,
    EngineRunning,
    EngineNotRunning,
    EngineCleanupFailed,
    ContainerUndefined,
    MessageSystemInitialization = 200, // MessageSystem Errors
    MessageSystemUndefined,
    DuplicateListener,
    UnsubscribeFailed,
    MessageRecieverNotFound,
    FailedAddingListener,
    ListenerUndefined,
    BrowserWindowUndefined = 300, // BrowserWindow Errors
    BrowserWindowDidNotClose,
    SceneUndefined = 400, // Scene Errors
    SceneNameUndefined,
    SceneManagerUndefined,
    SceneManagerCleanupFailed,
    EntityInitialization = 500, // Entity Errors
    EntityParentUndefined,
    EntityAlreadyHasChild,
    EntityAlreadyHasComponent,
    EntityChildNotFound,
    EntityComponentNotFound,
    RenderSystemUndefined = 600, // RenderSystem Errors
    RenderSystemInitializationFailed,
    CanvasNotFound,
    CanvasNotDefined,
    RenderSystemCleanupFailed,
    SceneNotFound,
    SceneNotActive,
    SceneTimedOut,
    SoundSystemUndefined = 700, // Sound System
    WindowUndefined, // Window Errors
    GameWindowUndefined,
    NotElectronWindow,
    PhysicsSystemUndefined = 800, // Physics Errors
    AssetLoaderUninitialized = 900, // AssetLoader
    AssetManagerUndefined,
    NoFileExtension,
    JSONDataUndefined,
    LoadAssetFailed,
    NoAssetName,
    AssetManagerDidNotGetAsset,
    TextureNotLoaded,
    ErrorLoadingFile, // Helper Function Errors
    ReadJSONFile,
    WriteJSONFile,
    FileContentsNotRead,
}