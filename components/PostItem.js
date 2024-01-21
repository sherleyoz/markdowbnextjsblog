import Link from "next/link";

import { ImageUrl } from "../utils";

export default function PostItem({ post: { post } }) {
  // const imageUrl= process.env.SITE_URL + post.images[0]

  // console.log(imageUrl,' imageUrl ')

  const date = new Date(post.pubDate);

  return (
    // <div className="card mb-4">
    //   <a href={`/blog/${post.slug}`} > <img className="card-img-top" src={ ImageUrl(post.images[0])} alt={post.title} /></a>
    //   <div className="card-body">
    //     <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
    //     <h2 className="card-title">{post.title}</h2>
    //     <p className="card-text">{post.summary}</p>
    //     <Link href={`/blog/${post.slug}`}>
    //       <a className='btn'>Read More</a>
    //     </Link>
    //   </div>
    // </div>

    // <div className="category-content col-md-9">
      // <h3 className="category-title">Category: </h3>
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="d-md-flex post-entry-2 half">
            <a href={`/blog/${post.slug}/`} className="me-4 thumbnail">
              {/* <img
                src={post.data.image.src}
                alt="{post.data.image.alt}"
                className="img-fluid"
              /> */}
            </a>
            <div>
              <div className="post-meta">
                <span className="date">{post.categories}</span>{" "}
                <span className="mx-1">&bullet;</span>{" "}
                <span>{post.pubDate}</span>
              </div>
              <h3>
                <a href={`/blog/${post.slug}/`}>{post.title}</a>
              </h3>
              <p>{post.description}</p>
              <div className="d-flex align-items-center author">
                <div className="name">
                  <h3 className="m-0 p-0">{post.author}</h3>
                </div>
              </div>
            </div>
          </div> 
          </div>
  );
}
