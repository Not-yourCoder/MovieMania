import { Link } from 'react-router-dom';
import "./_movieCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Moviecard = ({ movie }) => {
  return (
    <>
      <div className="card-container bg-lime-500 w-[14rem] py-4 shadow-lg rounded-md">
        <div className="card-image-container w-full ">
          <LazyLoadImage
            src={movie.img_link}
            alt={movie.name}
            className="w-full object-contain "
            loading="lazy"
            effect="blur"
          />
        </div>
        <div className="card-details flex flex-col mx-2 ">
          <div className="title text-2xl my-2">
            <span>
              <a href='https://arya-gg.com'>{movie.name}</a>
            </span>
          </div>
          <div className="genre text-center my-2">
            <span>{movie.genre}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
