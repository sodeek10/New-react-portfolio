import Navbar from "./navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar></Navbar>
      <div className="box">
        <div className="Box1 ">
          <div className="box-1">
            <h1>Aina Sodiq Oladele</h1>
            <h5>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, neque vel sint harum voluptatem laudantium.
            </h5>
          </div>
          <a href="#abouts">
            <button>Let's get started</button>
          </a>
        </div>

        <img src="./DSC_0541.jpg" alt="" className="Sodiq" />
      </div>
    </div>
  );
};

export default Header;
