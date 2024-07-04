import Link from "next/link";

const Header = ({ title, linkHerf, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHerf && linkTitle ? (
        <Link
          href={linkHerf}
          className="md:text-md text-sm underline hover:text-color-accent transition-all text-color-primary "
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
