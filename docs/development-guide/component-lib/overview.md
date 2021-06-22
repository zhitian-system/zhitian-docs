---
sidebar_position: 1
---

# 概览

本文介绍开发者在开发知天组件时，需要遵循的文件结构。

在开发组件包之前，您需要新建一个文件夹，作为组件包。建议您使用组件名称，命名组件包。组件包中需要包含以下文件。

| 文档名              | 描述         |
| ------------------- | ------------ |
| index.ztc           | 组件主入口   |
| data.config.json    | 数据配置描述 |
| data.default.json   | 数据默认配置 |
| style.config.json   | 样式配置描述 |
| style.default.json  | 样式默认配置 |
| action.config.json  | 交互描述配置 |
| action.default.json | 交互默认描述 |

:::tip

注意！上述文件是必须的，如果缺少任意一个文件都可能导致组件编译失败。

您可以使用 `npm run create` 命令快速创建组件模板。

:::
