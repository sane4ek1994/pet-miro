## 📘 Просмотр полной OpenAPI-схемы

Чтобы собрать YAML-файл целиком (с учётом всех `$ref`), используйте CLI от Redocly:

```bash
npx @redocly/cli@latest bundle ./src/shared/api/schema/main.yaml
```

Быстрый предпросмотр через Swagger Editor
Перейдите на 👉 https://editor.swagger.io

Нажмите "File" → "Import file" и выберите bundled-schema.yaml

Или просто вставьте скопированный YAML вручную в левую часть редактора