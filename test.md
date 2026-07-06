Building server function: default...
file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/aws/dist/build/copyTracedFiles.js:128
                throw new Error(`
                      ^

Error: 
--------------------------------------------------------------------------------
app/api\verdict\route cannot use the edge runtime.
OpenNext requires edge runtime function to be defined in a separate function.
See the docs for more information on how to bundle edge runtime functions.
--------------------------------------------------------------------------------
        
    at computeCopyFilesForPage (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/aws/dist/build/copyTracedFiles.js:128:23)
    at file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/aws/dist/build/copyTracedFiles.js:193:9
    at Array.forEach (<anonymous>)
    at copyTracedFiles (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/aws/dist/build/copyTracedFiles.js:192:12)
    at generateBundle (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/cloudflare/dist/cli/build/open-next/createServerBundle.js:121:60)
    at createServerBundle (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/cloudflare/dist/cli/build/open-next/createServerBundle.js:75:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async build (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/cloudflare/dist/cli/build/build.js:87:5)
    at async buildCommand (file:///D:/WORK/OWN/devils-advocart/web/node_modules/@opennextjs/cloudflare/dist/cli/commands/build.js:40:5)

Node.js v24.4.1
PS D:\WORK\OWN\devils-advocart\web> 