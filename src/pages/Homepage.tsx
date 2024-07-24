import Table from "../components/Table";
import GraphicLine from "../components/GraphicLine";
import GraphicCell from "../components/GraphicCell";

const Homepage = () => {
  return (
    <div>
      Homepage
      <div id="hero">
        <div className="container">
          <div className="hero">
            <GraphicCell />
            <GraphicLine />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
