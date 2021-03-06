import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from "@rollup/plugin-typescript";


export default {
    input: "src/index.ts",
    // acornInjectPlugins: [jsx()],

    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs({include: "node_modules/**"}),
        typescript({  compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" }}),
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
