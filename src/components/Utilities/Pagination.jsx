import { CaretRight } from "@phosphor-icons/react";
import { CaretLeft } from "@phosphor-icons/react";

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
          className="text-color-primary hover:text-color-accent mr-4"
        >
          <CaretLeft size={30} />
        </button>
      )}
      <p className=" text-color-accent">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handlerNextPage}
          className="text-color-primary hover:text-color-accent ml-3"
        >
          <CaretRight size={30} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
