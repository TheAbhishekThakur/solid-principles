interface DocumentOpener {
    openDocument(): void;
}

interface DocumentCloser {
    closeDocument(): void;
}

interface DocumentSaver {
    saveDocument(): void;
}

interface DocumentScanner {
    scanDocument(): void;
}

class BasicEditorEx implements DocumentOpener, DocumentCloser, DocumentSaver {
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
    // scanDocument(): void {
    //     console.log("Don't do anything");
    // };
}

class AdvanceEditorEx implements DocumentOpener, DocumentCloser, DocumentSaver {
    openDocument(): void {
        console.log("Open Document")
    };
    closeDocument(): void {
        console.log("Close Document");
    };
    saveDocument(): void {
        console.log("Save Document");
    };
    scanDocument(): void {
        console.log("Scan Document");
    };
}