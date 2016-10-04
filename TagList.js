import React, {
  PropTypes,
} from 'react';

const TagList = ({tags}) => {
  const list = tags.map(
    tag => {
      let className = `btn btn-sm ${tag.className}`;
      return (
        <li key={tag.text} className="tag-list-item">
          <div className={className}>
            {tag.text}
          </div>
        </li>
      )
    }
  );
  return (
    <ul className="tag-list">
      {list}
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      className: PropTypes.string
    })
  ).isRequired
};

export default TagList;
