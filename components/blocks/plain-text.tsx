import parse, {domToReact, Element, HTMLReactParserOptions, DOMNode} from 'html-react-parser';
import { TextHeader } from '@/components/eleements/text-header';
import { QuoteBlock } from "@/components/eleements/quote-block";

type PlainTextProps = {
  html: string
  className?: string
}

const options: HTMLReactParserOptions = {
  replace(node) {
    if (node.type !== 'tag') return;

    const children = domToReact((node as Element).children as DOMNode[], options);

    switch (node.name) {
      case 'h1': return <TextHeader level={1}>{children}</TextHeader>;
      case 'h2': return <TextHeader level={2}>{children}</TextHeader>;
      case 'h3': return <TextHeader level={3}>{children}</TextHeader>;
      case 'h4': return <TextHeader level={4}>{children}</TextHeader>;
      case 'h5': return <TextHeader level={5}>{children}</TextHeader>;
      case 'h6': return <TextHeader level={6}>{children}</TextHeader>;
      case 'blockquote': return <QuoteBlock><p>{children}</p></QuoteBlock>;
    }
  }
};

export function PlainText({html, className}: PlainTextProps) {
  return (
    <div className={className}>
      {parse(html, options)}
    </div>
  );
}
