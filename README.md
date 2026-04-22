# Playwright Engineering Showcase: Hybrid E2E Testing Framework

Bu proje, bir bilgisayar mühendisi perspektifiyle hazırlanmış, modern yazılım test otomasyonu pratiklerini (API + UI) içeren ileri düzey bir test framework'üdür. Sadece arayüz etkileşimlerini değil, sistemin veri tutarlılığını ve mimari derinliğini doğrulamayı hedefler.

## 🚀 Öne Çıkan Özellikler

- **Hybrid Testing (API + UI):** Test verilerini çalışma zamanında (runtime) API üzerinden çekerek, UI testlerini dinamik ve güncel verilerle besler.
- **Page Object Model (POM):** Kodun sürdürülebilirliği ve okunabilirliği için Nesne Yönelimli Programlama (OOP) prensiplerine uygun mimari.
- **BasePage Inheritance:** Kod tekrarını (DRY - Don't Repeat Yourself) önlemek için tüm sayfa sınıflarının türediği merkezi bir yapı.
- **Dynamic Data Generation:** `Faker.js` entegrasyonu ile her test koşumunda eşsiz (unique) test verileri üretimi.

## 🛠 Kullanılan Teknolojiler

- **[Playwright](https://playwright.dev/):** Modern web uygulamaları için hızlı ve güvenilir E2E test aracı.
- **TypeScript:** Tip güvenliği ve daha temiz bir kod yapısı için.
- **Node.js:** Çalışma ortamı.
- **Faker.js:** Dinamik veri üretimi için.

## 📁 Proje Yapısı



```text
├── pages/              # Page Object Model (POM) sınıfları
│   ├── BasePage.ts     # Ortak metodları içeren ana sınıf
│   └── ProductPage.ts  # Ürün spesifik aksiyonlar
├── tests/              # Test senaryoları
│   ├── ui/             # Kullanıcı arayüzü testleri (Hybrid dahil)
│   └── api/            # API doğrulama testleri
├── utils/              # Yardımcı araçlar ve API istemcileri
├── data/               # Statik test verileri (varsa)
└── playwright.config.ts # Playwright konfigürasyonu
