# SEO для kp-millennium.ru

## Структура сайта
- `https://kp-millennium.ru/` — карточка объекта (дом 1 025 м², 35 соток, 349 млн ₽)
- `https://kp-millennium.ru/millennium-park/` — страница посёлка (инфраструктура, парки, вода)

## Что обновлено в этой папке
- усилены meta / Open Graph / Twitter
- расширена schema.org (RealEstateListing, FAQPage, Place, BreadcrumbList)
- добавлен блок FAQ на главной
- обновлены `robots.txt` и `sitemap.xml`

## Важно
Локальный файл `index (2).html` со значениями **1 128 м² / 380 млн** — устаревший.
На боевом сайте актуальные цифры: **1 025 м² / 35 соток / 349 000 000 ₽**.

## Деплой
Залить на хостинг:
1. `index.html` → корень сайта
2. `millennium-park/index.html` → `/millennium-park/`
3. `robots.txt`, `sitemap.xml` → корень

## После деплоя
1. Google Search Console + Яндекс.Вебмастер — отправить sitemap
2. Проверить rich results: https://search.google.com/test/rich-results
3. Не менять URL страниц без 301
