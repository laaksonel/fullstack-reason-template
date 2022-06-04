// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const dist = 'dist';
const outputDir = path.join(__dirname, dist);
const { spawn } = require('child_process');

const config = {
    entry: './_build/default/client/index.bs.js',
    output: {
        path: path.resolve(__dirname, dist),
        filename: 'index.[contenthash].js'
    },
    devServer: {
        open: true,
        compress: true,
        host: 'localhost',
        port: process.env.PORT || 8000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        {
            apply: (compiler) => {
                compiler.hooks.initialize.tap("MyPlugin_compile", () => {
                    console.log("This code is executed before the compilation begins.");
                    //const child = spawnSync('esy mel build', ['-w']);

                    const ls = spawn('esy', ['mel', 'build', '-w']);

                    ls.stdout.on( 'data', ( data ) => {
                        console.log( `stdout: ${ data }` );
                    } );

                    ls.stderr.on( 'data', ( data ) => {
                        console.log( `stderr: ${ data }` );
                    } );

                    ls.on( 'close', ( code ) => {
                        console.log( `child process exited with code ${ code }` );
                    } );
                });
            },
        },
    ]
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
