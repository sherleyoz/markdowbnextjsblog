// import fs from "fs";
// import path from "path";
import SITE_URL from "../config";

// export function getAllPosts() {
//   // Get files from the posts dir
//   const postsDirectory = path.join("posts");
//   const filenames = fs.readdirSync(postsDirectory);

//   return filenames.map((filename) => {
//     const file = fs.readFileSync((path.join("posts"), filename), "utf8");
//   });
// }

// export function getPostBySlug (slug) {
  
// }

export function sortByDate(a, b) {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

export function ImageUrl(url) {
  
  return SITE_URL + url
  
}