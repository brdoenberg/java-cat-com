import LayoutContainer from "@/components/layouts/layout-container";
import Link from "next/link";
import { TextHeader } from "@/components/eleements/text-header";

export default function SiteFooter() {
  return (
    <footer className={'bg-[#ccc] pt-8'}>
      <LayoutContainer fixedWidth className={'flex flex-col gap-4'}>
        <div className={'flex gap-4 justify-between w-full'}>
          <div className={'flex-1/3'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.
              Nam rhoncus elementum arcu, ut dictum diam consectetur at.</p>
          </div>
          <div className={'flex-1/3 flex gap-4 justify-around'}>
            <div className={'flex flex-col gap-2'}>
              <TextHeader level={6}>About Us</TextHeader>
              <ul className={'flex flex-col gap-0'}>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={'flex flex-col gap-2'}>
              <TextHeader level={6}>Contact Us</TextHeader>
              <ul className={'flex flex-col gap-0'}>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link href={'/contact'}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={'flex-1/3'}>
            <p>Words</p>
          </div>
        </div>
        <div className={'text-center text-[#666] border-t-2 border-[#aaa] pt-4'}>
          &copy; Copyright {new Date().getFullYear()} Java Cat LLC
        </div>
      </LayoutContainer>
    </footer>
  )
}