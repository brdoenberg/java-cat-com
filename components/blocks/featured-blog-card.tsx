import React from "react";
import Link from "next/link";
import {BlogCardDetails} from "@/components/blocks/blog-card-details";
import {BlogPost} from "@/lib/placeholder-blog";

type FeaturedBlogCard = {
  post: BlogPost,
  className?: string
}

export function FeaturedBlogCard({post, className = ''}: FeaturedBlogCard) {
  return (
    <div className={'group flex relative overflow-hidden ' + className}>
      <Link href={post.permalink}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.thumbnail} alt={post.title} className={'absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105'} />
      </Link>
      <div className={'relative p-4 m-4 mt-auto bg-(--card-background-dark) text-(--card-text) w-full group-hover:-translate-y-2.5 transition-all duration-500 flex flex-col gap-4'}>
        <BlogCardDetails {...post} />
      </div>
    </div>
  )
}