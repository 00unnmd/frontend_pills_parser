import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";

const i18nProvider = polyglotI18nProvider(() => russianMessages, "ru");

export default i18nProvider;
