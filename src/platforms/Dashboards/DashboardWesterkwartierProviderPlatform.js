const platform = require('./_DashboardBasePlatform').clone();
const destPath = '../dist/forus-platform.provider.westerkwartier';

// change platform name
platform.setName('dashboard_westerkwartier_provider');

// tweaking output and cleaned paths config
platform.setDest(`${destPath}`);
platform.setAssetsPath(`${destPath}/assets`);
platform.setCleanPath([
    `${destPath}`,
    `${destPath}/assets`
]);

// assets configs
platform.copyAsset("resources/_platform-common/**/*", "./");
platform.copyAsset("resources/platform-westerkwartier/**/*", "./");

// tweak scss configs
platform.editTask('scss', (task) => {
    task.src = "westerkwartier/style-dashboard-westerkwartier.scss";
    task.watch = [
        "_common/**/*.scss",
        "westerkwartier/**/*.scss"
    ];

    return task
});

// change server port
platform.serve(4040, '/');

module.exports = platform;