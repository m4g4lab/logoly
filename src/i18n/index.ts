import { createI18n } from "vue-i18n";

import zh from './langs/zh'
import ko from './langs/ko'
import ja from './langs/ja'
import en from './langs/en'

const messages = {
    zh,
    ko,
    ja,
    en,
}

const getLocale = () => {
    const res = localStorage.getItem('lang')
    if (res) {
        return res
    }
    const webLang = navigator.language
    if (webLang.includes('zh')) {
        return 'zh'
    }
    if (webLang.includes('en')) {
        return 'en'
    }
    if (webLang.includes('ko')) {
        return 'ko'
    }
    if (webLang.includes('ja')) {
        return 'ja'
    }

    return res || 'en'
}

const i18n = createI18n({
    legacy: false,
    locale: getLocale(),
    messages,
})

export default i18n