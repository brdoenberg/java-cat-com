import LayoutContainer from "@/components/layouts/layout-container";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className={'bg-[#ccc]'}>
      <LayoutContainer fixedWidth className={'flex items-center justify-between'}>
        <Link href="/">Home</Link>
        <nav>
          <ul className={'flex gap-4'}>
            <li><Link href="/demo/about">About</Link></li>
            <li><Link href="/demo/archive-blog">Blog</Link></li>
            <li><Link href="/demo/contact">Contact</Link></li>
          </ul>
        </nav>
      </LayoutContainer>
    </header>
  )
}