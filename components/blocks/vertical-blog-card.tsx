import React from "react";
import {BlogCardDetails} from "@/components/blocks/blog-card-details";
import Link from "next/link";

type BlogCardProps = {
  post: any,
  className?: string
}

export function VerticalBlogCard({post, className = ''}: BlogCardProps) {
  return (
    <div className={`flex flex-col bg-(--card-background) text-(--card-text-dark) group ${className}`}>
      <div className={'aspect-video w-full overflow-hidden'}>
        <Link href={post.permalink}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.thumbnail} alt={post.title} className={'w-full h-full object-cover group-hover:scale-110 transition-all duration-500'} />
        </Link>
      </div>
      <div className={'flex flex-1 flex-col gap-4'}>
        <BlogCardDetails {...post} className={'p-4'}/>
      </div>
    </div>
  )
}