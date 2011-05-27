// print process.argv
process.stdout.write(process.argv[0]+"\n");
process.stdout.write(process.argv[1]+"\n");
console.log(process.execPath);
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});