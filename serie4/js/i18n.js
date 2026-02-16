let currentLocale = localStorage.getItem("locale") || "en";

/**
 * @param {string} locale
 */
async function loadLocale(locale) {
  const response = await fetch(`locales/${locale}.json`);
  const data = await response.json();

  // @ts-ignore
  document.getElementById("summaryContent").innerText = data.summary;
  // @ts-ignore
  renderContent(data);

  localStorage.setItem("locale", locale);
  currentLocale = locale;
}

// @ts-ignore
document.getElementById("localeToggle")?.addEventListener("click", () => {
  const newLocale = currentLocale === "en" ? "th" : "en";
  loadLocale(newLocale);
});

loadLocale(currentLocale);
