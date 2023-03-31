Enter D:\algorithms\typescript
-- to compile, run
tsc

-- to run code
node dist/app.js

-- to fix the error below, when importing inside .ts file, add .js extension, for example: 
import charCount from "./strings/charCount.js";


Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'D:\algorithms\typescript\dist\strings\charCount' imported from D:\algorithms\typescript\dist\app.js
    at new NodeError (node:internal/errors:387:5)
    at finalizeResolution (node:internal/modules/esm/resolve:429:11)
    at moduleResolve (node:internal/modules/esm/resolve:1006:10)
    at defaultResolve (node:internal/modules/esm/resolve:1214:11)
    at nextResolve (node:internal/modules/esm/loader:165:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:844:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:431:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)
    at link (node:internal/modules/esm/module_job:75:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}