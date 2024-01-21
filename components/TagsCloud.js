import { getAllPosts } from './../pages/api/helper';

const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];

console.log(uniqueTags);

const TagsCloud = () => {
  return (
    <div><div className="aside-block">
    <h3 className="aside-title">Tags</h3>
    <ul className="aside-tags list-unstyled">
      {
        uniqueTags.map((tags) => (
          <li>
            <a href={`/tags/${tags}`}>{tags}</a>
          </li>
        ))
      }
    </ul>
  </div></div>
  );
};

export default TagsCloud;