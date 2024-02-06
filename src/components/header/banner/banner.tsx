import "./banner.scss";
import Card from '../card/card';

function Banner() {
  return (
    <>
      <div className="banner">
        <h1>Showcase Your Work & Get Paid</h1>
        <h4>Join Behance, the world's largest creative network</h4>
        <div className="card-container">
          <Card />
        </div>
      </div>
    </>
  )
}

export default Banner