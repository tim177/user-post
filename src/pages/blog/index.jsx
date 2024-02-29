import Link from "next/link";
import { FaUser } from "react-icons/fa";
import useSWR from "swr";

// Define the fetcher function
const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default function Page() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mt-16">
      <ul>
        {data.map((user) => {
          return (
            <li key={user.id} className="bg-gray-200 flex justify-center">
              <Link
                className="m-2 rounded-sm flex w-96 bg-white shadow p-3 items-center"
                href={`/blog/post/${encodeURIComponent(user.id)}`}
              >
                <FaUser className="h-8 w-8 text-blue-500" />
                <p className="text-blue-600 font-semibold ml-4">{user.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
