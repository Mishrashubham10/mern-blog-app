import { Link } from 'react-router-dom';
import Image from './Image';

export default function PostListItems() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* img */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          alt="Post Image"
          className="rounded-2xl object-cover"
          w='735'
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>On</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
          quibusdam vitae neque nemo libero, voluptas deleniti eligendi quisquam
          cupiditate officia porro repudiandae.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}