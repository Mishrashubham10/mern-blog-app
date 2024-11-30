import { useState } from 'react';
import PostList from '../components/PostList';
import SideMenu from '../components/SideMenu';

export default function PostListPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white py-2 px-3 rounded-2xl mb-4 md:hidden"
      >
        {open ? 'Close' : 'Filter or Search'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        {/* POST LIST */}
        <div className="">
          <PostList />
        </div>
        {/* SIDE MENU */}
        <div className={`${open ? 'block' : 'hidden'} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}