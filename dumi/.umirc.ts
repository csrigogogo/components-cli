import { defineConfig } from 'dumi'
import path from 'path'
export default defineConfig({
    // other config entry
    chainWebpack(memo) {
        memo.module
            .rule('js')
            .include.add(path.join(__dirname, '..'))
            .end()
            .exclude.add(/node_modules/)

        memo.resolve
            .alias
            .set('@', path.join(__dirname, '../src'))
    }
})