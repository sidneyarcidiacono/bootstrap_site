exports.getIndex = (req, res, next) => {
  res.render('index', {pageTitle: 'Decostruire'})
}

exports.getGallery = (req, res, next) => {
  res.render('gallery', {pageTitle: 'Gallery'})
}

exports.getAboutPage = (req, res, next) => {
  res.render('about', {pageTitle: 'About'})
}
