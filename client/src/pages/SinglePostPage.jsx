import { Link } from 'react-router-dom';

// COMPONENTS
import Image from '../components/Image';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <p>Written by</p>
            <Link to="/test" className="text-blue-800">
              John Doe
            </Link>
            <span>on</span>
            <Link to="/test" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            nostrum tenetur cumque voluptatem eos cum recusandae voluptates
            fugiat nobis vel.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            officiis dolores dolor modi tenetur natus amet, quos eius
            necessitatibus, at sed accusamus suscipit repudiandae qui odio hic
            harum ad similique, quod velit molestiae culpa ipsum. Nobis
            eligendi, at consectetur dicta alias reprehenderit iste consequuntur
            ratione nesciunt repellendus ipsam cumque magnam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link className='text-blue-800'>John Doe</Link>
          </div>
          <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
          <div className="flex gap-2">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Web Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
}
