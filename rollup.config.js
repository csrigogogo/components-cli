import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from "@rollup/plugin-typescript";


export default {
    input: "src/index.js",
    // acornInjectPlugins: [jsx()],

    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs({include: "node_modules/**"}),
        typescript({ tsconfig: './tsconfig.json' }),
        // babel({
        //     babelHelpers: 'bundled',
        //     exclude: 'node_modules/**',
        //     // extensions: ['.js', '.jsx', '.ts', '.tsx']
        // }),

    ],
    output: {
        file: 'dist/index.js',
        format: 'esm',
    },
    external: ['react']
}
