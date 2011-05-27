function log(s){
    console.log(s);
}
var util = require('util');
log("pid:"+process.pid);
log("uid:"+process.getuid());
log("gid:"+process.getgid());
log("version:"+process.version);
log("installPrefix:"+process.installPrefix);
log("title:"+process.title)
log("platform:"+process.platform);
log("memoryUseage:"+util.inspect(process.memoryUsage()));
log("cwd:"+process.cwd());
log("env:"+util.inspect(process.env));
