const Footer = () => {
    return ( 
        <div className=" h-full">
            < footer className=" w-full min-h-[300px] absolute mt-auto bg-slate-900 flex flex-col justify-center items-center" id="footer">
                <div className=" mx-[5vw] mt-[5vw] mb-[5vw] flex flex-col justify-center items-center text-white text-justify">
                <span className=" text-2xl">
                Bike Rentals in Bangalore: Choose Your Two-Wheeled Companion
                </span>
                <br /><br />
                <span >
                Welcome to Royal Brothers, Bangalore's premier bike rental service. Royal Brothers is the first startup to obtain a license to operate bike rentals in Bangalore. Whether you're looking for 2-wheeler rental in Bangalore for a short-term or a long-term lease, we have the perfect ride for you. We offer a wide variety of vehicles starting from scooters such as Activa, Dio, Aprilia SR, TVS Ntorq, Ather, and Aviator to powerful bikes such as Royal Enfield Classic 350, KTM Duke 200, BMW, Yamaha Fazer, etc. With the mission to “Reimagine mobility powered by trust”, our single point of focus has been to provide a seamless customer experience.
                <br /><br />

                Now you can experience a hassle-free and convenient way to rent bikes in Bangalore with our dedicated bike rental app. Available for both Android and iOS devices. Our user-friendly app allows you to effortlessly browse our wide selection of bikes or scooters, choose the perfect ride for your needs, and book it with just a few taps. Skip the queues and paperwork, and enjoy a seamless and efficient rental experience right from your smartphone. Download our bike rental app today and unlock the freedom to explore Bangalore on two wheels at your convenience.
                </span>
                <br /><br />
                <span className=" text-2xl">
                Self Drive Bikes in Bangalore for Easy Commute
                </span> <br /><br />
                <span >
                Bike rentals is a shared mobility offering that allows users to own the vehicle for only the duration of their need and return after it. It is a much better option economically. Users do not have to invest a huge sum of money to buy vehicles and instead spend a small amount as and when they need a two wheeler. Users also need not take the burden of insurance and maintenance. We also provide 24/7 roadside assistance to customers who rent a bike in Bangalore.

                In addition to offering bikes for rent online, we also have a range of rental packages to fit your budget and duration of stay. Our daily rental rates are competitive and affordable, and we offer discounts for longer rentals. We also have a range of rental add-ons such as helmet rentals, protective gear, and insurance to ensure your safety and peace of mind.
                <br /><br />

                Two wheelers on rent in Bangalore is a much safer alternative to public transport. Users can travel to places without being dependent on anyone else while also maintaining social distance. Renting self-ride bikes in Bangalore is also a safer alternative in terms of safety to cabs because the user doesn’t share the ride with anyone else.
                </span>
                </div>
                <div className="line h-[0.5px] w-[70vw] bg-white"></div>
                <div className="message w-full min-h-[30vw] flex flex-col justify-center items-center">
                    <span className=" text-2xl text-white mb-[5vh]">Send us a message</span>
                    <div className="email border-white w-[30vw] h-[3vw] rounded-xl border-[1px]"></div>
                    <div className="message border-white w-[30vw] h-[10vw] rounded-xl border-[1px] mt-[1vw]"></div>
                   <button className=" h-[3vw] w-[10vw] bg-white mt-[1vw] rounded-xl" type="submit"><span className=" bg-transparent text-xl">Submit</span></button>
                </div>

               
            </footer>
        </div>

        
     );
}
 
export default Footer;
