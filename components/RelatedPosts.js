import { getAllPosts } from "./../pages/api/helper";

const relatedPosts = allPosts
  .filter(
    (post) => post.data.category === category && post.data.title !== title
  )
  .slice(0, 3);

const RelatedPosts = () => {
  return (
    <div className="aside-block">
      <ul
        className="nav nav-pills custom-tab-nav mb-4"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-popular-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-popular"
            type="button"
            role="tab"
            aria-controls="pills-popular"
            aria-selected="true"
          >
            Related Posts
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-popular"
          role="tabpanel"
          aria-labelledby="pills-popular-tab"
        ></div>
        {relatedPosts.map((post) => (
          <div className="post-entry-1 border-bottom">
            <div className="post-meta">
              <span className="date">{post.data.category}</span>
              <span className="mx-1">&bullet;</span>
              <span>{post.data.pubDate.toDateString()}</span>
            </div>
            <h2 className="mb-2">
              <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
            </h2>
            <span className="author mb-3 d-block">{post.data.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
// Sidebar
