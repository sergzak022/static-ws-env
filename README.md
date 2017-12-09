# Sergey Z Blog Environment

## Quickstart

run `npm install` to install all dependencies.

run `npm start` to start a file server that listens on port 3000

## Description

##TODO
  * Add simple front page, with links to `about` and `posts`
  * Add pages: posts, about, contact, post
  * Use excerpts plugin to list articles with first paragraph
  * Integrate with contentful plugin
  * Add disqus comment widgets plugin
  * Add google analytics plugin
  * Add metalsmith-js-packer
  * Implement search
  * Add publish plugin
  * Add robots.txt file generation
  * Add metalsmith-metadata to share data for templates
  * clean up build.js and add configurations file for it
  * add subscription

## DONE

  * Add template parser
  * Add bootstrap and bootstrap materiala
  * Add server to server assets (use meltasmith-server)
  * Add watchers for src files
  * Add sass preprocessing

## NOTES

Need 4 pages: index ( posts ), about, contact, post.
I'll create a main template with a head and a body.
Body will have header, nav, content, footer.

Posts will insert posts in the main template content section.
Posts should extend main, and replace content block


structure

posts

main/
  about
  contact
  articles
  article






