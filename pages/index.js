
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo';
import Post from '../components/Post'
import HeroSlider from "../components/HeroSilder";
import { sortByDate, slugify,ImageUrl} from '../utils'

import FeaturedPosts from '../components/FeaturedPosts';
import Categories from '../components/Categories/Categories';

export default function Home({ posts }) {


  return (
    <div>
      <NextSeo
        title="Welcome to Study4JPSC"
        description="Clear JPSC"
        openGraph={{
          url: 'http://study4jpsc.com',
          title: 'Welcome to Study4JPSC',
          description: 'Clear JPSC',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Study4JPSC',
        }}      
      />
        <HeroSlider /> 
        <FeaturedPosts />
        <Categories />
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))


  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    if (frontmatter.draft === false) {
      return {
        slug,
        frontmatter,
      }
    } else {
      return null
    }

  })

  //  remove null in tempPosts 
  const posts = tempPosts.filter(
    post => {
      return post && post
    }
  )
  const jsonString = JSON.stringify(posts)
  fs.writeFileSync('./search.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}