import React from 'react';
import { shallow } from 'enzyme';
// import { expect } from 'chai';
import TagList from './TagList';

const tags = [
  {text:'success', className:'btn-success'},
  {text:'warning', className:'btn-warning'},
];

it('<TagList /> correctly displays each tag\'s text', () => {

  const wrapper = shallow(<TagList tags={tags}/>);
  const successDiv = wrapper.find('li').first();
  const warningDiv = wrapper.find('li').last();

  console.log(successDiv.debug());

  expect(successDiv.text()).toContain('success');
  expect(warningDiv.text()).toContain('warning');
});

it('<TagList /> correctly displays each tag\'s class name', () => {

  const wrapper = shallow(<TagList tags={tags}/>);
  const successDiv = wrapper.find('.btn-success');
  const warningDiv = wrapper.find('.btn-warning');

  expect(successDiv.html()).toContain('btn-success');
  expect(warningDiv.html()).toContain('btn-warning');
});
