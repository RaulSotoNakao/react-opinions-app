const { spawn } = require('child_process');
const child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'start']);

child.stdout.on('data', data => {
  console.log(`stdout:\n${data}`);
});

child.stderr.on('data', data => {
  console.error(`stderr: ${data}`);
});


const child2 = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'start']);

child2.stdout.on('data', data => {
  console.log(`stdou22t:\n${data}`);
});

child2.stderr.on('data', data => {
  console.error(`stde222rr: ${data}`);
});

// const { exec } = require('child_process');
// exec('npm run start', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
// });