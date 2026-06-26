(function(){
  'use strict';
  var VERSION_TOKEN='infacta-bg-v2-7-handoff-sync';
  var DEFAULT_LANG='uk';
  var REAL_LANGS=['uk','en','ru'];
  var PLANNED_INTERFACE_LANGS=['uk','en','de','pl','es','it','ru','fr','cs'];
  var I18N={
    "uk": {
        "meta.title": "Перший екран · inFACTa",
        "header.levelSelectorAria": "Вибір рівня аналізу",
        "header.levelSelectAria": "Виберіть рівень аналізу",
        "header.languageSelectorAria": "Мова інтерфейсу",
        "header.languageCode": "UA",
        "index.uploadAria": "Подати документ: у статичній версії реальне завантаження ще не підключене",
        "index.eyebrow": "Розуміння замість здогадок",
        "index.heroTitle": "Подайте документ",
        "index.heroLead": "Ми допоможемо зрозуміти, що означає документ, які ризики він містить і на що варто звернути увагу. Просто, зрозуміло, без юридичного жаргону.",
        "index.ctaPrimary": "Вибрати документ",
        "index.uploadHint": "Натисніть поле, щоб побачити статус функції.",
        "index.addLabel": "Інші способи подання",
        "index.source.file": "Файл",
        "index.source.link": "Посилання",
        "index.source.photo": "Фото",
        "index.source.camera": "Камера",
        "honest.staticDemoOnly": "У цій тестовій версії реальне завантаження ще не працює. Для демонстрації використовуйте приклади документів.",
        "legal.boundaryShort": "inFACTa допомагає зрозуміти документ і наступні кроки.",
        "legal.notLawyerReplacement": "Це не юридичний висновок і не замінює консультацію юриста.",
        "index.learnMoreHtml": "Дізнатися більше <span>→</span>",
        "level.cardSwitchAria": "Змінити рівень пояснення",
        "level.cardSelectAria": "Виберіть рівень для пояснення",
        "examples.title": "Приклади документів",
        "examples.showMore": "Показати більше категорій ↓",
        "examples.metaTitle": "Приклади · inFACTa",
        "examples.intro": "Оберіть категорію документа. Далі відкриється уточнений список типів у цій гілці.",
        "examples.legalBoundary": "inFACTa пояснює документ і можливі ризики, але не є юридичним висновком і не замінює консультацію юриста.",
        "examples.categoryGridAria": "Категорії документів",
        "examples.note": "Натисніть категорію, щоб перейти до уточненого списку.",
        "examples.exampleGridAria": "Зразки документів",
        "examples.firstButton": "Перейти до першого зразка",
        "examples.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "nav.serviceAria": "Службова навігація",
        "nav.back": "← Назад",
        "nav.start": "На старт",
        "examples.category.realty": "Нерухомість",
        "examples.category.realtyDesc": "Договори, акти, витяги",
        "examples.category.work": "Робота",
        "examples.category.workDesc": "Трудові договори, контракти, накази",
        "examples.category.finance": "Фінанси",
        "examples.category.financeDesc": "Кредити, договори, страхування",
        "examples.category.family": "Сімʼя",
        "examples.category.familyDesc": "Шлюбні договори, довіреності, аліменти",
        "examples.category.transport": "Транспорт",
        "examples.category.transportDesc": "Купівля-продаж, страхування",
        "examples.category.other": "Інше",
        "examples.category.otherDesc": "Будь-які інші документи",
        "feedback.metaTitle": "Відгук · inFACTa",
        "feedback.title": "Відгук тестера",
        "feedback.intro": "Ця сторінка не надсилає дані автоматично. Скопіюйте питання, дайте відповіді й надішліть власнику тесту вручну.",
        "feedback.privacyBoundary": "Не додавайте реальні документи, email, телефон, адресу, особисті ідентифікатори або конфіденційний текст договору.",
        "feedback.legalBoundary": "inFACTa пояснює документ і можливі ризики, але не є юридичним висновком і не замінює консультацію юриста.",
        "feedback.questionsTitle": "Питання для копіювання",
        "feedback.questionsText": "1. За 5 секунд зрозуміло, що робить inFACTa?\n2. Навігація назад/на старт очевидна?\n3. На першому екрані видно всі 6 типів зразків?\n4. Напис у полі вибору документа візуально центрований?\n5. Екран займає повний viewport і підлаштовується під розмір?\n6. Чи зрозуміло, що це тестовий прототип, а не робочий сервіс?\n7. Чи зрозуміло, що inFACTa не дає юридичний вирок?\n8. Чи зрозумілий результат Level-0?\n9. Що найбільше незрозуміло?\n10. Що треба виправити першим?",
        "feedback.cta.result": "До результату",
        "feedback.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "askMore.metaTitle": "Уточнення · inFACTa",
        "askMore.title": "Уточнення",
        "askMore.intro": "Оберіть питання до результату. У цьому прототипі відповіді не генеруються.",
        "askMore.question.risk": "Що найризикованіше?",
        "askMore.question.signing": "Що спитати перед підписанням?",
        "askMore.question.termination": "Що буде при розірванні?",
        "askMore.yourQuestion": "Ваше питання",
        "askMore.input": "Напишіть уточнення…",
        "askMore.boundary": "inFACTa пояснює документ і можливі ризики, але не є юридичним висновком і не замінює консультацію юриста. Питання не надсилаються і не зберігаються — це статичний прототип.",
        "askMore.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "result.metaTitle": "Результат Level 0 · inFACTa",
        "result.mobileAria": "Готовність до рішення",
        "result.readyTitle": "Готовність до рішення",
        "result.readyBody": "Середня готовність. Перед дією потрібно уточнити 3 важливі пункти документа.",
        "result.legalBoundary": "inFACTa пояснює документ і можливі ризики, але не є юридичним висновком і не замінює консультацію юриста.",
        "result.demoLabel": "Демонстраційний приклад: договір оренди. Реальний результат залежатиме від поданого документа.",
        "result.cta.clarify": "Уточнити результат",
        "result.cta.feedback": "Залишити відгук",
        "result.card.meaning.title": "Що це означає для мене",
        "result.card.meaning.body": "Документ створює фінансові та строкові зобов’язання. До підписання треба зрозуміти оплату, депозит і розірвання.",
        "result.card.risks.title": "Головні ризики",
        "result.card.risks.body": "Нечіткі строки повернення коштів; можливі додаткові платежі; незрозумілий порядок дострокового припинення.",
        "result.card.clarify.title": "Що уточнити",
        "result.card.clarify.body": "Хто оплачує комунальні витрати? Коли повертається депозит? Як розірвати договір?",
        "result.card.next.title": "Наступні кроки",
        "result.card.next.body": "Натисніть “Уточнити результат”, щоб перейти до питань. Службові кнопки внизу лишаються тільки для навігації.",
        "result.trialNote": "Дизайн-проба: головна дія перенесена в контекст результату, службова навігація знизу послаблена.",
        "result.cta.reviewAgain": "Переглянути ще раз",
        "result.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "preview.metaTitle": "Demo-перегляд зразка · inFACTa",
        "preview.title": "Demo-перегляд зразка",
        "preview.boundaryResult": "Це не результат реального завантаження. У static demo підключено лише демонстраційний зразок договору оренди.",
        "preview.boundaryLegal": "inFACTa пояснює документ і можливі ризики, але не є юридичним висновком і не замінює консультацію юриста.",
        "preview.intro": "Перед стартом inFACTa показує, що саме визначено, і дає змогу виправити помилку до аналізу.",
        "preview.typeLabel": "Тип документа",
        "preview.typeValue": "Договір оренди",
        "preview.countryLabel": "Контекст документа (demo)",
        "preview.countryValue": "Україна — demo-приклад",
        "preview.contextDisclaimer": "Це demo-поле. Воно не визначає застосовне право.",
        "preview.levelLabel": "Рівень аналізу",
        "preview.levelValue": "Level 0 · просте пояснення",
        "preview.statusLabel": "Статус",
        "preview.statusValue": "готово до старту",
        "preview.mobileNextAria": "Перехід до demo-результату",
        "preview.cta.showResult": "Показати demo-результат",
        "preview.cta.changeSample": "Змінити зразок",
        "preview.cta.change": "Змінити",
        "preview.asideTitle": "Готовий demo-зразок",
        "preview.asideBody": "Натисніть “Показати demo-результат” або змініть дані перед переглядом результату.",
        "preview.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.metaTitle": "Функція не підключена · inFACTa",
        "notAvailable.eyebrow": "Чесний static demo",
        "notAvailable.title.action": "Дія ще не підключена",
        "notAvailable.title.upload": "Функція ще не підключена",
        "notAvailable.title.sample": "Зразок ще не підключений",
        "notAvailable.body.action": "Ця дія позначена в інтерфейсі, але в поточній static demo ще не має реалізованого результату.",
        "notAvailable.body.upload.main": "У цій static demo функція подання документа ще не працює. Ми не відкриваємо реальний upload і не збираємо документи тестерів. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.file": "У цій static demo функція завантаження файлу ще не працює. Ми не відкриваємо реальний upload і не збираємо документи тестерів. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.link": "У цій static demo функція обробки посилання ще не працює. Ми не відкриваємо реальний upload і не збираємо документи тестерів. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.photo": "У цій static demo функція завантаження фото ще не працює. Ми не відкриваємо реальний upload і не збираємо документи тестерів. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.camera": "У цій static demo функція камери ще не працює. Ми не відкриваємо реальний upload і не збираємо документи тестерів. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.sample": "Зразок «{name}» уже є в структурі категорій, але в цій static demo для нього ще немає окремого результату. Щоб не показувати неправдивий результат, ми не перекидаємо його на приклад оренди.",
        "notAvailable.sampleFallback": "обраний документ",
        "notAvailable.noticeHtml": "<strong>Жодного обману в діях.</strong><br>Якщо дія не реалізована, inFACTa прямо показує її статус, а не підміняє результатом іншого документа.",
        "notAvailable.cta.examples": "Перейти до прикладів",
        "notAvailable.cta.demoLease": "Відкрити demo оренди",
        "notAvailable.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.navAria": "Службова навігація",
        "notAvailable.navBack": "← Назад",
        "notAvailable.navStart": "На старт"
    },
    "en": {
        "meta.title": "First screen · inFACTa",
        "header.levelSelectorAria": "Analysis level selection",
        "header.levelSelectAria": "Choose analysis level",
        "header.languageSelectorAria": "Interface language",
        "header.languageCode": "EN",
        "index.uploadAria": "Submit a document: real upload is not connected in this static version",
        "index.eyebrow": "Understanding instead of guesswork",
        "index.heroTitle": "Submit a document",
        "index.heroLead": "We help you understand what a document means, what risks it contains, and what to pay attention to. Simple and clear, without legal jargon.",
        "index.ctaPrimary": "Choose document",
        "index.uploadHint": "Click the field to see the feature status.",
        "index.addLabel": "Other submission methods",
        "index.source.file": "File",
        "index.source.link": "Link",
        "index.source.photo": "Photo",
        "index.source.camera": "Camera",
        "honest.staticDemoOnly": "In this test version, real upload is not active yet. Use document examples for the demo.",
        "legal.boundaryShort": "inFACTa helps you understand a document and the next steps.",
        "legal.notLawyerReplacement": "This is not a legal conclusion and does not replace a lawyer consultation.",
        "index.learnMoreHtml": "Learn more <span>→</span>",
        "level.cardSwitchAria": "Change explanation level",
        "level.cardSelectAria": "Choose explanation level",
        "examples.title": "Document examples",
        "examples.showMore": "Show more categories ↓",
        "examples.metaTitle": "Examples · inFACTa",
        "examples.intro": "Choose a document category. Then a more specific list of document types in this branch will open.",
        "examples.legalBoundary": "inFACTa explains a document and possible risks, but it is not a legal conclusion and does not replace a lawyer consultation.",
        "examples.categoryGridAria": "Document categories",
        "examples.note": "Select a category to open the more specific list.",
        "examples.exampleGridAria": "Document samples",
        "examples.firstButton": "Go to the first sample",
        "examples.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "nav.serviceAria": "Service navigation",
        "nav.back": "← Back",
        "nav.start": "Start",
        "examples.category.realty": "Real estate",
        "examples.category.realtyDesc": "Contracts, acts, extracts",
        "examples.category.work": "Work",
        "examples.category.workDesc": "Employment contracts, agreements, orders",
        "examples.category.finance": "Finance",
        "examples.category.financeDesc": "Loans, contracts, insurance",
        "examples.category.family": "Family",
        "examples.category.familyDesc": "Marriage agreements, powers of attorney, alimony",
        "examples.category.transport": "Transport",
        "examples.category.transportDesc": "Sale and purchase, insurance",
        "examples.category.other": "Other",
        "examples.category.otherDesc": "Any other documents",
        "feedback.metaTitle": "Feedback · inFACTa",
        "feedback.title": "Tester feedback",
        "feedback.intro": "This page does not send data automatically. Copy the questions, answer them, and send them to the test owner manually.",
        "feedback.privacyBoundary": "Do not add real documents, email, phone number, address, personal identifiers, or confidential contract text.",
        "feedback.legalBoundary": "inFACTa explains the document and possible risks, but it is not a legal conclusion and does not replace a lawyer consultation.",
        "feedback.questionsTitle": "Questions to copy",
        "feedback.questionsText": "1. Is it clear within 5 seconds what inFACTa does?\n2. Is Back / Start navigation obvious?\n3. Are all 6 sample types visible on the first screen?\n4. Is the document selection field text visually centered?\n5. Does the screen fill the viewport and adapt to the screen size?\n6. Is it clear that this is a test prototype, not a working service?\n7. Is it clear that inFACTa does not give a legal verdict?\n8. Is the Level 0 result understandable?\n9. What is most unclear?\n10. What should be fixed first?",
        "feedback.cta.result": "To result",
        "feedback.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "askMore.metaTitle": "Clarification · inFACTa",
        "askMore.title": "Clarification",
        "askMore.intro": "Choose a question about the result. This prototype does not generate answers.",
        "askMore.question.risk": "What is most risky?",
        "askMore.question.signing": "What should I ask before signing?",
        "askMore.question.termination": "What happens on termination?",
        "askMore.yourQuestion": "Your question",
        "askMore.input": "Write a clarification…",
        "askMore.boundary": "inFACTa explains the document and possible risks, but it is not a legal conclusion and does not replace a lawyer consultation. Questions are not sent or stored — this is a static prototype.",
        "askMore.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "result.metaTitle": "Level 0 result · inFACTa",
        "result.mobileAria": "Decision readiness",
        "result.readyTitle": "Decision readiness",
        "result.readyBody": "Medium readiness. Before taking action, clarify 3 important points in the document.",
        "result.legalBoundary": "inFACTa explains the document and possible risks, but it is not a legal conclusion and does not replace a lawyer consultation.",
        "result.demoLabel": "Demo example: lease agreement. A real result would depend on the submitted document.",
        "result.cta.clarify": "Clarify result",
        "result.cta.feedback": "Leave feedback",
        "result.card.meaning.title": "What this means for me",
        "result.card.meaning.body": "The document creates financial and timing obligations. Before signing, understand payment, deposit, and termination.",
        "result.card.risks.title": "Main risks",
        "result.card.risks.body": "Unclear deadlines for returning funds; possible additional payments; unclear early termination procedure.",
        "result.card.clarify.title": "What to clarify",
        "result.card.clarify.body": "Who pays utilities? When is the deposit returned? How can the agreement be terminated?",
        "result.card.next.title": "Next steps",
        "result.card.next.body": "Press “Clarify result” to go to questions. The bottom service buttons remain only for navigation.",
        "result.trialNote": "Design trial: the main action was moved into the result context, while bottom service navigation is de-emphasized.",
        "result.cta.reviewAgain": "Review again",
        "result.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "preview.metaTitle": "Demo sample preview · inFACTa",
        "preview.title": "Demo sample preview",
        "preview.boundaryResult": "This is not a result of a real upload. In the static demo, only the demo lease contract sample is connected.",
        "preview.boundaryLegal": "inFACTa explains the document and possible risks, but it is not a legal conclusion and does not replace a lawyer consultation.",
        "preview.intro": "Before starting, inFACTa shows what was identified and lets you correct a mistake before analysis.",
        "preview.typeLabel": "Document type",
        "preview.typeValue": "Lease agreement",
        "preview.countryLabel": "Document context (demo)",
        "preview.countryValue": "Ukraine — demo example",
        "preview.contextDisclaimer": "This is a demo field. It does not determine which laws apply.",
        "preview.levelLabel": "Analysis level",
        "preview.levelValue": "Level 0 · simple explanation",
        "preview.statusLabel": "Status",
        "preview.statusValue": "ready to start",
        "preview.mobileNextAria": "Go to the demo result",
        "preview.cta.showResult": "Show demo result",
        "preview.cta.changeSample": "Change sample",
        "preview.cta.change": "Change",
        "preview.asideTitle": "Ready demo sample",
        "preview.asideBody": "Press “Show demo result” or change the data before viewing the result.",
        "preview.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.metaTitle": "Feature not connected · inFACTa",
        "notAvailable.eyebrow": "Honest static demo",
        "notAvailable.title.action": "Action is not connected yet",
        "notAvailable.title.upload": "Feature is not connected yet",
        "notAvailable.title.sample": "Sample is not connected yet",
        "notAvailable.body.action": "This action is shown in the interface, but this static demo does not have an implemented result for it yet.",
        "notAvailable.body.upload.main": "In this static demo, document submission is not active yet. We do not open a real upload flow and do not collect tester documents. Use document examples to test the scenario.",
        "notAvailable.body.upload.file": "In this static demo, file upload is not active yet. We do not open a real upload flow and do not collect tester documents. Use document examples to test the scenario.",
        "notAvailable.body.upload.link": "In this static demo, link processing is not active yet. We do not open a real upload flow and do not collect tester documents. Use document examples to test the scenario.",
        "notAvailable.body.upload.photo": "In this static demo, photo upload is not active yet. We do not open a real upload flow and do not collect tester documents. Use document examples to test the scenario.",
        "notAvailable.body.upload.camera": "In this static demo, camera input is not active yet. We do not open a real upload flow and do not collect tester documents. Use document examples to test the scenario.",
        "notAvailable.body.sample": "The sample “{name}” is already present in the category structure, but this static demo does not have a separate result for it yet. To avoid showing a misleading result, we do not redirect it to the lease demo.",
        "notAvailable.sampleFallback": "selected document",
        "notAvailable.noticeHtml": "<strong>No deception in actions.</strong><br>If an action is not implemented, inFACTa shows its status directly instead of replacing it with another document result.",
        "notAvailable.cta.examples": "Go to examples",
        "notAvailable.cta.demoLease": "Open lease demo",
        "notAvailable.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.navAria": "Service navigation",
        "notAvailable.navBack": "← Back",
        "notAvailable.navStart": "Start"
    },
    "ru": {
        "meta.title": "Первый экран · inFACTa",
        "header.levelSelectorAria": "Выбор уровня анализа",
        "header.levelSelectAria": "Выберите уровень анализа",
        "header.languageSelectorAria": "Язык интерфейса",
        "header.languageCode": "RU",
        "index.uploadAria": "Подать документ: в статической версии реальная загрузка ещё не подключена",
        "index.eyebrow": "Понимание вместо догадок",
        "index.heroTitle": "Подайте документ",
        "index.heroLead": "Мы поможем понять, что означает документ, какие риски он содержит и на что стоит обратить внимание. Просто, понятно, без юридического жаргона.",
        "index.ctaPrimary": "Выбрать документ",
        "index.uploadHint": "Нажмите поле, чтобы увидеть статус функции.",
        "index.addLabel": "Другие способы подачи",
        "index.source.file": "Файл",
        "index.source.link": "Ссылка",
        "index.source.photo": "Фото",
        "index.source.camera": "Камера",
        "honest.staticDemoOnly": "В этой тестовой версии реальная загрузка ещё не работает. Для демонстрации используйте примеры документов.",
        "legal.boundaryShort": "inFACTa помогает понять документ и следующие шаги.",
        "legal.notLawyerReplacement": "Это не юридическое заключение и не заменяет консультацию юриста.",
        "index.learnMoreHtml": "Узнать больше <span>→</span>",
        "level.cardSwitchAria": "Изменить уровень объяснения",
        "level.cardSelectAria": "Выберите уровень для объяснения",
        "examples.title": "Примеры документов",
        "examples.showMore": "Показать больше категорий ↓",
        "examples.metaTitle": "Примеры · inFACTa",
        "examples.intro": "Выберите категорию документа. Далее откроется уточнённый список типов в этой ветке.",
        "examples.legalBoundary": "inFACTa объясняет документ и возможные риски, но не является юридическим заключением и не заменяет консультацию юриста.",
        "examples.categoryGridAria": "Категории документов",
        "examples.note": "Нажмите категорию, чтобы перейти к уточнённому списку.",
        "examples.exampleGridAria": "Образцы документов",
        "examples.firstButton": "Перейти к первому образцу",
        "examples.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "nav.serviceAria": "Служебная навигация",
        "nav.back": "← Назад",
        "nav.start": "На старт",
        "examples.category.realty": "Недвижимость",
        "examples.category.realtyDesc": "Договоры, акты, выписки",
        "examples.category.work": "Работа",
        "examples.category.workDesc": "Трудовые договоры, контракты, приказы",
        "examples.category.finance": "Финансы",
        "examples.category.financeDesc": "Кредиты, договоры, страхование",
        "examples.category.family": "Семья",
        "examples.category.familyDesc": "Брачные договоры, доверенности, алименты",
        "examples.category.transport": "Транспорт",
        "examples.category.transportDesc": "Купля-продажа, страхование",
        "examples.category.other": "Другое",
        "examples.category.otherDesc": "Любые другие документы",
        "feedback.metaTitle": "Отзыв · inFACTa",
        "feedback.title": "Отзыв тестера",
        "feedback.intro": "Эта страница не отправляет данные автоматически. Скопируйте вопросы, дайте ответы и отправьте владельцу теста вручную.",
        "feedback.privacyBoundary": "Не добавляйте реальные документы, email, телефон, адрес, личные идентификаторы или конфиденциальный текст договора.",
        "feedback.legalBoundary": "inFACTa объясняет документ и возможные риски, но не является юридическим заключением и не заменяет консультацию юриста.",
        "feedback.questionsTitle": "Вопросы для копирования",
        "feedback.questionsText": "1. За 5 секунд понятно, что делает inFACTa?\n2. Навигация назад/на старт очевидна?\n3. На первом экране видны все 6 типов образцов?\n4. Надпись в поле выбора документа визуально центрирована?\n5. Экран занимает весь viewport и подстраивается под размер?\n6. Понятно ли, что это тестовый прототип, а не рабочий сервис?\n7. Понятно ли, что inFACTa не даёт юридический вердикт?\n8. Понятен ли результат Level 0?\n9. Что больше всего непонятно?\n10. Что нужно исправить первым?",
        "feedback.cta.result": "К результату",
        "feedback.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "askMore.metaTitle": "Уточнение · inFACTa",
        "askMore.title": "Уточнение",
        "askMore.intro": "Выберите вопрос к результату. В этом прототипе ответы не генерируются.",
        "askMore.question.risk": "Что самое рискованное?",
        "askMore.question.signing": "Что спросить перед подписанием?",
        "askMore.question.termination": "Что будет при расторжении?",
        "askMore.yourQuestion": "Ваш вопрос",
        "askMore.input": "Напишите уточнение…",
        "askMore.boundary": "inFACTa объясняет документ и возможные риски, но не является юридическим заключением и не заменяет консультацию юриста. Вопросы не отправляются и не сохраняются — это статический прототип.",
        "askMore.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "result.metaTitle": "Результат Level 0 · inFACTa",
        "result.mobileAria": "Готовность к решению",
        "result.readyTitle": "Готовность к решению",
        "result.readyBody": "Средняя готовность. Перед действием нужно уточнить 3 важных пункта документа.",
        "result.legalBoundary": "inFACTa объясняет документ и возможные риски, но не является юридическим заключением и не заменяет консультацию юриста.",
        "result.demoLabel": "Демонстрационный пример: договор аренды. Реальный результат будет зависеть от поданного документа.",
        "result.cta.clarify": "Уточнить результат",
        "result.cta.feedback": "Оставить отзыв",
        "result.card.meaning.title": "Что это означает для меня",
        "result.card.meaning.body": "Документ создаёт финансовые и сроковые обязательства. До подписания нужно понять оплату, депозит и расторжение.",
        "result.card.risks.title": "Главные риски",
        "result.card.risks.body": "Нечёткие сроки возврата средств; возможные дополнительные платежи; непонятный порядок досрочного прекращения.",
        "result.card.clarify.title": "Что уточнить",
        "result.card.clarify.body": "Кто оплачивает коммунальные расходы? Когда возвращается депозит? Как расторгнуть договор?",
        "result.card.next.title": "Следующие шаги",
        "result.card.next.body": "Нажмите «Уточнить результат», чтобы перейти к вопросам. Служебные кнопки внизу остаются только для навигации.",
        "result.trialNote": "Дизайн-проба: главное действие перенесено в контекст результата, служебная навигация снизу ослаблена.",
        "result.cta.reviewAgain": "Посмотреть ещё раз",
        "result.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "preview.metaTitle": "Demo-просмотр образца · inFACTa",
        "preview.title": "Demo-просмотр образца",
        "preview.boundaryResult": "Это не результат реальной загрузки. В static demo подключён только демонстрационный образец договора аренды.",
        "preview.boundaryLegal": "inFACTa объясняет документ и возможные риски, но не является юридическим заключением и не заменяет консультацию юриста.",
        "preview.intro": "Перед стартом inFACTa показывает, что именно определено, и даёт возможность исправить ошибку до анализа.",
        "preview.typeLabel": "Тип документа",
        "preview.typeValue": "Договор аренды",
        "preview.countryLabel": "Контекст документа (demo)",
        "preview.countryValue": "Украина — demo-пример",
        "preview.contextDisclaimer": "Это demo-поле. Оно не определяет применимое право.",
        "preview.levelLabel": "Уровень анализа",
        "preview.levelValue": "Level 0 · простое объяснение",
        "preview.statusLabel": "Статус",
        "preview.statusValue": "готово к старту",
        "preview.mobileNextAria": "Переход к demo-результату",
        "preview.cta.showResult": "Показать demo-результат",
        "preview.cta.changeSample": "Изменить образец",
        "preview.cta.change": "Изменить",
        "preview.asideTitle": "Готовый demo-образец",
        "preview.asideBody": "Нажмите «Показать demo-результат» или измените данные перед просмотром результата.",
        "preview.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.metaTitle": "Функция не подключена · inFACTa",
        "notAvailable.eyebrow": "Честный static demo",
        "notAvailable.title.action": "Действие ещё не подключено",
        "notAvailable.title.upload": "Функция ещё не подключена",
        "notAvailable.title.sample": "Образец ещё не подключён",
        "notAvailable.body.action": "Это действие обозначено в интерфейсе, но в текущей static demo для него ещё нет реализованного результата.",
        "notAvailable.body.upload.main": "В этой static demo функция подачи документа ещё не работает. Мы не открываем реальный upload и не собираем документы тестеров. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.file": "В этой static demo функция загрузки файла ещё не работает. Мы не открываем реальный upload и не собираем документы тестеров. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.link": "В этой static demo функция обработки ссылки ещё не работает. Мы не открываем реальный upload и не собираем документы тестеров. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.photo": "В этой static demo функция загрузки фото ещё не работает. Мы не открываем реальный upload и не собираем документы тестеров. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.camera": "В этой static demo функция камеры ещё не работает. Мы не открываем реальный upload и не собираем документы тестеров. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.sample": "Образец «{name}» уже есть в структуре категорий, но в этой static demo для него ещё нет отдельного результата. Чтобы не показывать недостоверный результат, мы не перенаправляем его на пример аренды.",
        "notAvailable.sampleFallback": "выбранный документ",
        "notAvailable.noticeHtml": "<strong>Никакого обмана в действиях.</strong><br>Если действие не реализовано, inFACTa прямо показывает её статус, а не подменяет результатом другого документа.",
        "notAvailable.cta.examples": "Перейти к примерам",
        "notAvailable.cta.demoLease": "Открыть demo аренды",
        "notAvailable.meta": "STATIC v2.7 · honest action boundary · no runtime / no upload",
        "notAvailable.navAria": "Служебная навигация",
        "notAvailable.navBack": "← Назад",
        "notAvailable.navStart": "На старт"
    }
};

  var LEVEL_UK={
    '0':{title:'Що дає Level 0',state:'active',items:[['Пояснення простими словами','Розшифровує зміст документа без складних термінів.'],['Виявлення ризиків','Показує можливі ризики й приховані слабкі місця.'],['Що уточнити','Підказує, на що звернути увагу і які питання поставити.']],note:'<b>Level 0</b> — доступний демо-рівень: просте пояснення, ключові ризики і питання для уточнення.'},
    '1':{title:'Що дає Level 1',state:'future',items:[['Структурований розбір','Має розкладати документ на сторони, предмет, строки, суми й обов’язки.'],['Ключові блоки','Має показувати головні частини документа у зрозумілій структурі.'],['Підготовка до наступного рівня','Має створювати основу для глибшого аналізу ризиків.']],note:'<b>Level 1</b> — майбутній рівень для структурованого розбору документа. У демо не активний.'},
    '2':{title:'Що дає Level 2',state:'future',items:[['Ризики й штрафи','Має знаходити ризикові умови, штрафи, дедлайни та односторонні зобов’язання.'],['Що може піти не так','Має пояснювати практичні наслідки окремих пунктів.'],['Пріоритети перевірки','Має показувати, що перевірити в першу чергу.']],note:'<b>Level 2</b> — майбутній рівень для ризиків, строків, штрафів і зобов’язань. У демо не активний.'},
    '3':{title:'Що дає Level 3',state:'future',items:[['Поглиблений аналіз','Має ставити уточнювальні питання й враховувати відповіді користувача.'],['Контекст ситуації','Має пов’язувати документ із реальною метою користувача.'],['Підготовка рішень','Має допомагати зрозуміти, які дії можливі далі.']],note:'<b>Level 3</b> — майбутній рівень для поглиблення аналізу через уточнення контексту. У демо не активний.'},
    '4':{title:'Що дає Level 4',state:'future',items:[['Сценарії','Має порівнювати кілька варіантів дій.'],['Підготовка до консультації','Має формувати матеріал, з яким легше йти до профільного спеціаліста.'],['Порівняння наслідків','Має показувати плюси, мінуси й ризики кожного сценарію.']],note:'<b>Level 4</b> — майбутній рівень для сценаріїв, порівнянь і підготовки до консультації. У демо не активний.'},
    '5':{title:'Що дає Level 5',state:'future',items:[['Повний супровід кейсу','Має працювати не тільки з одним документом, а з усім контекстом ситуації.'],['Пакет документів','Має пов’язувати кілька документів, подій, строків і рішень між собою.'],['Довгий контекст','Має допомагати вести складний кейс послідовно, з історією рішень і наступними кроками.']],note:'<b>Level 5</b> — майбутній рівень повного контекстного супроводу документа або кейсу. У демо не активний.'}
  };

  var LEVEL_EN={
    '0':{title:'What Level 0 gives you',state:'active',items:[['Explains in simple words','Decodes the document content without complex terms.'],['Highlights risks','Shows possible risks and hidden pitfalls.'],['Suggests what to clarify','Points out what to pay attention to and what questions to ask.']],note:'<b>Level 0</b> — the first step to understanding a document: simple explanation, key risks, and questions to clarify.'},
    '1':{title:'What Level 1 gives you',state:'future',items:[['Legal consequences','Should explain what legal consequences a document may create.'],['Restrictions and obligations','Should show what may change for a person after signing or performing a document.'],['Questions for a lawyer','Should form a list of questions worth checking with a specialist.']],note:'<b>Level 1</b> — a planned level for understanding legal consequences of a document. Not active in this demo.'},
    '2':{title:'What Level 2 gives you',state:'future',items:[['What to do next','Should turn document explanations into a practical next-step plan.'],['Priorities','Should help identify what to do first and what can wait.'],['Preparation','Should suggest what data, documents, or questions to gather.']],note:'<b>Level 2</b> — a planned level for moving from understanding a document to action. Not active in this demo.'},
    '3':{title:'What Level 3 gives you',state:'future',items:[['Alternatives','Should show different behavior or decision options.'],['Scenarios','Should explain how the situation may develop depending on the choice.'],['Comparison','Should help compare risks, costs, and benefits of each scenario.']],note:'<b>Level 3</b> — a planned level for comparing alternatives and scenarios. Not active in this demo.'},
    '4':{title:'What Level 4 gives you',state:'future',items:[['Scenarios','Should compare several possible decisions or behaviors.'],['Preparation for consultation','Should prepare material that is easier to discuss with a specialist.'],['Consequences','Should show practical pros, cons, and risks of each scenario.']],note:'<b>Level 4</b> — a planned level for scenarios, comparisons, and consultation preparation. Not active in this demo.'},
    '5':{title:'What Level 5 gives you',state:'future',items:[['Full case support','Should work not only with one document, but with the whole situation context.'],['Document set','Should connect several documents, events, deadlines, and decisions.'],['Long context','Should help maintain a complex case step by step, with history and next actions.']],note:'<b>Level 5</b> — a future level for full contextual support of a document or case. Not active in this demo.'}
  };

  var LEVEL_RU={
    "0": {
        "title": "Что даёт Level 0",
        "state": "active",
        "items": [
            [
                "Объясняем простыми словами",
                "Расшифровываем смысл документа без сложных терминов."
            ],
            [
                "Выявляем риски",
                "Показываем возможные риски и подводные камни."
            ],
            [
                "Подсказываем, что уточнить",
                "Указываем, на что обратить внимание и какие вопросы задать."
            ]
        ],
        "note": "<b>Level 0</b> — первый шаг к пониманию документа: простое объяснение, главные риски и вопросы для уточнения."
    },
    "1": {
        "title": "Что даёт Level 1",
        "state": "future",
        "items": [
            [
                "Юридические последствия",
                "Должен объяснять, какие правовые последствия может создавать документ."
            ],
            [
                "Ограничения и обязательства",
                "Должен показывать, что может измениться для человека после подписания или выполнения документа."
            ],
            [
                "Вопросы к юристу",
                "Должен формировать список вопросов, которые стоит проверить со специалистом."
            ]
        ],
        "note": "<b>Level 1</b> — будущий уровень для понимания юридических последствий документа. В демо не активен."
    },
    "2": {
        "title": "Что даёт Level 2",
        "state": "future",
        "items": [
            [
                "Что делать дальше",
                "Должен превращать объяснение документа в практический план следующих шагов."
            ],
            [
                "Приоритеты",
                "Должен помогать понять, что сделать первым, а что может подождать."
            ],
            [
                "Подготовка",
                "Должен подсказывать, какие данные, документы или вопросы стоит собрать."
            ]
        ],
        "note": "<b>Level 2</b> — будущий уровень для перехода от понимания документа к действию. В демо не активен."
    },
    "3": {
        "title": "Что даёт Level 3",
        "state": "future",
        "items": [
            [
                "Альтернативы",
                "Должен показывать разные варианты поведения или решения."
            ],
            [
                "Сценарии",
                "Должен объяснять, как может развиваться ситуация в зависимости от выбора."
            ],
            [
                "Сравнение",
                "Должен помогать видеть риски, затраты и преимущества каждого сценария."
            ]
        ],
        "note": "<b>Level 3</b> — будущий уровень для сравнения альтернатив и сценариев. В демо не активен."
    },
    "4": {
        "title": "Что даёт Level 4",
        "state": "future",
        "items": [
            ["Сценарии", "Должен сравнивать несколько вариантов действий."],
            ["Подготовка к консультации", "Должен готовить материал, с которым проще идти к специалисту."],
            ["Сравнение последствий", "Должен показывать плюсы, минусы и риски каждого сценария."]
        ],
        "note": "<b>Level 4</b> — будущий уровень для сценариев, сравнения и подготовки к консультации."
    },
    "5": {
        "title": "Что даёт Level 5",
        "state": "future",
        "items": [
            ["Полное сопровождение кейса", "Должен работать не только с одним документом, а со всем контекстом ситуации."],
            ["Пакет документов", "Должен связывать несколько документов, событий, сроков и решений."],
            ["Длинный контекст", "Должен помогать вести сложный кейс последовательно, с историей решений и следующими шагами."]
        ],
        "note": "<b>Level 5</b> — будущий уровень полного контекстного сопровождения документа или кейса. В demo не активен."
    }
};

  var LEVEL_BY_LANG={uk:LEVEL_UK,en:LEVEL_EN,ru:LEVEL_RU};

  var LEVEL_OPTION_LABELS={
    uk:{'0':'Level 0 — доступний у демо · просте пояснення','1':'Level 1 — майбутній · структурований розбір','2':'Level 2 — майбутній · ризики, строки, штрафи','3':'Level 3 — майбутній · поглиблений аналіз','4':'Level 4 — майбутній · сценарії та підготовка','5':'Level 5 — майбутній · повний супровід кейсу'},
    en:{'0':'Level 0 — available in demo · simple explanation','1':'Level 1 — planned · structured breakdown','2':'Level 2 — planned · risks, deadlines, penalties','3':'Level 3 — planned · deeper analysis','4':'Level 4 — planned · scenarios and preparation','5':'Level 5 — planned · full case support'},
    ru:{'0':'Level 0 — доступен в демо · простое объяснение','1':'Level 1 — будущий · структурированный разбор','2':'Level 2 — будущий · риски, сроки, штрафы','3':'Level 3 — будущий · углублённый анализ','4':'Level 4 — будущий · сценарии и подготовка','5':'Level 5 — будущий · сопровождение кейса'}
  };

  var LEVEL_STATUS_LABELS={
    uk:{active:'Доступний у демо',future:'Майбутній рівень'},
    en:{active:'Available in demo',future:'Planned level'},
    ru:{active:'Доступен в демо',future:'Будущий уровень'}
  };

  var LANGUAGE_FLAGS={uk:'🇺🇦',en:'🇬🇧',ru:'🇷🇺'};


  function getRequestedLang(search){
    var params=new URLSearchParams(typeof search==='string' ? search : window.location.search);
    var raw=params.get('lang');
    return (raw || DEFAULT_LANG).toLowerCase();
  }

  function resolveLang(raw){
    var candidate=(raw || DEFAULT_LANG).toLowerCase();
    return I18N[candidate] ? candidate : DEFAULT_LANG;
  }

  function currentLang(){
    return resolveLang(getRequestedLang());
  }

  function t(key, lang){
    var resolved=resolveLang(lang || currentLang());
    var value=(I18N[resolved] && I18N[resolved][key]) || I18N[DEFAULT_LANG][key] || '';
    return value || (I18N[DEFAULT_LANG][key] || '');
  }

  function applyLevel(resolvedLang){
    var levelData=LEVEL_BY_LANG[resolvedLang];
    if(!levelData) return;
    var select=document.getElementById('cardLevelSelect') || document.getElementById('levelSelect');
    var key=select ? String(select.value || '0') : '0';
    var data=levelData[key] || levelData['0'];
    var title=document.getElementById('levelTitle');
    var list=document.getElementById('levelList');
    var note=document.getElementById('levelNote');
    var badge=document.getElementById('levelStatusBadge');
    var card=document.querySelector('.level-card');
    var state=data.state || 'future';
    if(title) title.textContent=data.title;
    if(card) card.setAttribute('data-level-state', state);
    if(badge){
      var labels=LEVEL_STATUS_LABELS[resolvedLang] || LEVEL_STATUS_LABELS[DEFAULT_LANG];
      badge.textContent=labels[state] || labels.future;
      badge.setAttribute('data-state', state);
      badge.setAttribute('aria-label', badge.textContent);
    }
    if(list) list.innerHTML=data.items.map(function(i){return '<div class="level-item"><div><strong>'+i[0]+'</strong><p>'+i[1]+'</p></div></div>';}).join('');
    if(note) note.innerHTML=data.note;
  }



  function syncLevelSelectorOptions(resolvedLang){
    var labels=LEVEL_OPTION_LABELS[resolvedLang] || LEVEL_OPTION_LABELS[DEFAULT_LANG] || {};
    document.querySelectorAll('#levelSelect,#cardLevelSelect').forEach(function(select){
      Array.prototype.forEach.call(select.options || [], function(option){
        var key=String(option.value || '0');
        if(labels[key]) option.textContent=labels[key];
      });
    });
  }

  function applyI18n(root, lang){
    var resolved=resolveLang(lang || currentLang());
    var scope=root || document;
    document.documentElement.lang=resolved;
    document.documentElement.setAttribute('data-i18n-lang', resolved);
    var titleKey=(document.documentElement && document.documentElement.getAttribute('data-i18n-title-key')) || (document.body && document.body.getAttribute('data-i18n-title-key')) || 'meta.title';
    document.title=t(titleKey, resolved);
    scope.querySelectorAll('[data-i18n]').forEach(function(el){
      var value=t(el.getAttribute('data-i18n'), resolved);
      if(value) el.textContent=value;
    });
    scope.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var value=t(el.getAttribute('data-i18n-html'), resolved);
      if(value) el.innerHTML=value;
    });
    scope.querySelectorAll('[data-i18n-attr-aria-label]').forEach(function(el){
      var value=t(el.getAttribute('data-i18n-attr-aria-label'), resolved);
      if(value) el.setAttribute('aria-label', value);
    });
    scope.querySelectorAll('[data-i18n-attr-title]').forEach(function(el){
      var value=t(el.getAttribute('data-i18n-attr-title'), resolved);
      if(value) el.setAttribute('title', value);
    });
    syncLevelSelectorOptions(resolved);
    applyLevel(resolved);
    return resolved;
  }

  function getInternalBaseOrigin(){
    if(window.location && window.location.origin && window.location.origin !== 'null') return window.location.origin;
    return 'https://infacta.local';
  }

  function preserveLangAndVersionLinks(root, lang){
    var resolved=resolveLang(lang || currentLang());
    var scope=root || document;
    var baseOrigin=getInternalBaseOrigin();
    scope.querySelectorAll('a[href]').forEach(function(a){
      var raw=a.getAttribute('href');
      if(!raw || raw.indexOf('mailto:')===0 || raw.indexOf('tel:')===0 || raw.indexOf('javascript:')===0) return;
      if(a.hasAttribute('data-lang-switch')) return;
      try{
        var url=new URL(raw, baseOrigin);
        if(url.origin !== baseOrigin) return;
        url.searchParams.set('lang', resolved);
        url.searchParams.set('v', VERSION_TOKEN);
        a.setAttribute('href', url.pathname + url.search + url.hash);
      }catch(e){}
    });
    return resolved;
  }

  function syncLanguageSwitcher(root, lang){
    var resolved=resolveLang(lang || currentLang());
    var scope=root || document;
    var baseOrigin=getInternalBaseOrigin();
    var currentPath=(window.location && window.location.pathname) ? window.location.pathname : '/';
    var currentSearch=(window.location && window.location.search) ? window.location.search : '';
    scope.querySelectorAll('[data-infacta-language-switcher] [data-lang-switch]').forEach(function(a){
      var requested=(a.getAttribute('data-lang-switch') || DEFAULT_LANG).toLowerCase();
      var targetLang=resolveLang(requested);
      try{
        var url=new URL(currentPath + currentSearch, baseOrigin);
        url.searchParams.set('lang', targetLang);
        url.searchParams.set('v', VERSION_TOKEN);
        a.setAttribute('href', url.pathname + url.search + url.hash);
      }catch(e){
        a.setAttribute('href', '?lang=' + encodeURIComponent(targetLang));
      }
      if(targetLang===resolved){
        a.setAttribute('aria-current','true');
        a.setAttribute('data-active','true');
      }else{
        a.removeAttribute('aria-current');
        a.removeAttribute('data-active');
      }
    });
    scope.querySelectorAll('[data-infacta-language-select]').forEach(function(select){
      select.value=resolved;
      select.setAttribute('aria-label', t('header.languageSelectorAria', resolved));
      select.setAttribute('data-active-lang', resolved);
    });
    scope.querySelectorAll('[data-language-current-flag]').forEach(function(flag){
      flag.textContent=LANGUAGE_FLAGS[resolved] || LANGUAGE_FLAGS[DEFAULT_LANG] || '';
      flag.setAttribute('data-active-lang', resolved);
    });
    return resolved;
  }

  function navigateToLanguage(target){
    var targetLang=resolveLang(target || DEFAULT_LANG);
    var baseOrigin=getInternalBaseOrigin();
    var currentPath=(window.location && window.location.pathname) ? window.location.pathname : '/';
    var currentSearch=(window.location && window.location.search) ? window.location.search : '';
    try{
      var url=new URL(currentPath + currentSearch, baseOrigin);
      url.searchParams.set('lang', targetLang);
      url.searchParams.set('v', VERSION_TOKEN);
      window.location.assign(url.pathname + url.search + url.hash);
    }catch(e){
      window.location.assign('?lang=' + encodeURIComponent(targetLang));
    }
  }

  function init(root){
    var resolved=currentLang();
    applyI18n(root || document, resolved);
    preserveLangAndVersionLinks(root || document, resolved);
    syncLanguageSwitcher(root || document, resolved);
    document.querySelectorAll('[data-infacta-language-select]').forEach(function(select){
      if(select.getAttribute('data-infacta-language-bound')==='1') return;
      select.setAttribute('data-infacta-language-bound','1');
      select.addEventListener('change', function(){ navigateToLanguage(select.value); });
    });
    document.querySelectorAll('#levelSelect,#cardLevelSelect').forEach(function(select){
      if(select.getAttribute('data-infacta-level-bound')==='1') return;
      select.setAttribute('data-infacta-level-bound','1');
      select.addEventListener('change', function(){ window.setTimeout(function(){ applyLevel(currentLang()); }, 0); });
    });
    return resolved;
  }

  window.InfactaI18n={
    VERSION_TOKEN:VERSION_TOKEN,
    DEFAULT_LANG:DEFAULT_LANG,
    REAL_LANGS:REAL_LANGS.slice(),
    PLANNED_INTERFACE_LANGS:PLANNED_INTERFACE_LANGS.slice(),
    getRequestedLang:getRequestedLang,
    resolveLang:resolveLang,
    t:t,
    applyI18n:applyI18n,
    preserveLangAndVersionLinks:preserveLangAndVersionLinks,
    syncLanguageSwitcher:syncLanguageSwitcher,
    navigateToLanguage:navigateToLanguage,
    syncLevelSelectorOptions:syncLevelSelectorOptions,
    init:init
  };

  init(document);
})();
