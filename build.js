const
  metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  layouts = require('metalsmith-layouts'),
  collections = require('metalsmith-collections'),
  sass = require('metalsmith-sass'),
  copyMdBootstrap = require('./utils/copy-md-bootstrap'),
  permalinks = require('metalsmith-permalinks'),
  metadata = require('metalsmith-metadata'),
  serve = require('metalsmith-serve'),
  watch = require('metalsmith-watch');


metalsmith(__dirname)
  .use(watch({
    paths: {
      'src/**/*': true,
       //if value of 'layouts/**/*' set to true,
       //reload triggers but build is not populated for some reason
      'layouts/**/*': "**/*.md"
    },
    livereload: true
  }))
  .use(markdown({
    site: {
      title: 'Sergey Z. Blog'
    }
  }))
  .use(sass({
    outputDir: 'css/'
  }))
  .use(collections({
    pages: {
      pattern: 'content/pages/*.md'
    },
    posts: {
      pattern: 'content/posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown()) //must go before permalinks
//  .use(permalinks({
//    pattern: ':collections/:title'
//  }))
  .use(layouts({
    engine: 'pug',
    pretty: true
  }))
  .use(copyMdBootstrap())
  .use(serve({
    port: 3000,
    verbose: true,
    cache: 0
  }))
  .destination('./build')
  .build((err) => err ? console.log(err) : null);//must give it a callback
