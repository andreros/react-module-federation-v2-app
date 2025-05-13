const { ModuleFederationPlugin } = require('@module-federation/enhanced/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
    const isDev = argv.mode === 'development';

    return {
        mode: argv.mode || 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        devtool: isDev ? 'source-map' : false,
        devServer: {
            static: './dist',
            port: env.PORT || 4001,
            hot: true,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'mfe',
                filename: 'remoteEntry.js',
                exposes: {
                    './app': './src/app.tsx',
                },
                remotes: {
                    host: 'host@http://localhost:4000/remoteEntry.js',
                },
                shared: {
                    react: { singleton: false, eager: true, requiredVersion: '16.x' },
                    'react-dom': { singleton: false, eager: true, requiredVersion: '16.x' },
                },
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ]
    };
};   
