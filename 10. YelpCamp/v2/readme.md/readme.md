* add description to our campground model
* 

RESTFUL ROUTES
A table of all 7 RESTful routes


Name       Path/URL       HTTP Verb       Purpose/Desc.
=============================================================
INDEX       /dogs       GET         Display a list if all dog 
NEW         /dogs/new   GET         Display form to make a new dog
CREATE      /dogs       POST        Add new dog to DB
SHOW        /dogs/:id   GET         Show  info about one dog
EDIT        /dogs/:id   GET         Show edit form for one dog
UPDATE      /dogs/:id   PUT         Update a particular dog, then redirect somewhere
DESTROY     /dogs/:id   DELETE      Delete a particular dog, then redirect somewhere


REST - a mopping between HTTP routes and CRUD

BLOG

INDEX   /campgrounds
CREAT   /campgrounds/new
READ    / allBlogs
UPDATE  /camgrounds
SHOW    /campgounds/:id

NEW     campgrounds/:id/commemnts/new   GET
CREAT   campgrounds/:id/comments        POST