import React from 'react';
import Display from './Display';
// import fetch from './api/fetcher';
import data from './api/sample-data';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'sss',
      listing: data
    };
    this.selectCat = this.selectCat.bind(this);
  }

  componentDidMount() {
  // fetch(this.state.category, result => console.log('RESULT FROM CRAILIST', result));
  }

  selectCat(e) {
    this.setState({ category: e.target.id });
  }

  render() {
    return (
      <div className="main">
        <div id="category">
          <div>
            <p>Shop By Category</p>
          </div>
          <div>
            <ul>
              <li>
                <button onClick={this.selectCat} id="ata">Antiques</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="ppa">Appliances</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="ara">Arts & Crafts</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="sna">Atvs, Utvs & Snowmobiles</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="pta">Auto Parts</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="baa">Baby & Kids</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="haa">Health & Beauty</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="bia">Bikes</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="boo">Boats</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="bka">Books</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="bfa">Business</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="cta">Cars & Trucks</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="ema">cds, dvd & vhs</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="moa">Mobile Phones</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="cla">Clothes & Accessories</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="cba">Collectibles</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="sya">Computers</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="ela">Electronics</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="gra">Farm & Garden</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="zip">Free Stuff</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="fua">Furniture</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="gms">Garage Sales</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="hva">Heavy Equipment</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="hsa">Household</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="jwa">Jewelry</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="maa">Materials</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="mpa">Motorcycle Parts</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="mca">Motorcycles</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="msa">Music Instruments</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="pha">Photo & Video</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="rva">RVs</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="sga">Sporting</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="tia">Tickets</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="tla">Tools</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="taa">Toys & Games</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="tra">Trailers</button>
              </li>
              <li>
                <button onClick={this.selectCat} id="vga">Video Gaming</button>
              </li>
            </ul>
          </div>
        </div>
        <div id="display">
          {this.state.listing.map(x => <Display listOfItem={x} key={x.pid} />)}
        </div>
      </div>
    );
  }
}

export default Category;
