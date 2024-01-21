import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import { slugify, ImageUrl } from "../../utils";
import { NextSeo } from "next-seo";

// import CategoryCloud from "../../components/CategoryCloud";
// import TagsCloud from "../../components/TagsCloud";

export default function PostPage({ content, frontmatter }) {
  const date = new Date(frontmatter.pubDate);
  // const imageMeta= frontmatter.images.map(
  //     image  =>  {
  //      const imageUrl =  ImageUrl(image)
  //       return {
  //       url: imageUrl,
  //       width: 1224,
  //       height: 724,
  //       alt: frontmatter.title,
  //       type: 'image/jpeg',
  //     }
  //    }
  //   )

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.summary}
        openGraph={{
          url: "https://study4jpsc.com",
          title: frontmatter.title,
          description: frontmatter.summary,
          type: "article",
          article: {
            publishedTime: frontmatter.pubDate,
            authors: ["Study4JPSC"],
            tags: frontmatter.tags,
          },
          // images: imageMeta,
          site_name: "Study4JPSC",
        }}
      />
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content">
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">{frontmatter.category}</span>
                    <span className="mx-1">&bullet;</span>
                    <span>{frontmatter.pubDate}</span>
                  </div>
                  <h1 className="mb-5">{frontmatter.title}</h1>

                  <figure className="my-4">
                    <Image
                      src={frontmatter.image}
                      alt=""
                      className="img-fluid"
                      width={500}
                      height={300}
                    />
                  </figure>

                  <div
                    className=""
                    dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
                  ></div>
                </div>
              </div>

              <div className="col-md-3">
                {/* <RelatedPosts {relatedPosts} /> */}
                {/* <CategoryCloud />
                <TagsCloud /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  //  Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const temppaths = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    console.log(frontmatter.image);

    if (frontmatter.draft === false) {
      return {
        params: {
          slug: filename.replace(".mdx", ""),
        },
      };
    } else {
      return null;
    }
  });
  //   remove null in tempPosts
  const paths = temppaths.filter((path) => {
    return path && path;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
