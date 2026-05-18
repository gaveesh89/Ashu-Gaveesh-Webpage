# Architectural Constraints & "Do Nots"

This file serves as an immutable context layer for any future AI agents or development processes interacting with this codebase.

## Strict Static Wasm/React Constraints:

1. **DO NOT introduce any server-side runtimes.** The Rust code must compile strictly to a client-side WebAssembly target (`wasm32-unknown-unknown`) via tooling like `wasm-pack`. It cannot execute as a backend server.
2. **DO NOT use absolute asset paths or hardcoded URLs during the bundler compilation stage.** GitHub Pages often serves sites from project subdirectories (e.g., `username.github.io/repository-name/`). All compiled asset paths, JS chunks, and Wasm binaries must be generated using relative paths (`./`) to prevent 404 loading errors.
3. **DO NOT use standard React History/Browser Routing without a fallback mechanism.** If client-side routing is introduced later, a manual browser refresh on a deep path will trigger a GitHub Pages 404. You must explicitly configure a `404.html` redirection script in the public folder to catch and reroute traffic back to `index.html`.
4. **DO NOT breach the 1 GB platform limit.** Keep the Rust compilation profile optimized for size (`opt-level = "z"`, `lto = true`) to minimize the final `.wasm` payload size.
5. **DO NOT use inconsistent file casing.** The GitHub Pages Linux environment is strictly case-sensitive.
