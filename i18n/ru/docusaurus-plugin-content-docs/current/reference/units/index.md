---
sidebar_position: 1
---

# Юниты

## Модуль {#module}

Структурная единица проекта

Под модулем обычно подразумевается определенный файл или директория *(абстракция в контексте структуры)*

- *модуль авторизации*
- *модуль страниц*
- *модуль компонента в фиче*
- *модуль экшенов в модели сущности*
- *и т.д.*

## [Слой][refs-layers] {#layer}

Каждая из директорий, находящихся на самом верхнем уровне приложения.

Этот уровень определяет [скоуп ответственности модулей][refs-split-layers], а также уровень опасности изменений

- **Представители**: [`app`][refs-layers-app], [`processes`][refs-layers-processes], [`pages`][refs-layers-pages], [`widgets`][refs-layers-widgets], [`features`][refs-layers-features], [`entities`][refs-layers-entities], [`shared`][refs-layers-shared]

```sh
└── src/
    ├── app/                    # Инициализирующая логика приложения
    ├── processes/              # (Опц.) Процессы приложения, протекающие над страницами
    ├── pages/                  # Страницы приложения
    ├── widgets/                # Самостоятельные и полноценные блоки для страниц
    ├── features/               # (Опц.) Обрабатываемые пользовательские сценарии
    ├── entities/               # (Опц.) Бизнес-сущности, которыми оперирует предметная область
    └── shared/                 # Переиспользуемые модули, без привязки к бизнес-логике
```

## Слайс {#slice}

Каждый из элементов, находящихся на верхнем уровне слоёв

Этот уровень [слабо регламентируется][refs-split-slices] методологией, однако многое зависит от конкретного проекта, стека и команды

- **Представители (от каждого слоя)** [`process`][refs-layers-processes], [`page`][refs-layers-pages], [`widget`][refs-layers-widgets], [`feature`][refs-layers-features], [`entity`][refs-layers-entities]

```sh
├── app/
|   # Не имеет конкретных слайсов, 
|   # Т.к. там содержится мета-логика над проектом и его инициализации
├── processes/
|   # Слайсы для реализации процессов на страницах
|   ├── payment
|   ├── auth
|   ├── quick-tour
|   └── ...
├── pages/
|   # Слайсы для реализации страниц приложения
|   # При этом, в силу специфики роутинга - могут вкладываться друг в друга
|   ├── profile
|   ├── sign-up
|   ├── feed
|   └── ...
├── widgets/
|   # Слайсы для реализации самостоятельных блоков страниц
|   ├── header
|   ├── feed
|   └── ...
├── features/
|   # Слайсы для реализации пользовательских сценариев на страницах
|   ├── auth-by-phone
|   ├── inline-post
|   └── ...
├── entities/
|   # Слайсы бизнес-сущностей для реализации более сложной БЛ
|   ├── viewer
|   ├── posts
|   ├── i18n
|   └── ...
├── shared/
|    # Не имеет конкретных слайсов
|    # Представляет собой скорее набор общеиспользуемых сегментов, без привязки к БЛ
```

## [Сегмент][refs-segments] {#segment}

Каждый из модулей, находящийся на верхнем уровне каждого слайса

Этот уровень определяет [назначение модулей в коде и реализации][refs-split-segments], согласно классическим моделям проектирования

- **Представители**: [`ui`][refs-segments-ui], [`model`][refs-segments-model], [`lib`][refs-segments-lib], [`api`][refs-segments-api], [`config`][refs-segments-config]

```sh
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-логика (components, ui-widgets, ...)
    |   ├── model/                  # Бизнес-логика (store, actions, effects, reducers, ...)
    |   ├── lib/                    # Инфраструктурная логика (utils/helpers)
    |   ├── config/                 # Конфигурация приложения (env-vars, ...)
    |   └── api/                    # Логика запросов к API (api instances, requests, ...)
```

:::note

Поскольку не каждый из слоев в явном виде использует слайсы (app, shared)

- Сегменты могут располагаться по своим правилам `shared/{api, config}`
- Или не использоваться совсем `app/{providers, styles}`

:::

## См. также {#see-also}

- [Уровни абстракций по методологии][refs-split]
- [Layers в методологии][refs-layers]
- [Segments в методологии][refs-segments]

[refs-split]: /docs/reference/units/decomposition
[refs-split-layers]: /docs/reference/units/decomposition#group-layers
[refs-split-slices]: /docs/reference/units/decomposition#group-slices
[refs-split-segments]: /docs/reference/units/decomposition#group-segments

[refs-layers]: /docs/reference/units/layers
[refs-layers-app]: /docs/reference/units/layers/app
[refs-layers-processes]: /docs/reference/units/layers/processes
[refs-layers-pages]: /docs/reference/units/layers/pages
[refs-layers-widgets]: /docs/reference/units/layers/widgets
[refs-layers-features]: /docs/reference/units/layers/features
[refs-layers-entities]: /docs/reference/units/layers/entities
[refs-layers-shared]: /docs/reference/units/layers/shared
[refs-segments]: /docs/reference/units/segments
[refs-segments-ui]: /docs/reference/units/segments#ui
[refs-segments-model]: /docs/reference/units/segments#model
[refs-segments-lib]: /docs/reference/units/segments#lib
[refs-segments-api]: /docs/reference/units/segments#api
[refs-segments-config]: /docs/reference/units/segments#config
