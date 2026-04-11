import LayoutContainer from "@/components/layouts/layout-container";
import {StyledButton} from "@/components/eleements";
import {PlainText} from "@/components/blocks";

type CtaBarProps = {
  text: string,
  links?: Array<{ title : string }>
}

export function CtaBar({text, links = []}: CtaBarProps) {
  return (
    <div className="bg-(--cta-bar-background) text-(--cta-bar-text) py-4">
      <LayoutContainer fixedWidth className={'flex flex-col lg:flex-row gap-4'}>
        <PlainText className={'lg:w-1/2 flex flex-col gap-2'} html={text} />
        { links.length && (
          <div className={'lg:w-1/2 flex-1 flex gap-4 items-center lg:justify-end'}>
            { links.map((link, index) => <StyledButton key={index}>{link.title}</StyledButton>)}
          </div>
        )}
      </LayoutContainer>
    </div>
  )
}