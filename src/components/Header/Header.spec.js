import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header'

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('contains a title component', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal('Yelp')
  });

  it('contains a section menu with a title', () => {
    expect(wrapper.find('section').first().text())
      .to.equal('Locations')
  });
})
