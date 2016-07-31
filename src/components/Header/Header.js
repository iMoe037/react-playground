import React from 'react';
import { Link } from 'react-router';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          Locations
        </section>
      </div>
    )
  }
}

export default Header
