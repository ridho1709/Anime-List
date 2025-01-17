export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const Anime = await response.json();
  return Anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap = 5) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = {
    data: data.slice(first, last),
  };
  return response;
};
