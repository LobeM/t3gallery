import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/a9e1ae5a-5353-4ec1-9f08-f1a176202cb7-ge36g7.jpg",
  "https://utfs.io/f/a5c7fdfc-3f87-4374-8bfc-bfeae6c3d700-2ff1up.jpg",
  "https://utfs.io/f/aa06b63b-81ab-452b-9e32-e8f1c49fd175-zgr2mi.jpg",
  "https://utfs.io/f/7297da32-d97a-45fc-b41d-40572cfdb2dc-e1m7ro.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
