import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-full mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-color-primary text-4xl">
          404 | <span className="text-4xl text-color-accent">Not Found</span>
        </h1>
        <Link
          href="/"
          className="text-color-primary hover:text-color-accent transition-all underline text-1xl mt-2"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
