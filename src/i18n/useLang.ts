import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default () => {
    const { locale } = useI18n();
    const langName = computed(() => {
        const langMap: Record<string, string> = {
            'zh': '简体中文',
            'en': 'English',
            'ja': '日本語',
            'ko': '한국어',
        }
        return langMap[locale.value] || 'English'
    });

    const langChange = (lang: string) => {
        locale.value = lang
        localStorage.setItem('lang', lang)
    }

    return { langChange, langName }
}