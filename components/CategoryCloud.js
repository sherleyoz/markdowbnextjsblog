import { getAllPosts } from "./../pages/api/helper";

const uniqueCategories = [
  ...new Set(allPosts.map((post) => post.data.category).flat()),
];

console.log(uniqueCategories);

const CategoryCloud = () => {
  return (
    <div className="aside-block">
      <h3 className="aside-title">Categories</h3>
      <ul className="aside-links list-unstyled">
        {uniqueCategories.map((category) => (
          <li>
            <a href={`/category/${category}`}>
              <i className="bi bi-chevron-right"></i>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCloud;
