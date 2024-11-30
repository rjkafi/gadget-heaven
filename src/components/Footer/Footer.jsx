

const Footer = () => {
    return (
       <div className="bg-base-100">
        <div className="container mx-auto ">
    <div className="border-b ">
      <footer className="footer footer-center  p-10">
  <nav>
    <div className="grid grid-flow-col gap-4">
      
     
      <a>
      <h3 className="text-2xl font-bold">Gadget Heaven</h3>
      <p className="text-lg font-semibold">Leading the way in cutting-edge technology and innovation.</p>
      </a>
      
    </div>
  </nav>
</footer>
    </div>
        
   <div>
      <footer className="footer  p-10">
          
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        </div>
      </div>

       </div>

    );
};

export default Footer;