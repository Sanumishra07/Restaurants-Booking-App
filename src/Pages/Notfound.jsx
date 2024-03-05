
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Notfound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>Looks like you are lost....</h1>
        <p>We cannot find the things you are looking for..</p>
        <Link t0={"/"}>
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
