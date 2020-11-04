exports.getIndex = (req, res, next) => {
  res.render('index', {pageTitle: 'Decostruire'})
}

exports.getGallery = (req, res, next) => {
  res.render('gallery', {pageTitle: 'Gallery'})
}

exports.getAboutPage = (req, res, next) => {
  res.render('about', {pageTitle: 'About'})
}

exports.getContactPage = (req, res, next) => {
  res.render('contact', {pageTitle: 'Contact'})
}

exports.postContactPage = (req, res, next) => {
  res.render('contact-success', {pageTitle: 'Contact Success'})
}
