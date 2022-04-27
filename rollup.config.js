import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel  from '@rollup/plugin-babel';



export default {
    input: "src/index.js",
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs({include: "node_modules/**"}),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),

    ],
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
    },
    external: ['react']
}
