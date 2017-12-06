const
  metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  layouts = require('metalsmith-layouts'),
  collections = require('metalsmith-collections'),
  sass = require('metalsmith-sass'),
  copyMdBootstrap = require('./utils/copy-md-bootstrap'),
  permalinks = require('metalsmith-permalinks');


metalsmith(__dirname)
  .use(markdown())
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
    engine: 'pug'
  }))
  .use(copyMdBootstrap())
  .destination('./build')
  .build((err) => err ? console.log(err) : null);//must give it a callback
