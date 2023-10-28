import { TypeAnimation } from "react-type-animation";
const Slogan = () => {
  return (
    <div className=" lg:text-[3rem] absolute xl:top-[700px] font-text xl:right-[250px] lg:right-[200px] lg:top-[600px] md:top-[450px] md:right-[50px] md:text-[2.5rem] vsm:top-[165vw] vsm:right-[18vw] vsm:text-[7vw]">
      <TypeAnimation
        sequence={["Book", 2000, "Ride", 2000, "Enjoy", 2000, "Discover", 2000]}
        wrapper="span"
        speed={1}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Slogan;
