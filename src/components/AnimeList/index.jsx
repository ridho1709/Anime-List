import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={index}
            className="cursor-pointer  text-color-primary hover:text-color-accent transition-all"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={350}
              height={350}
            />
            <h3 className="font-bold md:text-xl text-md p-3 ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
