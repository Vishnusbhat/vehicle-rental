import { TypeAnimation } from "react-type-animation";
const Slogan = () => {
    return ( 
        <div className=" text-[4vw] absolute top-[34vw] font-text left-[55vw] z-0">
            <TypeAnimation
        sequence={[
         
         'Book',
         2000, 
         'Ride',
         2000,
         'Enjoy',
         2000,
        'Discover',
         2000
         ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
        />
        </div>
     );
}
 
export default Slogan;
