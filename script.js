// Language data
const translations = {
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    heroTitle: "We Build Static Websites for Small/Medium Businesses",
    heroText: "Affordable, fast, and responsive websites tailored to your needs.",
    contactButton: "Contact Us",
    servicesTitle: "Our Services",
    service1Title: "Custom Design",
    service1Text: "We create unique designs that reflect your brand.",
    service2Title: "Responsive Development",
    service2Text: "Your website will look great on all devices.",
    service3Title: "SEO Optimization",
    service3Text: "We optimize your site to rank higher on search engines.",
    pricingTitle: "Pricing",
    basicPlanTitle: "Basic Plan",
    basicPlanText: "3 pages, responsive design, fast delivery. Choose from existing styling. Colors are customizable.",
    proPlanTitle: "Pro Plan",
    proPlanText: "5 pages, multilingual support, SEO optimization. Choose from existing styling. Colors are customizable.",
    premiumPlanTitle: "Premium Plan",
    premiumPlanPrice: "To be discussed",
    premiumPlanText: "Custom design, ongoing support, and more. Tailored to your specific needs.",
    valueTitle: "Why Choose Static Websites?",
    value1Title: "Fast Loading Times",
    value1Text: "Static websites load faster, providing a better user experience.",
    value2Title: "Secure",
    value2Text: "No backend vulnerabilities, making your site more secure.",
    value3Title: "Low Hosting Costs",
    value3Text: "Static websites are cheaper to host compared to dynamic sites.",
    upsellTitle: "Add-On Services",
    upsell1Title: "Logo Design",
    upsell1Text: "We can create a professional logo for your brand.",
    upsell2Title: "Copywriting",
    upsell2Text: "Our team can write compelling content for your website.",
    upsell3Title: "Integrations & Features",
    upsell3Text: "Google integration, custom forms, analytics, and more to enhance your website.",
    aboutTitle: "About Us",
    aboutText: "We are a team of web developers passionate about helping small and medium businesses grow online.",
    contactTitle: "Contact Us",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitButton: "Submit",
    footerText: "© 2023 BuildMySite. All rights reserved."
  },
  nl: {
    home: "Home",
    services: "Diensten",
    pricing: "Prijzen",
    about: "Over Ons",
    contact: "Contact",
    heroTitle: "Wij Bouwen Statische Websites voor Kleine/Middelgrote Bedrijven",
    heroText: "Betaalbare, snelle en responsieve websites op maat gemaakt voor uw behoeften.",
    contactButton: "Neem Contact Op",
    servicesTitle: "Onze Diensten",
    service1Title: "Aangepast Ontwerp",
    service1Text: "We creëren unieke ontwerpen die uw merk weerspiegelen.",
    service2Title: "Responsieve Ontwikkeling",
    service2Text: "Uw website ziet er geweldig uit op alle apparaten.",
    service3Title: "SEO Optimalisatie",
    service3Text: "We optimaliseren uw site om hoger te scoren in zoekmachines.",
    pricingTitle: "Prijzen",
    basicPlanTitle: "Basis Plan",
    basicPlanText: "3 pagina's, responsief ontwerp, snelle levering. Kies uit bestaande stijlen. Kleuren zijn aanpasbaar.",
    proPlanTitle: "Pro Plan",
    proPlanText: "5 pagina's, meertalige ondersteuning, SEO-optimalisatie. Kies uit bestaande stijlen. Kleuren zijn aanpasbaar.",
    premiumPlanTitle: "Premium Plan",
    premiumPlanPrice: "Te bespreken",
    premiumPlanText: "Aangepast ontwerp, doorlopende ondersteuning en meer. Afgestemd op uw specifieke behoeften.",
    valueTitle: "Waarom Kiezen voor Statische Websites?",
    value1Title: "Snelle Laadtijden",
    value1Text: "Statische websites laden sneller, wat zorgt voor een betere gebruikerservaring.",
    value2Title: "Veilig",
    value2Text: "Geen backend-kwetsbaarheden, waardoor uw site veiliger is.",
    value3Title: "Lage Hostingkosten",
    value3Text: "Statische websites zijn goedkoper te hosten in vergelijking met dynamische sites.",
    upsellTitle: "Extra Diensten",
    upsell1Title: "Logo Ontwerp",
    upsell1Text: "We kunnen een professioneel logo voor uw merk ontwerpen.",
    upsell2Title: "Tekstschrijven",
    upsell2Text: "Ons team kan overtuigende content voor uw website schrijven.",
    upsell3Title: "Integraties & Functies",
    upsell3Text: "Google-integratie, aangepaste formulieren, analytics en meer om uw website te verbeteren.",
    aboutTitle: "Over Ons",
    aboutText: "Wij zijn een team van webontwikkelaars die gepassioneerd zijn door het helpen van kleine en middelgrote bedrijven om online te groeien.",
    contactTitle: "Neem Contact Op",
    nameLabel: "Naam",
    emailLabel: "E-mail",
    messageLabel: "Bericht",
    submitButton: "Verzenden",
    footerText: "© 2023 BuildMySite. Alle rechten voorbehouden."
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    pricing: "التسعير",
    about: "من نحن",
    contact: "اتصل بنا",
    heroTitle: "نحن نبني مواقع ويب ثابتة للشركات الصغيرة والمتوسطة",
    heroText: "مواقع ويب بأسعار معقولة وسريعة واستجابة مصممة خصيصًا لاحتياجاتك.",
    contactButton: "اتصل بنا",
    servicesTitle: "خدماتنا",
    service1Title: "تصميم مخصص",
    service1Text: "نحن نصنع تصاميم فريدة تعكس علامتك التجارية.",
    service2Title: "تطوير متجاوب",
    service2Text: "سيبدو موقعك رائعًا على جميع الأجهزة.",
    service3Title: "تحسين محركات البحث",
    service3Text: "نحن نُحسّن موقعك لتحقيق ترتيب أعلى في محركات البحث.",
    pricingTitle: "التسعير",
    basicPlanTitle: "الخطة الأساسية",
    basicPlanText: "3 صفحات، تصميم متجاوب، تسليم سريع. اختر من بين التصاميم الحالية. الألوان قابلة للتخصيص.",
    proPlanTitle: "الخطة الاحترافية",
    proPlanText: "5 صفحات، دعم متعدد اللغات، تحسين محركات البحث. اختر من بين التصاميم الحالية. الألوان قابلة للتخصيص.",
    premiumPlanTitle: "الخطة المميزة",
    premiumPlanPrice: "يتم مناقشتها",
    premiumPlanText: "تصميم مخصص، دعم مستمر، والمزيد. مصممة خصيصًا لاحتياجاتك.",
    valueTitle: "لماذا تختار مواقع الويب الثابتة؟",
    value1Title: "أوقات تحميل سريعة",
    value1Text: "تحميل مواقع الويب الثابتة بشكل أسرع، مما يوفر تجربة مستخدم أفضل.",
    value2Title: "آمنة",
    value2Text: "لا توجد ثغرات في الواجهة الخلفية، مما يجعل موقعك أكثر أمانًا.",
    value3Title: "تكاليف استضافة منخفضة",
    value3Text: "مواقع الويب الثابتة أرخص في الاستضافة مقارنة بالمواقع الديناميكية.",
    upsellTitle: "خدمات إضافية",
    upsell1Title: "تصميم الشعار",
    upsell1Text: "يمكننا إنشاء شعار احترافي لعلامتك التجارية.",
    upsell2Title: "كتابة المحتوى",
    upsell2Text: "يمكن لفريقنا كتابة محتوى مقنع لموقعك.",
    upsell3Title: "التكاملات والميزات",
    upsell3Text: "تكامل مع Google، نماذج مخصصة، تحليلات، والمزيد لتعزيز موقعك.",
    aboutTitle: "من نحن",
    aboutText: "نحن فريق من مطوري الويب المتحمسين لمساعدة الشركات الصغيرة والمتوسطة على النمو عبر الإنترنت.",
    contactTitle: "اتصل بنا",
    nameLabel: "الاسم",
    emailLabel: "البريد الإلكتروني",
    messageLabel: "الرسالة",
    submitButton: "إرسال",
    footerText: "© 2023 BuildMySite. جميع الحقوق محفوظة."
  }
};

// Set default language
let currentLanguage = "en";

// Function to update the language
function updateLanguage(lang) {
  currentLanguage = lang;
  document.getElementById("currentLanguage").textContent = lang === "en" ? "English" : lang === "nl" ? "Nederlands" : "العربية";
  document.querySelectorAll("[data-lang]").forEach(element => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Event listener for language dropdown
document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const lang = this.getAttribute("data-lang");
    updateLanguage(lang);
  });
});

// Initialize with default language
updateLanguage(currentLanguage);