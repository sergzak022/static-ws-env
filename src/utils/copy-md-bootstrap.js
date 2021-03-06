const
  bb = require('bluebird'),
  fs = bb.promisifyAll(require('fs')),
  mkdirp = bb.promisify(require('mkdirp')),
  cp = bb.promisify(require('glob-copy'));

module.exports = function copyMdBootstrap() {
  return function( files, metalsmith, done ) {
    let cpCss$ = mkdirp('build/css')
      .then(() => {
        return bb.all([
          cp('node_modules/mdbootstrap/css/bootstrap.min.css', 'build/css/'),
          cp('node_modules/mdbootstrap/css/mdb.min.css', 'build/css/')
        ])
      });

    let cpFonts$ = mkdirp('build/fonts')
      .then(() => {
        return bb.all([
          cp('node_modules/mdbootstrap/fonts/*', 'build/fonts/*'),
        ])
      });

    bb.all([
      cpCss$,
      cpFonts$
    ]).then(() => done());
  }
}
