import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
