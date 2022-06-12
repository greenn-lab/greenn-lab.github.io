import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="어중이떠중이 아무거나 막무가내 ...">
      <main>
        <img src="/img/main.jpg" className="main-image" />
      </main>
    </Layout>
  );
}
