---
sidebar_position: 30
---

# 规范

\*\*.config.ts 是配置项描述文件。

\*\*.default.ts 是默认配置文件。

这两类文件都需要默认导出一个 JS 对象或数组。

## 配置项描述字段说明

### styles

| 字段名称   | 类型     | 描述                                                                                                                                                                               |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string   | 配置代码                                                                                                                                                                           |
| name     | string   | code 对应的中文描述                                                                                                                                                                |
| fieldset | Object[] | 字段集，包含了 N 个字段                                                                                                                                                            |
| type     | string   | 该字段的类型，包含 Text、textArea 等，详见[组件配置说明](http://localhost:3000/docs/development-guide/component-lib/specification)                                                 |
| options  | Object   | 字段的配置项，比如 select 类型的字段需要 options，Intager 类型的字段需要 min、max 等，详见[组件配置说明](http://localhost:3000/docs/development-guide/component-lib/specification) |

### 默认配置项字段说明
