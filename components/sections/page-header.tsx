import LayoutContainer from "@/components/layouts/layout-container";
import {TextHeader} from "@/components/eleements";

interface PageHeaderProps {
  title?: string,
  description?: string
}

export function PageHeader({title, description}: PageHeaderProps) {
  return (
    <div className="bg-(--page-header-background) text-(--page-header-text)">
      <LayoutContainer fixedWidth>
        <div className={'flex flex-col gap-4 text-center max-w-200 my-4 mx-auto'}>
          <TextHeader level={3}>{title}</TextHeader>
          <p>{description}</p>
        </div>
      </LayoutContainer>
    </div>
  )
}