import React from 'react';
import { shallow } from 'enzyme';
import { prettyPrint } from 'html';
import TagList from './TagList';

const tags = [
  {text:'success', className:'btn-success'},
  {text:'warning', className:'btn-warning'},
];

it('<TagList /> correctly displays each tag\'s text', () => {

  const wrapper = shallow(<TagList tags={tags}/>);

  console.log(
    prettyPrint(wrapper.html(), { indent_size: 2 })
  );

  const successDiv = wrapper.find('li').first();
  const warningDiv = wrapper.find('li').last();

  expect(successDiv.text()).toContain('success');
  expect(warningDiv.text()).toContain('warning');
});
