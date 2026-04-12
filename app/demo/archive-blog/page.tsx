import LayoutContainer from "@/components/layouts/layout-container";
import {HorizontalBlogCard, FeaturedBlogCard} from "@/components/blocks";
import {VerticalBlogCard} from "@/components/blocks/vertical-blog-card";
import {CtaBar} from "@/components/sections/cta_bar";
import {PageHeader} from "@/components/sections/page-header";
import {TextHeader} from "@/components/eleements";
import {generateBlogPosts} from "@/lib/placeholder-blog";

const ctaBarHtml : string  = '<h4>Join Our Community</h4>\n' +
  '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis.\n' +
  '              Nam rhoncus elementum arcu, ut dictum diam consectetur at.</p>'
const ctaBarLinks : Array<{ title : string }> = [
  {title: 'Contact Us'},
  {title: 'Join Our Community'},
];

const pageTitle = 'Archive Blog';
const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut libero tellus. Morbi vel enim turpis. Nam rhoncus elementum arcu, ut dictum diam consectetur at.';

export default function ArchiveBlog() {
  const blogPosts = generateBlogPosts(9);

  return (
    <main>
      <PageHeader title={pageTitle} description={pageDescription}/>
      <LayoutContainer fixedWidth>
        <div className={'text-center my-8 mt-4'}>
          <TextHeader level={3}>Featured Posts</TextHeader>
        </div>
        <div className={'flex flex-col lg:flex-row gap-4'}>
          <FeaturedBlogCard post={blogPosts[0]} className={'lg:w-1/2 min-h-125'} />
          <div className={'lg:w-1/2 flex flex-col gap-4'}>
            {blogPosts.slice(1,3).map(
              (post, index: number) => <HorizontalBlogCard key={index} post={post} className={'grow'} />
            )}
          </div>
        </div>
        <hr className={'mt-8 m-2 mb-0'}/>
      </LayoutContainer>
      <LayoutContainer fixedWidth>
        <div className={'text-center mb-8 -mt-2'}>
          <TextHeader level={3}>Latest Blog Posts</TextHeader>
        </div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
          {blogPosts.slice(2,-1).map((post, index: number) => <VerticalBlogCard key={index} post={post} /> )}
        </div>
      </LayoutContainer>
      <CtaBar text={ctaBarHtml} links={ctaBarLinks}/>
    </main>
  );
}
