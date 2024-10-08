import Link from "next/link";

function NotFoundComponent({ found }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-[30px] font-bold text-center py-6">{found}</h1>
      <span className="text-color_200">
        {"You can come back the "}
        <Link className="text-color_100 underline" href="/Home">
          Home
        </Link>
        {" again."}
      </span>
    </section>
  );
}

export default NotFoundComponent;
