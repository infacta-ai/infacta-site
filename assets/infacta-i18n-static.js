(function(){
  'use strict';
  var VERSION_TOKEN='infacta-live-polish-v1-2-4';
  var DEFAULT_LANG='uk';
  var REAL_LANGS=['uk','en','ru'];
  var PLANNED_INTERFACE_LANGS=['uk','en','de','pl','es','it','ru','fr','cs'];
  var I18N={
    "uk": {
        "meta.title": "Перший екран · inFACTa",
        "header.levelSelectorAria": "Вибір рівня аналізу",
        "header.levelSelectAria": "Виберіть рівень аналізу",
        "header.languageSelectorAria": "Мова інтерфейсу",
        "level.futureNotice": "{level} ще в розробці. У демо активний лише Level 0.",
        "header.languageCode": "UA",
        "index.uploadAria": "Подати документ: у цій демо-версії поле не надсилає документ на сервер",
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
        "honest.staticDemoOnly": "У цій демо-версії поле не надсилає документ на сервер і не запускає обробку. Для перевірки сценарію скористайтесь прикладами.",
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
        "feedback.privacyBoundary": "Для фідбеку достатньо короткого опису проблеми. Документи в цій формі не надсилаються і не потрібні.",
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
        "preview.levelValue": "Level 0 · попереднє структурування",
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
        "notAvailable.body.upload.main": "У цій demo-версії поле подання документа не надсилає файл на сервер і не запускає обробку. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.file": "У цій demo-версії вибір файлу ще не запускає обробку й не надсилає документ на сервер. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.link": "У цій demo-версії посилання ще не обробляється сервером. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.photo": "У цій demo-версії фото ще не надсилається на сервер і не запускає обробку. Для перевірки сценарію скористайтесь прикладами документів.",
        "notAvailable.body.upload.camera": "У цій demo-версії камера ще не підключена до обробки документа. Для перевірки сценарію скористайтесь прикладами документів.",
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
        "level.futureNotice": "{level} is still in development. Only Level 0 is active in this demo.",
        "header.languageCode": "EN",
        "index.uploadAria": "Submit a document: in this demo the field does not send a document to the server",
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
        "honest.staticDemoOnly": "In this demo version, the field does not send a document to the server or start processing. Use examples to test the scenario.",
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
        "feedback.privacyBoundary": "A short description of the issue is enough for feedback. Documents are not sent through this form and are not needed here.",
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
        "preview.levelValue": "Level 0 · preliminary structuring",
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
        "notAvailable.body.upload.main": "In this demo version, the document submission field does not send a file to the server or start processing. Use examples to test the scenario.",
        "notAvailable.body.upload.file": "In this demo version, file selection does not start processing or send a document to the server. Use examples to test the scenario.",
        "notAvailable.body.upload.link": "In this demo version, links are not processed by a server yet. Use examples to test the scenario.",
        "notAvailable.body.upload.photo": "In this demo version, photos are not sent to the server and do not start processing. Use examples to test the scenario.",
        "notAvailable.body.upload.camera": "In this demo version, the camera is not connected to document processing yet. Use examples to test the scenario.",
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
        "level.futureNotice": "{level} ещё в разработке. В демо активен только Level 0.",
        "header.languageCode": "RU",
        "index.uploadAria": "Подать документ: в этой демо-версии поле не отправляет документ на сервер",
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
        "honest.staticDemoOnly": "В этой демо-версии поле не отправляет документ на сервер и не запускает обработку. Для проверки сценария используйте примеры.",
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
        "feedback.privacyBoundary": "Для фидбека достаточно короткого описания проблемы. Документы в этой форме не отправляются и здесь не нужны.",
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
        "preview.levelValue": "Level 0 · предварительное структурирование",
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
        "notAvailable.body.upload.main": "В этой демо-версии поле подачи документа не отправляет файл на сервер и не запускает обработку. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.file": "В этой демо-версии выбор файла ещё не запускает обработку и не отправляет документ на сервер. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.link": "В этой демо-версии ссылка ещё не обрабатывается сервером. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.photo": "В этой демо-версии фото ещё не отправляется на сервер и не запускает обработку. Для проверки сценария воспользуйтесь примерами документов.",
        "notAvailable.body.upload.camera": "В этой демо-версии камера ещё не подключена к обработке документа. Для проверки сценария воспользуйтесь примерами документов.",
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
  "0": {
    "title": "Level 0 — Попереднє структурування документа",
    "state": "active",
    "badge": "Доступний у демо · Free",
    "items": [
      [
        "Витягування й нормалізація",
        "Витягує, нормалізує і структурує знайдені дані документа."
      ],
      [
        "Знайдені дані й фрагменти",
        "Показує сторони, дати, суми, строки, штрафи, обов’язки, реквізити та зони уваги."
      ],
      [
        "Показники для пріоритетів",
        "Рахує доказовість, повноту, невідомі й пріоритет показу знайдених зон уваги."
      ]
    ],
    "note": "<b>Level 0</b> — доступний демо-рівень. Показує структуру, знайдені дані, фрагменти й зони уваги. Для юридично значимих рішень варто звернутися до профільного спеціаліста."
  },
  "1": {
    "title": "Level 1 — Мінімальне AI-пояснення",
    "state": "future",
    "badge": "Майбутній платний · 1 кредит",
    "items": [
      [
        "1 кредит",
        "Базова одиниця платного AI-пояснення."
      ],
      [
        "Один фрагмент або один документ",
        "Коротко пояснює конкретний знайдений пункт чи фрагмент, не запускаючи повний аналіз без потреби."
      ],
      [
        "Після Level 0",
        "Використовує структуровані дані й фрагменти як підготовчий шар."
      ]
    ],
    "note": "<b>Level 1</b> — майбутній платний рівень. У поточному static demo не активний і не запускає AI."
  },
  "2": {
    "title": "Level 2 — Розширене AI-пояснення одного документа",
    "state": "future",
    "badge": "Майбутній платний · 3 кредити",
    "items": [
      [
        "3 кредити",
        "Розширений платний рівень для одного документа."
      ],
      [
        "Кілька знайдених пунктів",
        "Пояснює кілька важливих фрагментів, формує короткий AI-висновок і базову карту ризиків."
      ],
      [
        "Контроль собівартості",
        "Працює з контрольованим обсягом контексту й AI-витрат."
      ]
    ],
    "note": "<b>Level 2</b> — майбутній платний рівень одного документа. У demo не активний."
  },
  "3": {
    "title": "Level 3 — Найвищий стандартний аналіз одного документа",
    "state": "future",
    "badge": "Майбутній платний · 6 кредитів",
    "items": [
      [
        "6 кредитів",
        "Найвищий стандартний платний рівень для одного документа."
      ],
      [
        "Повний стандартний AI-аналіз",
        "Працює в межах стандартного тарифу, стандартних лімітів і контрольованої собівартості."
      ],
      [
        "Не Premium override",
        "Якщо документ завеликий, система може запропонувати зменшити обсяг або перейти на Level 5 Premium."
      ]
    ],
    "note": "<b>Level 3</b> — верх стандартної шкали для одного документа. У demo не активний."
  },
  "4": {
    "title": "Level 4 Premium — Аналіз пакета документів",
    "state": "future",
    "badge": "Premium · кабінет / кошторис",
    "items": [
      [
        "Багато документів",
        "Договір, додатки, акти, рахунки, специфікації або кілька версій документа."
      ],
      [
        "Порівняння й суперечності",
        "Знаходить залежності, зміни та невідповідності у строках, сумах, сторонах, реквізитах і обов’язках."
      ],
      [
        "Project-case workspace",
        "Потребує особистого кабінету, перевірки підписки або окремого рахунку, кошторису й upgrade credit у межах кейсу."
      ]
    ],
    "note": "<b>Level 4 Premium</b> — майбутній режим для пакета документів. Це не “сильніший Level 3” для одного документа."
  },
  "5": {
    "title": "Level 5 Premium — Максимальний аналіз одного документа",
    "state": "future",
    "badge": "Premium · один документ",
    "items": [
      [
        "Один документ",
        "Максимальний AI-аналіз одного договору або документа після попереднього кошторису."
      ],
      [
        "Кілька AI-проходів",
        "Може включати сильні моделі, незалежні проходи, cross-model validation, verifier-pass і final composer."
      ],
      [
        "Guest checkout можливий",
        "Особистий кабінет не обов’язковий для одного документа; попередня оплата нижчих рівнів може враховуватись як upgrade credit."
      ]
    ],
    "note": "<b>Level 5 Premium</b> — майбутній premium-рівень для одного документа. Це не multi-document workflow."
  }
};

  var LEVEL_EN={
  "0": {
    "title": "Level 0 — Preliminary document structuring",
    "state": "active",
    "badge": "Available in demo · Free",
    "items": [
      [
        "Extraction and normalization",
        "Extracts, normalizes, and structures data found in the document."
      ],
      [
        "Found data and fragments",
        "Shows parties, dates, amounts, deadlines, penalties, obligations, details, and attention zones."
      ],
      [
        "Priority indicators",
        "Scores evidence, completeness, unknowns, and display priority for found attention zones."
      ]
    ],
    "note": "<b>Level 0</b> — available demo level. Shows structure, found data, fragments, and attention zones. For legally significant decisions, consult a relevant specialist."
  },
  "1": {
    "title": "Level 1 — Minimal AI explanation",
    "state": "future",
    "badge": "Planned paid · 1 credit",
    "items": [
      [
        "1 credit",
        "The basic unit of paid AI explanation."
      ],
      [
        "One fragment or one document",
        "Briefly explains a specific found clause or fragment without launching full analysis unless needed."
      ],
      [
        "After Level 0",
        "Uses structured data and fragments as a preparation layer."
      ]
    ],
    "note": "<b>Level 1</b> — planned paid level. It is not active in this static demo and does not run AI."
  },
  "2": {
    "title": "Level 2 — Extended AI explanation of one document",
    "state": "future",
    "badge": "Planned paid · 3 credits",
    "items": [
      [
        "3 credits",
        "Extended paid level for one document."
      ],
      [
        "Several found points",
        "Explains several important fragments, forms a short AI summary, and builds a basic risk map."
      ],
      [
        "Cost control",
        "Works with controlled context size and controlled AI cost."
      ]
    ],
    "note": "<b>Level 2</b> — planned paid level for one document. Not active in the demo."
  },
  "3": {
    "title": "Level 3 — Highest standard analysis of one document",
    "state": "future",
    "badge": "Planned paid · 6 credits",
    "items": [
      [
        "6 credits",
        "The highest standard paid level for one document."
      ],
      [
        "Full standard AI analysis",
        "Works within a standard tariff, standard limits, and controlled cost."
      ],
      [
        "Not a Premium override",
        "If the document exceeds standard limits, the system may suggest reducing scope or moving to Level 5 Premium."
      ]
    ],
    "note": "<b>Level 3</b> — top of the standard scale for one document. Not active in the demo."
  },
  "4": {
    "title": "Level 4 Premium — Document package analysis",
    "state": "future",
    "badge": "Premium · account / estimate",
    "items": [
      [
        "Multiple documents",
        "Contracts, appendices, acts, invoices, specifications, or several versions of one document."
      ],
      [
        "Comparison and contradictions",
        "Finds dependencies, changes, and mismatches in deadlines, amounts, parties, details, and obligations."
      ],
      [
        "Project-case workspace",
        "Requires an account, subscription check or separate invoice, estimate, and upgrade credit inside the case."
      ]
    ],
    "note": "<b>Level 4 Premium</b> — future mode for a document package. It is not a “stronger Level 3” for one document."
  },
  "5": {
    "title": "Level 5 Premium — Maximum analysis of one document",
    "state": "future",
    "badge": "Premium · one document",
    "items": [
      [
        "One document",
        "Maximum AI analysis of one contract or document after a prior estimate."
      ],
      [
        "Several AI passes",
        "May include strong models, independent passes, cross-model validation, verifier-pass, and final composer."
      ],
      [
        "Guest checkout possible",
        "An account is not mandatory for one document; prior payment for lower levels may be applied as upgrade credit."
      ]
    ],
    "note": "<b>Level 5 Premium</b> — future premium level for one document. It is not a multi-document workflow."
  }
};

  var LEVEL_RU={
  "0": {
    "title": "Level 0 — Предварительное структурирование документа",
    "state": "active",
    "badge": "Доступен в демо · Free",
    "items": [
      [
        "Извлечение и нормализация",
        "Извлекает, нормализует и структурирует найденные данные документа."
      ],
      [
        "Найденные данные и фрагменты",
        "Показывает стороны, даты, суммы, сроки, штрафы, обязанности, реквизиты и зоны внимания."
      ],
      [
        "Показатели для приоритетов",
        "Считает доказательность, полноту, неизвестные и приоритет показа найденных зон внимания."
      ]
    ],
    "note": "<b>Level 0</b> — доступный демо-уровень. Показывает структуру, найденные данные, фрагменты и зоны внимания. Для юридически значимых решений стоит обратиться к профильному специалисту."
  },
  "1": {
    "title": "Level 1 — Минимальное AI-объяснение",
    "state": "future",
    "badge": "Будущий платный · 1 кредит",
    "items": [
      [
        "1 кредит",
        "Базовая единица платного AI-объяснения."
      ],
      [
        "Один фрагмент или один документ",
        "Кратко объясняет конкретный найденный пункт или фрагмент, не запуская полный анализ без необходимости."
      ],
      [
        "После Level 0",
        "Использует структурированные данные и фрагменты как подготовительный слой."
      ]
    ],
    "note": "<b>Level 1</b> — будущий платный уровень. В текущем static demo не активен и не запускает AI."
  },
  "2": {
    "title": "Level 2 — Расширенное AI-объяснение одного документа",
    "state": "future",
    "badge": "Будущий платный · 3 кредита",
    "items": [
      [
        "3 кредита",
        "Расширенный платный уровень для одного документа."
      ],
      [
        "Несколько найденных пунктов",
        "Объясняет несколько важных фрагментов, формирует короткий AI-вывод и базовую карту рисков."
      ],
      [
        "Контроль себестоимости",
        "Работает с контролируемым объёмом контекста и AI-расходов."
      ]
    ],
    "note": "<b>Level 2</b> — будущий платный уровень одного документа. В demo не активен."
  },
  "3": {
    "title": "Level 3 — Высший стандартный анализ одного документа",
    "state": "future",
    "badge": "Будущий платный · 6 кредитов",
    "items": [
      [
        "6 кредитов",
        "Высший стандартный платный уровень для одного документа."
      ],
      [
        "Полный стандартный AI-анализ",
        "Работает в пределах стандартного тарифа, стандартных лимитов и контролируемой себестоимости."
      ],
      [
        "Не Premium override",
        "Если документ превышает стандартные лимиты, система может предложить уменьшить объём или перейти на Level 5 Premium."
      ]
    ],
    "note": "<b>Level 3</b> — верх стандартной шкалы для одного документа. В demo не активен."
  },
  "4": {
    "title": "Level 4 Premium — Анализ пакета документов",
    "state": "future",
    "badge": "Premium · кабинет / смета",
    "items": [
      [
        "Много документов",
        "Договор, приложения, акты, счета, спецификации или несколько версий документа."
      ],
      [
        "Сравнение и противоречия",
        "Находит зависимости, изменения и несоответствия в сроках, суммах, сторонах, реквизитах и обязанностях."
      ],
      [
        "Project-case workspace",
        "Требует личного кабинета, проверки подписки или отдельного счёта, сметы и upgrade credit в пределах кейса."
      ]
    ],
    "note": "<b>Level 4 Premium</b> — будущий режим для пакета документов. Это не “усиленный Level 3” для одного документа."
  },
  "5": {
    "title": "Level 5 Premium — Максимальный анализ одного документа",
    "state": "future",
    "badge": "Premium · один документ",
    "items": [
      [
        "Один документ",
        "Максимальный AI-анализ одного договора или документа после предварительной сметы."
      ],
      [
        "Несколько AI-проходов",
        "Может включать сильные модели, независимые проходы, cross-model validation, verifier-pass и final composer."
      ],
      [
        "Guest checkout возможен",
        "Личный кабинет не обязателен для одного документа; предыдущая оплата нижних уровней может учитываться как upgrade credit."
      ]
    ],
    "note": "<b>Level 5 Premium</b> — будущий premium-уровень для одного документа. Это не multi-document workflow."
  }
};

  var LEVEL_BY_LANG={uk:LEVEL_UK,en:LEVEL_EN,ru:LEVEL_RU};

  var LEVEL_OPTION_LABELS={
  "uk": {
    "0": "Level 0",
    "1": "Level 1",
    "2": "Level 2",
    "3": "Level 3",
    "4": "Level 4 Premium",
    "5": "Level 5 Premium"
  },
  "en": {
    "0": "Level 0",
    "1": "Level 1",
    "2": "Level 2",
    "3": "Level 3",
    "4": "Level 4 Premium",
    "5": "Level 5 Premium"
  },
  "ru": {
    "0": "Level 0",
    "1": "Level 1",
    "2": "Level 2",
    "3": "Level 3",
    "4": "Level 4 Premium",
    "5": "Level 5 Premium"
  }
};

  var LEVEL_STATUS_LABELS={
  "uk": {
    "active": "Доступний у демо",
    "future": "Майбутній рівень"
  },
  "en": {
    "active": "Available in demo",
    "future": "Planned level"
  },
  "ru": {
    "active": "Доступен в демо",
    "future": "Будущий уровень"
  }
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
      var badgeText=data.badge || labels[state] || labels.future;
      badge.textContent=badgeText;
      badge.setAttribute('data-state', state);
      badge.setAttribute('aria-label', badgeText);
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


  function showFutureLevelNotice(lang, attemptedLevel){
    var resolved=resolveLang(lang || currentLang());
    var label=(LEVEL_OPTION_LABELS[resolved] && LEVEL_OPTION_LABELS[resolved][String(attemptedLevel)]) || ('Level '+attemptedLevel);
    var text=(t('level.futureNotice', resolved) || '').replace('{level}', label);
    if(!text) text=label + ' is still in development. Only Level 0 is active in this demo.';
    var el=document.getElementById('infactaLevelToast');
    if(!el){
      el=document.createElement('div');
      el.id='infactaLevelToast';
      el.className='infacta-toast';
      el.setAttribute('role','status');
      el.setAttribute('aria-live','polite');
      el.hidden=true;
      document.body.appendChild(el);
    }
    el.textContent=text;
    el.hidden=false;
    window.clearTimeout(showFutureLevelNotice._timer);
    showFutureLevelNotice._timer=window.setTimeout(function(){ if(el) el.hidden=true; }, 4200);
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
      select.addEventListener('change', function(){
        var selected=String(select.value || '0');
        if(select.id==='levelSelect' && selected !== '0'){
          showFutureLevelNotice(currentLang(), selected);
          select.value='0';
          window.setTimeout(function(){ applyLevel(currentLang()); }, 0);
          return;
        }
        window.setTimeout(function(){ applyLevel(currentLang()); }, 0);
      });
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
