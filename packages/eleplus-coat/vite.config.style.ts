import { defineConfig } from 'vite'
import fg from 'fast-glob'

const files = fg.sync('**/style/index.ts', {
  cwd: process.cwd(),
  onlyFiles: true
})

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    // 打包时，是否清空打包文件
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      input: files,
      // 最终生产环境打包时，不会包给打包进去
      external: /\.less/,
      // 打包输出配置
      output: [
        // esm
        {
          format: 'es',
          dir: 'es',
          // 不配置名称，会导致打包出来的文件名称有个es名称，这样会采用入口文件的名称输出
          entryFileNames: '[name].js',
          // 是否压缩代码
          minifyInternalExports: false,
          // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk，而不是创建尽可能少的 chunk
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        // commonJs
        {
          format: 'cjs',
          dir: 'lib',
          minifyInternalExports: false,
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ]
    },
    // 采用库模式
    lib: {
      entry: ''
    }
  },
  plugins: [
    {
      name: 'vite-plugin-style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)
        for (const key of keys) {
          const bundler: any = bundle[key]
          this.emitFile({
            type: 'asset',
            fileName: key.replace('index.js', 'css.js'),
            source: bundler.code.replace(/\.less/g, '.css')
          })
        }
      }
    }
  ]
})
