const
  metalsmith = require('metalsmith'),
  markdown = require('metalsmith-markdown'),
  templates = require('metalsmith-templates'),
  collections = require('metalsmith-collections'),
  permalinks = require('metalsmith-permalinks');

metalsmith(__dirname)
  .use(markdown())
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
  .use(templates('pug'))
  .destination('./build')
  .build((err) => err ? console.log(err) : null);//must give it a callback
