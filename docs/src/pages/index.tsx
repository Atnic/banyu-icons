import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE, HOME_USAGE,URL_JALA_ICONS } from "@utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
          Banyu icons is an icon library designed for the react project by Jala Tech, provided to help develop the JALA Web App.
      </p>

      <h2>Installation</h2>
        <p>Choose the following package manager used in your project.</p>
        <CodeBlock language="bash" code={`npm install @jala-banyu/icons --save`} />
        <p>
            or
        </p>
        <CodeBlock language="bash" code={`yarn add @jala-banyu/icons`} />
        <p>
            or
        </p>
        <CodeBlock language="bash" code={`pnpm install @jala-banyu/icons --save`} />

      <h3>Usage</h3>
      <CodeBlock language="jsx" code={HOME_USAGE} />

      <h2>More info</h2>
      <p>
        <a href={URL_JALA_ICONS}>GitHub &#8599;</a>
      </p>
    </Container>
  );
}