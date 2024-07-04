const Pagination = ({ page, lastPage, setPage }) => {
  const topScroll = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlerNextPage = () => {
    setPage((prevState) => prevState + 1);
    topScroll();
  };
  const handlerBackPage = () => {
    setPage((prevState) => prevState - 1);
    topScroll();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl">
      {page <= 1 ? null : (
        <button
          onClick={handlerBackPage}
          className="text-color-primary hover:text-color-accent"
        >
          Back Page
        </button>
      )}
      <p className=" text-color-accent">
        {page} of {lastPage}
      </p>
      <button
        onClick={handlerNextPage}
        className="text-color-primary hover:text-color-accent"
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
