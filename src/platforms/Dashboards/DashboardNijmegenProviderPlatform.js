const platform = require('./_DashboardBasePlatform').clone();
const destPath = '../dist/forus-platform.provider.nijmegen';

// change platform name
platform.setName('dashboard_nijmegen_provider');

// tweaking output and cleaned paths config
platform.setDest(`${destPath}`);
platform.setAssetsPath(`${destPath}/assets`);
platform.setCleanPath([
    `${destPath}`,
    `${destPath}/assets`
]);

// tweak scss configs
platform.editTask('scss', (task) => {
    task.src = "nijmegen/style-dashboard-nijmegen.scss";
    task.watch = [
        "_common/**/*.scss",
        "nijmegen/**/*.scss"
    ];

    return task
});

// change server port
platform.serve(4020, '/');

module.exports = platform;