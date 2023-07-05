const { spawn } = require("child_process");

function execCmd(cmd, args, options) {
    return new Promise((resolve, reject) => {
        options = options ? { ...options, shell: true } : { shell: true };
        args = args ? args : [];
        var cmdP = spawn(cmd, args, options);
        cmdP.stdout.setEncoding('utf8');
        cmdP.stderr.on('data', reject);
        cmdP.stdout.on('data', console.log);
        cmdP.on('close', resolve);
    });
}


execCmd("npm", ["install", "--no-audit"], { cwd: "./bbaweb" })
    .then(() => execCmd("npm", ["run", "build"], { cwd: "./bbaweb" }))
    .then(() => execCmd("npm", ["install", "--no-audit"], { cwd: "./bbaserver" }))
    .then(() => execCmd("npm", ["run", "dev"], { cwd: "./bbaserver" }))
    .catch((err)=>{
        console.log(err.toString('utf8'));
    });