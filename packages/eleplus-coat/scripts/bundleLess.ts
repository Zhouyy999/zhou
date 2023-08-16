import cpy from 'cpy'
import { readFile, writeFile } from 'fs/promises'
import { render } from 'less'
import fg from 'fast-glob'
import { resolve, dirname } from 'path'
import { ES_DIR, LIB_DIR, SRC_DIR } from './tools'

export const bundleLess = async () => {
  await cpy(`${SRC_DIR}/**/*.less`, ES_DIR)
  await cpy(`${SRC_DIR}/**/*.less`, LIB_DIR)

  const lessFiles = await fg('**/index.less', {
    cwd: SRC_DIR,
    onlyFiles: true
  })

  for (const lessFile of lessFiles) {
    const filePath = `${SRC_DIR}/${lessFile}`
    const lessContent = await readFile(filePath, 'utf-8')
    const code = await render(lessContent, { paths: [SRC_DIR, dirname(filePath)] })
    await writeFile(resolve(ES_DIR, lessFile.replace('.less', '.css')), code.css)
    await writeFile(resolve(LIB_DIR, lessFile.replace('.less', '.css')), code.css)
  }
}

bundleLess()
