//this function can remove the blanks when updating a file
//this file was created for the original PATCH call on the routes.js file
//However, is not being used for now - PA
module.exports = function (req, res, next) {
  // we don't know the name of the object in `req.body`, so we'll apply this to
  // ALL objects in `req.body`
  Object.values(req.body).forEach(obj => {
    for (const key in obj) {
      if (obj[key] === '') {
        // removes both the key and the value, preventing it from being updated
        delete obj[key]
      }
    }
  })

  // pass `req` and `res` on to the route handler
  next()
}
