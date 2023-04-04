import { useState } from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Editor,
  Preview,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HR,
  Bold,
  Italic,
  Paragraph,
  InlineCodeBlock,
  Blockquote,
  UnorderList,
  OrderList,
} from './Markdown.style';

const MarkdownEditor = () => {
  const [input, setInput] = useState<string>('');
  // 해당 값으로 미리보기 영역을 표시하거나 숨긴다.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div
      style={{
        wordWrap: 'break-word',
        width: '100%',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
        color: 'white',
      }}>
      <Editor
        style={{
          backgroundColor: '#262626',
          color: 'white',
          padding: '10px',
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {isVisible && (
        <Preview
          children={input}
          components={{
            // 이렇게 적용하면 될 것 같아!! 좋아써!!!!!!!!!!!
            hr: ({}) => <HR />,
            h1: ({ node, children, ...props }) => (
              <>
                <H1 {...props}>{children}</H1>
                {children && <HR />}
              </>
            ),
            h2: ({ node, children, ...props }) => (
              <H2 {...props}>{children}</H2>
            ),
            h3: ({ node, children, ...props }) => (
              <H3 {...props}>{children}</H3>
            ),
            h4: ({ node, children, ...props }) => (
              <H4 {...props}>{children}</H4>
            ),
            h5: ({ node, children, ...props }) => (
              <H5 {...props}>{children}</H5>
            ),
            h6: ({ node, children, ...props }) => (
              <H6 {...props}>{children}</H6>
            ),
            p: ({ node, children, ...props }) => (
              <Paragraph {...props}>{children}</Paragraph>
            ),
            em: ({ node, children, ...props }) => (
              <Italic {...props}>{children}</Italic>
            ),
            strong: ({ node, children, ...props }) => (
              <Bold {...props}>{children}</Bold>
            ),
            blockquote: ({ node, children, ...props }) => (
              <Blockquote>{children}</Blockquote>
            ),
            ul: ({ node, children, ...props }) => (
              <UnorderList {...props}>{children}</UnorderList>
            ),
            ol: ({ node, children, ...props }) => (
              <OrderList {...props}>{children}</OrderList>
            ),
            img: ({ src, alt, title }) => (
              <>
                <img src={src} alt={alt} title={title} />
                <br />
              </>
            ),
            code({
              node,
              inline,
              className,
              style,
              children,
              ...props
            }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  showLineNumbers
                  style={vscDarkPlus}
                  customStyle={{ margin: '2rem 0' }}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <InlineCodeBlock className={className} {...props}>
                  {children}
                </InlineCodeBlock>
              );
            },
          }}
        />
      )}
    </div>
  );
};

export default MarkdownEditor;
