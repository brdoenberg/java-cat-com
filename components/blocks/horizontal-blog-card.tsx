import React from "react";
import {BlogCardDetails} from "@/components/blocks/blog-card-details";

type BlogCardProps = {
  post: any,
  className?: string
}

export function HorizontalBlogCard({post, className = ''}: BlogCardProps) {
  return (
    <div className={`flex gap-4 bg-(--card-background)
    *:relative *:z-10 
    relative transition-all duration-500
    text-(--card-text-dark)
    hover:text-(--card-text) 
    after:content-[''] after:bg-(--card-background-dark) after:duration-750 after:top-0 after:left-0 after:absolute after:w-0 after:transition-all after:h-full after:z-0
    hover:after:w-full 
    ${className ?? ''}`}>
      <BlogCardDetails {...post} className={'p-4'}/>
    </div>
  )
}