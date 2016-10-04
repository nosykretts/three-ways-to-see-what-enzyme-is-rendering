import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TagList from './TagList';

chai.use(chaiEnzyme());  // Note the invocation at the end

const tags = [
  {text:'success', className:'btn-success'},
  {text:'warning', className:'btn-warning'},
];

it('<TagList /> correctly displays each tag\'s text', () => {

  const wrapper = shallow(<TagList tags={tags}/>);
  const successDiv = wrapper.find('li').first();

  // "to.have.text()" is the chai/chai-enzyme syntax
  expect(successDiv).to.have.text('control machete');
});
