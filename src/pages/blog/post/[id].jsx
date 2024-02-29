import Image from "next/image";
import { useRouter } from "next/router";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const post = await res.json();
  console.log(post[0]);
  // Pass data to the page via props
  return { props: { post } };
}

function Post({ post }) {
  const router = useRouter();
  const ind = router.query.id;
  return (
    <div className="mt-20">
      <>Servier side Rendering...</>
      <div className="mx-auto px-4 py-8 max-w-xl">
        <div className="bg-white rounded-lg mb-6 tracking-wide">
          <Image
            src="/Batman.jpg"
            alt="mountains"
            className="w-full h-64 rounded-lg rounded-b-none"
            layout="responsive"
            width={500}
            height={300}
          />
          <div className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl capitalize">{post[ind].title}</h2>
            <p className="text-sm text-gray-700">{post[ind].body}</p>
          </div>
        </div>
        <button
          className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200"
          onClick={() => router.push("/")}
        >
          Home Page
        </button>
      </div>
    </div>
  );
}

export default Post;
