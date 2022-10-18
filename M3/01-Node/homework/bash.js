const commands = require("./commands");

const done = (result) => {
  process.stdout.write(result);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");
process.stdin.on("data", function (data) {
  const array = data.toString().trim().split(" ");
  var cmd = array[0];
  commands[cmd](done, array);
});
