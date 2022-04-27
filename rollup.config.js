import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: "src/index.js",
  plugins: [
    resolve(),
    commonjs(),
    babel({ 
      presets: ['@babel/preset-react'], 
      babelHelpers: 'bundled'  
    })
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    plugins: [
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      })
    ]
  },
}