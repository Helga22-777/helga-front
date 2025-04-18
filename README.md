# Live-coding! Download Manager on Pure JS

Source code for [video release](https://www.youtube.com/live/DNOe80KVurI) 
on YouTube channel ["Сергій Бабіч та Дивовижний світ веброзробки"](https://www.youtube.com/@babichweb)

---

## File Transfer UI Component

This project facilitates both file **download** and **upload** operations through a user-friendly UI with real-time progress indicators and potential support for aborting transfers. It is designed to provide a seamless experience for transferring files programmatically and interactively.

## Features Overview

---

### 📥 Download

The download process is designed to be programmatically initiated, and visually tracked through the UI. It involves downloading a file in discrete **chunks**, converting it to a downloadable object, and triggering the download via a dynamically generated anchor element.

#### Functional Steps:

1. **List Retrieval**  
   The system first retrieves and displays a list of available files for download.

2. **Programmatic Download**  
   Upon user interaction, a selected file can be downloaded programmatically.

3. **Chunked Downloading**  
   The file is fetched in **chunks**, allowing real-time feedback and better handling of large files.

4. **Progress Tracking**  
   During chunked transfer, download progress is continuously tracked and **reflected in the UI**, providing users with a visual progress indicator.

5. **Optional Abort**  
   There is potential for an **abort** mechanism to cancel the download in progress, enhancing user control.

6. **File Assembly**  
   Once all chunks are received, they are merged into a single **Blob** object.

7. **Download Trigger**  
   A URL is created from the Blob, assigned to a hidden **anchor element**, and triggered to initiate the download.

---

### 📤 Upload

The upload functionality allows users to send files to a server or destination through direct selection or optional drag-and-drop. It supports progress indication, error handling, and list updates upon completion.

#### Functional Steps:

1. **File Input Interface**  
   Users can select files via a standard input field. **Drag-and-drop (d’n’d)** functionality may be optionally supported.

2. **Event Handling**  
   When a file is selected (`onChange`), it triggers the upload process. The implementation may support **on-demand uploading** (initiated after a trigger, rather than instantly).

3. **Uploading Process**  
   Files are uploaded using a controlled mechanism, potentially in chunks or streams, with the **upload status** being monitored.

4. **Progress Display**  
   The UI provides **visual feedback** of upload progress, improving user experience and transparency.

5. **Optional Abort**  
   There may be support for aborting an in-progress upload.

6. **Completion Handling**  
   Upon completion, the system reacts with a **success** message or handles a **failure** if the upload fails.

7. **List Update**  
   After a successful upload, the list of available or uploaded files is **refreshed** to reflect the new state.

---

## Technical Considerations

- Both upload and download processes leverage **asynchronous operations** with progress feedback, enhancing UX.
- Chunk-based transfer is key for robustness, allowing partial progress recovery and better performance over unstable networks.
- Aborting transfers (both upload and download) may involve signal handling or cancellation tokens, depending on the underlying implementation.
- Blob and URL creation for download ensures compatibility with modern browser APIs, minimizing the need for external libraries.
- UI integration assumes dynamic state updates and possibly use of event listeners or reactive UI frameworks.

---

## Possible Enhancements

- Drag-and-drop support for uploads (if not yet implemented).
- Retry mechanisms on upload failure.
- User notifications or logs for completed actions.
- Accessibility enhancements for keyboard navigation and screen readers.

---

## Structure

- `server/` - local server for uploading and downloading files
- `client/` - client-side interaction with the server


---

## 📚 Useful MDN References

### 📦 File Handling & Forms

- [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) — Constructing and sending key/value pairs to the server.
- [HTMLInputElement.files](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/files) — Getting selected files from `<input type="file">`.

### 🌐 Network & Fetching

- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) — Modern API for making HTTP requests.
- [Response.body (ReadableStream)](https://developer.mozilla.org/en-US/docs/Web/API/Response/body) — Accessing response as a stream.
- [ReadableStreamDefaultReader.read()](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read) — Reading from a stream.
- [Headers.get()](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get) — Reading specific headers like `Content-Length`.

### 🧪 XMLHttpRequest

- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) — Classic API for sending HTTP requests.
- [XMLHttpRequest.upload](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/upload) — Monitoring upload progress.
- [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent) — Accessing `loaded` and `total` for progress bars.

### 📂 DOM Manipulation

- [Document.createDocumentFragment()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment) — Efficient DOM updates.
- [Element.replaceChildren()](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren) — Replacing element contents.
- [HTMLElement.hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) — Toggling visibility.
- [HTMLAnchorElement.download](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/download) — Triggering file download from blob.
- [URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) — Creating object URLs for Blob data.

### 🎯 Events & Event Handling

- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — Attaching event listeners.
- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) — Preventing default link behavior.
- [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) — Getting the target of the event.

### 🧱 Other APIs

- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) — Handling binary data like file chunks.
- [HTMLProgressElement.value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement/value) — Updating progress bar value.








