import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User Profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Alinvr</span>
        </div>
        <Image src="/more.png" alt="More" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        {/* Aspect ratio container */}
        <div className="w-full relative" style={{ paddingBottom: "56.25%" }}>
          <Image
            src="https://images.pexels.com/photos/2956955/pexels-photo-2956955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Post Image"
            fill
            className="object-cover rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          tempore quibusdam harum quidem fugiat aliquid, earum molestias minima,
          neque nemo, dicta ut illo quia sint cumque numquam qui magnam
          explicabo.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/like.png"
            alt="Like"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            326.9k <span className="hidden md:inline"> Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/comment.png"
            alt="Like"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123.5k <span className="hidden md:inline"> Comments</span>
          </span>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              220.1k <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
