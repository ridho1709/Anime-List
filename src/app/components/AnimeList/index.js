import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} >
      <Image src={images} alt={title} width={350} height={350} />
      <h3 className="font-bold md:text-xl text-md p-3 ">{title}</h3>
    </Link>
  );
};

export default AnimeList;
