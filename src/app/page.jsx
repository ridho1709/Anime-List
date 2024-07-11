import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendAnime = reproduce(recommendAnime, 8);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHerf="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" linkHerf="/populer" />
        <AnimeList api={recommendAnime} />
      </section>
    </>
  );
};

export default Page;
