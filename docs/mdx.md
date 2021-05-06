---
id: mdx
title: Powered by MDX
---

import Mermaid from '@theme/mermaid';

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

<Mermaid chart={` graph LR; A-->B; B-->C; B-->D[plop lanflz eknlzeknfz];`}/>
