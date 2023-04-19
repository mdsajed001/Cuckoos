import React from "react";
import ProfileHead from "./profile_head/ProfileHead";
import FeedCard from "@/components/feed_card/FeedCard";
import { fakeFeeds } from "@/data/fakeFeeds";
import Link from 'next/link';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { profileData } from "@/data/profileData";

const ProfileSec = () => {
  return (
    <div className="w-full border-x border-gray-500 text-black dark:text-slate-200 overflow-auto scrollbar-hide">
      <div className='sticky top-0 z-50  bg-white dark:bg-black/70 backdrop-blur-xl flex items-center text-2xl gap-4 p-2'>
        <Link className='hover:bg-gray-500 cursor-pointer rounded-full p-2 transition-all' href={"/"}><AiOutlineArrowLeft/></Link>
        <span className='font-bold'>{profileData.name}</span>
      </div>
      <ProfileHead />
      <div>
        {fakeFeeds.map((item, index) => (
          <FeedCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileSec;
