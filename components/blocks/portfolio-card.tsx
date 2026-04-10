import Image from 'next/image';
import Link from 'next/link';
import { TextHeader } from "@/components/eleements/text-header";

type PortfolioCardProps = {
  image?: string
  imageAlt?: string
  title: string
  description: string
  detail?: string
  href?: string
  linkLabel?: string
}

export function PortfolioCard({image, imageAlt = '', title, description, detail, href, linkLabel = 'Learn More'}: PortfolioCardProps) {
  return (
    <div className={'relative overflow-visible group transition-all duration-400'}>

      {/* Image with dark overlay on hover */}
      <div className={'relative z-1'}>
        <div className={'w-full h-auto block bg-[#999] aspect-9/10'}>
          {image && <Image src={image} alt={imageAlt} fill style={{objectFit: "cover"}}/>}
        </div>
        <div className={'absolute inset-0 bg-black opacity-0 invisible transition-all duration-300 group-hover:opacity-60 group-hover:visible'} />
      </div>

      {/* Info box */}
      <div className={'absolute left-4 bottom-4 z-2 bg-white p-4 w-full max-w-[calc(100%-(var(--spacing)*8))] transition-all duration-400'}>
        <div className={'flex flex-col gap-2'}>
          <TextHeader level={6}>{title}</TextHeader>
          {description}

          {/* Revealed on hover */}
          <div className={'grid grid-rows-[0fr] opacity-0 transition-all duration-400 group-hover:grid-rows-[1fr] group-hover:opacity-100'}>
            <div className={'overflow-hidden flex flex-col gap-2'}>
              {detail}
              {href && (
                <Link
                  href={href}
                >
                  {linkLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
