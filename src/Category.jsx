import React from 'react';
import Display from './Display';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import data from './data/sample-data';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'sss',
      listing: data, // to be removed
      search: '',
    };
    this.selectCat = this.selectCat.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {

  }

  selectCat(e) {
    this.setState({ category: e.target.id });
  }

  handleClick() {

  }

  handleSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div id="search">
          <input placeholder='Search "couch"' value={this.state.search} onChange={this.handleSearch} />
          <button onClick={this.handleClick}><img src="https://image.flaticon.com/icons/svg/34/34097.svg" alt="icon" /></button>
        </div>
        <div id="category">
          <div>
            <p>Shop By Category</p>
          </div>
          <div>
            <ul>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/amphora_1f3fa.png" alt="icon" />
                <button onClick={this.selectCat} id="ata">Antiques</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/house-building_1f3e0.png" alt="icon" />
                <button onClick={this.selectCat} id="ppa">Appliances</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/artist-palette_1f3a8.png" alt="icon" />
                <button onClick={this.selectCat} id="ara">Arts & Crafts</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/recreational-vehicle_1f699.png" alt="icon" />
                <button onClick={this.selectCat} id="sna">Atvs, Utvs & Snowmobiles</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/gear_2699.png" alt="icon" />
                <button onClick={this.selectCat} id="pta">Auto Parts</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/baby-bottle_1f37c.png" alt="icon" />
                <button onClick={this.selectCat} id="baa">Baby & Kids</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/lipstick_1f484.png" alt="icon" />
                <button onClick={this.selectCat} id="haa">Health & Beauty</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/bicycle_1f6b2.png" alt="icon" />
                <button onClick={this.selectCat} id="bia">Bikes</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/speedboat_1f6a4.png" alt="icon" />
                <button onClick={this.selectCat} id="boo">Boats</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/books_1f4da.png" alt="icon" />
                <button onClick={this.selectCat} id="bka">Books</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/card-file-box_1f5c3.png" alt="icon" />
                <button onClick={this.selectCat} id="bfa">Business</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/oncoming-automobile_1f698.png" alt="icon" />
                <button onClick={this.selectCat} id="cta">Cars & Trucks</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/optical-disc_1f4bf.png" alt="icon" />
                <button onClick={this.selectCat} id="ema">cds, dvd & vhs</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/mobile-phone_1f4f1.png" alt="icon" />
                <button onClick={this.selectCat} id="moa">Mobile Phones</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/dress_1f457.png" alt="icon" />
                <button onClick={this.selectCat} id="cla">Clothes & Accessories</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/lg/57/stamped-envelope_1f583.png" alt="icon" />
                <button onClick={this.selectCat} id="cba">Collectibles</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/personal-computer_1f4bb.png" alt="icon" />
                <button onClick={this.selectCat} id="sya">Computers</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/television_1f4fa.png" alt="icon" />
                <button onClick={this.selectCat} id="ela">Electronics</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/house-with-garden_1f3e1.png" alt="icon" />
                <button onClick={this.selectCat} id="gra">Farm & Garden</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/wrapped-present_1f381.png" alt="icon" />
                <button onClick={this.selectCat} id="zip">Free Stuff</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/couch-and-lamp_1f6cb.png" alt="icon" />
                <button onClick={this.selectCat} id="fua">Furniture</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/package_1f4e6.png" alt="icon" />
                <button onClick={this.selectCat} id="gms">Garage Sales</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/anchor_2693.png" alt="icon" />
                <button onClick={this.selectCat} id="hva">Heavy Equipment</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/bed_1f6cf.png" alt="icon" />
                <button onClick={this.selectCat} id="hsa">Household</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/ring_1f48d.png" alt="icon" />
                <button onClick={this.selectCat} id="jwa">Jewelry</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/door_1f6aa.png" alt="icon" />
                <button onClick={this.selectCat} id="maa">Materials</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/wrench_1f527.png" alt="icon" />
                <button onClick={this.selectCat} id="mpa">Motorcycle Parts</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/racing-motorcycle_1f3cd.png" alt="icon" />
                <button onClick={this.selectCat} id="mca">Motorcycles</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/guitar_1f3b8.png" alt="icon" />
                <button onClick={this.selectCat} id="msa">Music Instruments</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/camera_1f4f7.png" alt="icon" />
                <button onClick={this.selectCat} id="pha">Photo & Video</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/camping_1f3d5.png" alt="icon" />
                <button onClick={this.selectCat} id="rva">RVs</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/basketball-and-hoop_1f3c0.png" alt="icon" />
                <button onClick={this.selectCat} id="sga">Sporting</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/admission-tickets_1f39f.png" alt="icon" />
                <button onClick={this.selectCat} id="tia">Tickets</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/hammer-and-wrench_1f6e0.png" alt="icon" />
                <button onClick={this.selectCat} id="tla">Tools</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/game-die_1f3b2.png" alt="icon" />
                <button onClick={this.selectCat} id="taa">Toys & Games</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/articulated-lorry_1f69b.png" alt="icon" />
                <button onClick={this.selectCat} id="tra">Trailers</button>
              </li>
              <li>
                <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/video-game_1f3ae.png" alt="icon" />
                <button onClick={this.selectCat} id="vga">Video Gaming</button>
              </li>
            </ul>
          </div>
        </div>
        <div id="display">
          {this.state.listing.map(x => <Display listOfItem={x} key={x.pid} />)}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Category;
