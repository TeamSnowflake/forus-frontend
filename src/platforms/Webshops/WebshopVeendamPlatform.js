const platform = require('./_WebshopBasePlatform').clone();
const destPath = '../dist/forus-webshop-veendam.panel';

// change platform name
platform.setName('webshop_veendam');

// tweaking output and cleaned paths config
platform.setDest(`${destPath}`);
platform.setAssetsPath(`${destPath}/assets`);
platform.setCleanPath([
    `${destPath}`,
    `${destPath}/assets`
]);

// assets configs
platform.copyAsset("resources/_webshop-common/**/*", "./");
platform.copyAsset("resources/webshop-veendam/**/*", "./");

// tweak scss configs
platform.editTask('scss', (task) => {
    task.src = "veendam/style-webshop-veendam.scss";
    task.watch = [
        "_common/**/*.scss",
        "veendam/**/*.scss"
    ];

    return task
});

// change server port
platform.serve(5550, '/');

module.exports = platform;