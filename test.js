var bower = require("bower");

bower.commands.info("some-fake-package")
.on("error", function(err) {
	console.log("Caught!");
})
.on("log", function (message) {
	// pass
})
.on("end", function (err) {
	console.log("Finished");
});
