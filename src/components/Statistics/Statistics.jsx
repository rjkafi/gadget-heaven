import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    
  } from "recharts";


const Statistics = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        document.title='Statistics || Gadget_Heaven '
        fetch('./gadgetsCards.json')
        .then(res => res.json())
        .then(data => setProducts(data))
       },[])
    return (
        <>
        <div>
        <div>
            <div className="hero  bg-common pb-16  text-white">
                    <div className="hero-content text-center container mx-auto">
                        <div className="flex flex-col px-3 justify-center items-center">
                            <h1 className="text-5xl font-bold">Statistics</h1>
                            <p className="py-6 ">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        {/* fldgjl */}
        <section className="bg-gray-200 py-12 min-h-svh">
        <div className=' mx-auto container'>
            <div className=" px-2">
                <h4  className="text-3xl font-bold text-slate-800">Statistics
                </h4>
            </div>
            {/* bar chart */}
         <div className="w-full max-w-3xl mx-auto my-10">
         <div  style={{ width: "95%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={products}
          margin={{
            left: 60,
            bottom: 65,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis  dataKey="product_title" angle={-25} textAnchor="end" interval={0} />
          <YAxis label={{ value: "Price ($)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="price" fill="purple" barSize={28}  />
        </BarChart >
      </ResponsiveContainer>
    </div>

         </div>

            </div>
        </section>
        </div>
        
        </>

    );
};

export default Statistics;




