const { zip } = require("zip-a-folder");

(async () => {
    try {
        console.log("Starting packing of app");
        if (!process.argv[2] || !process.argv[3]) {
            console.log("Missing required args dir/out")
            return;
        }

        await zip(process.argv[2].split("=")[1], process.argv[3].split("=")[1], { compression: 9 });

        console.log("Finished packing of app")
    } catch (error) {
        console.log("Error on packing", { error });
    }
})();