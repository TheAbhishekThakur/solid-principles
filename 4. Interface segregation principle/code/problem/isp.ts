interface DocumentManager {
    openDocument(): void;
    closeDocument(): void;
    saveDocument(): void;
    scanDocument(): void;
}

class BasicEditor implements DocumentManager {
    openDocument(): void {
        console.log("Open Document")
    };
    closeDocument(): void {
        console.log("Close Document");
    };
    saveDocument(): void {
        console.log("Save Document");
    };
    // Suppose BasicEditor class can't use this method, but forcefully hame ese implement karni par rhi h, because interface define h es method ka v
    scanDocument(): void {
        console.log("Don't do anything");
    };
}