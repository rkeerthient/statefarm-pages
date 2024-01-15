import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";

type ReviewsProps = {
  reviewTitle: string;
  reviewDescription?: any;
  reviewsData: any[];
};

const ReviewsCarousel = ({
  reviewTitle,
  reviewDescription,
  reviewsData,
}: ReviewsProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto max-w-7xl p-8 reviews">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl tracking-tight headColor sm:text-4xl ">
          {reviewTitle}
        </h2>
        {reviewDescription && <div>{reviewDescription}</div>}
      </div>
      <div className="my-4 ">
        <Slider {...settings} adaptiveHeight={true}>
          {reviewsData &&
            reviewsData.map((item: any, index: any) => (
              <figure
                key={index}
                className="rounded-2xl   !h-[337px] p-6 shadow-lg ring-1 ring-gray-900/5"
              >
                <blockquote className="text-gray-900">
                  <p className="mb-4">
                    Posted on{" "}
                    {new Date(Date.parse(item.date)).toLocaleDateString(
                      "en-US"
                    )}
                  </p>
                  <p className="text-sm">{`“${item.review}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div>
                    <StarRating selectedStars={item.rating}></StarRating>
                    <div className="font-semibold">{item.authorName}</div>
                    <div className="text-gray-600">{item.authorEmail}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
