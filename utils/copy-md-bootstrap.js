const
  bb = require('bluebird'),
  fs = bb.promisifyAll(require('fs')),
  mkdirp = bb.promisify(require('mkdirp')),
  cp = bb.promisify(require('glob-copy'));

//function mkdirDeep(path) {
//  var folders = path.split('/');
//
//  (iterate (folders, idx) {
//
//    if ( !folders[idx - 1] ) return;
//
//    let path = folders
//      .slice(0, 1)
//      .join('/');
//
//    fs.readdirAsync(path)
//      .catch((e) => {
//        return fs.mkdirAsync(path);
//      })
//      .then(() => {
//        iterate(folders, idx + 1)
//      });
//
//  })(folders, 1)
//}

module.exports = function copyMdBootstrap() {
  return function( files, metalsmith, done ) {
    let cpCss$ = mkdirp('build/css')
      .then(() => {
        return bb.all([
          cp('node_modules/mdbootstrap/css/bootstrap.min.css', 'build/css/'),
          cp('node_modules/mdbootstrap/css/mdb.min.css', 'build/css/')
        ])
      });

    let cpFonts$ = mkdirp('build/font/roboto')
      .then(() => {
        return bb.all([
          cp('node_modules/mdbootstrap/font/roboto/*', 'build/font/roboto'),
        ])
      });

    bb.all([
      cpCss$,
      cpFonts$
    ]).then(() => done());

//    return fs.readdirAsync('build')
//      .catch((e) => {
//        console.log('does not have build');
//        return fs.mkdirAsync('build');
//      })
//      .then(() => {
//        return fs.readdirAsync('build/css')
//      })
//      .catch((e) => {
//        return fs.mkdirAsync('build/css');
//      })
//      .then(() => {
//        return fs.readdirAsync('build/css/mdbootstrap')
//      })
//      .catch((e) => {
//        return fs.mkdirAsync('build/css/mdbootstrap');
//      })
//      .then(() => {
//        return bb.all([
//          cp('node_modules/mdbootstrap/css/bootstrap.min.css', 'build/css/mdbootstrap/bootstrap.min.css'),
//          cp('node_modules/mdbootstrap/css/mdb.min.css', 'build/css/mdbootstrap/mdb.min.css')
//        ])
//      })
//      .then(() => done());
  }
}
