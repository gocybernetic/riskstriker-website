import {readdirSync,readFileSync,writeFileSync,mkdirSync,cpSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
const root='dist/client';
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)]);}
// All current routes are reading-only. Publish HTML/CSS without client runtime.
for(const f of walk(root).filter(f=>f.endsWith('.html'))){
 let html=readFileSync(f,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*>/gi,'');
 writeFileSync(f,html);
 if(!f.endsWith('/index.html')&&!f.endsWith('/404.html')){const dest=f.slice(0,-5)+'/index.html';mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,html);}
}
mkdirSync('docs',{recursive:true});cpSync(root,'docs',{recursive:true});writeFileSync('docs/.nojekyll','');
const base=JSON.parse(readFileSync('package.json','utf8')).pagesBase||'';
if(base)for(const f of walk('docs').filter(f=>f.endsWith('.html'))){let h=readFileSync(f,'utf8').replace(/(href|src)="\/(?!\/)/g,`$1="${base}/`);writeFileSync(f,h);}
console.log('Static reading pages prepared for Sites and GitHub Pages.');
