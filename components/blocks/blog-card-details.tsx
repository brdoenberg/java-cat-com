import {BsCalendar3} from "react-icons/bs";
import Link from "next/link";
import {TextHeader} from "@/components/eleements";
import {RiArrowRightLongLine} from "react-icons/ri";
import React from "react";

type BlogCardProps = {
  title: string,
  summary: string,
  created_at: Date,
  permalink: string,
  className?: string
}

export function BlogCardDetails({title, summary, created_at, permalink, className}: BlogCardProps) {
  if(!created_at) return (<></>)

  return (
    <div className={`flex flex-1 flex-col gap-2 ${className ?? ''}`}>
        <span className={'flex gap-2 items-center'}>
          <BsCalendar3 />
          {`${created_at.getDate()} ${created_at.toLocaleString('default', { month: "long" })} ${created_at.getFullYear()}`}
        </span>
      <Link href={permalink}><TextHeader level={6}>{title}</TextHeader></Link>
      <p>{summary}</p>
      <Link href={permalink} className="mt-auto font-semibold flex gap-1 items-center hover:gap-2 transition-all duration-250">Learn More <RiArrowRightLongLine className={'text-xl'} /></Link>
    </div>
  )
}