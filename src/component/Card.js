import React from "react";

const Card = (props) => {
  //   let right = 100;
  const [isHovered, setIsHovered] = React.useState(false);
  const [right, setRight] = React.useState("full");

  const handleMouseEnter = () => {
    // setTimeout(() => {
    // }, 1000);
    setIsHovered(true);
    setRight(0);
  };

  const handleMouseLeave = () => {
    // setTimeout(() => {
    setRight("full");
    // }, 1000);
    setIsHovered(false);
  };
  //   let style = {
  //     "#transitionRight:hover": {
  //       transitionDuration: "1.5s",
  //       transitionTimingFunction: "linear",
  //       transitionProperty: "all",
  //     },
  //   };

  return (
    <div
      className="relative max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden flex justify-center flex-col items-center  h-fit m-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="div">
        <img
          className={`w-full h-fit object-cover aspect-auto ${
            isHovered && `blur-lg duration-500`
          }`}
          src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          alt={props.title}
          id="main"
        />

        {
          <>
            <div
              className={` top-0 absolute bottom-0 left-${right} duration-700 right-${right} h-full`}
              // style={style.transitionRight}
            >
              {/* <div> */}
              <div className="absolute top-0 left-0 right-0 bottom-0  bg-purple-300 bg-opacity-20  z-20"></div>
              <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 p-4">
                <div className=" h-1/2 text-ellipsis overflow-hidden ... overflow-hidden opacity-full z-20 text-center text-black-600">
                  <p className="text-lg font-bold h-full ">{props.overview}</p>
                  <p className="text-sm">{props.release_date}</p>
                </div>
              </div>
            </div>

            {/* </div> */}
          </>
        }
      </div>
      <div className="p-4 z-50 bg-white w-full ">
        <h3 className="text-lg font-medium text-gray-800 text-center">
          {props.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
