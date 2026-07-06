Incremental cache does not need populating
Tag cache does not need populating

 ⛅️ wrangler 4.107.0
────────────────────

Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md

✘ [ERROR] Missing entry-point to Worker script or to assets directory

  
  If there is code to deploy, you can either:
  - Specify an entry-point to your Worker script via the command line (ex: `npx wrangler deploy src/index.ts`)
  - Or add the following to your "wrangler.toml" file:
  
  ```
  main = "src/index.ts"
  
  ```
  
  
  If are uploading a directory of assets, you can either:
  - Specify the path to the directory of assets via the command line: (ex: `npx wrangler deploy --assets=./dist`)
  - Or add the following to your "wrangler.toml" file:
  
  ```
  [assets]
  directory = "./dist"
  
  ```
  


🪵  Logs were written to "/home/runner/.config/.wrangler/logs/wrangler-2026-07-06_21-48-47_679.log"
ERROR Wrangler deploy command failed:
✘ [ERROR] Missing entry-point to Worker script or to assets directory

  
  If there is code to deploy, you can either:
  - Specify an entry-point to your Worker script via the command line (ex: `npx wrangler deploy src/index.ts`)
  - Or add the following to your "wrangler.toml" file:
  
  ```
  main = "src/index.ts"
  
  ```
  
  
  If are uploading a directory of assets, you can either:
  - Specify the path to the directory of assets via the command line: (ex: `npx wrangler deploy --assets=./dist`)
  - Or add the following to your "wrangler.toml" file:
  
  ```
  [assets]
  directory = "./dist"
  
  ```
  


🪵  Logs were written to "/home/runner/.config/.wrangler/logs/wrangler-2026-07-06_21-48-47_679.log"

Error: Process completed with exit code 1.