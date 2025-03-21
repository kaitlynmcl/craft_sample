const Encore = require('@symfony/webpack-encore');

// Configure the runtime environment explicitly
Encore.configureRuntimeEnvironment('dev'); // 'dev' or 'prod'

Encore
    // The directory where Webpack will output the compiled files
    .setOutputPath('web/build/')
    // The public path that will be used by the browser to access the files
    .setPublicPath('/build')

    // Adding the main JavaScript file entry
    // .addEntry('app', './assets/js/app.js')

    .addStyleEntry('home', './assets/scss/home.scss')
    .addStyleEntry('card', './assets/scss/card.scss')

    // Enable SCSS support
    .enableSassLoader()

    // Enable source maps for easier debugging in development
    .enableSourceMaps(!Encore.isProduction())

    // Versioning for production to avoid caching issues
    .enableVersioning(Encore.isProduction())

    // Enable the single runtime chunk (recommended)
    .enableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig();
