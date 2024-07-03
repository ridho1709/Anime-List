import Link from "next/link";

const Header = ({ title, linkHerf, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkHerf && linkTitle ? (
        <Link
          href={linkHerf}
          className="md:text-md text-sm underline hover:text-indigo-500 transition-all "
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
