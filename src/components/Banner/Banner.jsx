import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='relative -mt-10'>
                {/* Banner */}
            <div >
                <div className="hero bg-common min-h-screen text-white">
                    <div className="hero-content text-center container mx-auto">
                        <div >
                            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with  Gadget Heaven Accessories</h1>
                            <p className="py-6 ">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <button className="btn bg-white text-common rounded-full text-xl font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner card */}
            <div className='absolute left-1/2 transform -translate-x-1/2  md:bottom-[-270px] z-[100]'>
              <div className='max-w-2xl border rounded-md  p-3' >
                <div>
                <img  className=' rounded-md ' src={'https://i.ibb.co.com/1sgLqB7/banner.jpg'} alt="" />
                </div>
              </div>
            </div>
            </div>

        </>
    );
};

export default Banner;