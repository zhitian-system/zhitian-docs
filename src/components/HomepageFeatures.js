import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "丰富的数据可视化编辑工具",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <div>可视化拖拽编辑界面</div>
        <div>丰富的组件库和组件库开放性机制</div>
        <div>智能化主题配色</div>
      </>
    ),
  },
  {
    title: "灵活开放的发布部署方式",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <div>多种发布方式</div>
        <div>灵活的部署方式：支持云上部署、支持私有部署</div>
      </>
    ),
  },
  {
    title: "不断繁荣的生态系统",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <div>开源</div>
        <div>高频率维护</div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
