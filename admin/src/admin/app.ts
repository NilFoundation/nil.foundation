import 'ckeditor5/build/ckeditor5-dll.js'
import '@isaul32/ckeditor5-math/build/math.js'
import 'katex/dist/katex.min.css'
import * as k from 'katex/dist/katex.min.js'

window.katex = k

declare global {
  interface Window {
    // biome-ignore lint: katex needs to be globally available for CKEditor math plugin
    katex: any
  }
}

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
}

// @ts-ignore
const bootstrap = (app) => {
  console.log(app)
}

export default {
  config,
  bootstrap,
}
