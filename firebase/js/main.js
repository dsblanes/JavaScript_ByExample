// 1. Initialize Firebase



// 2. connect to your Firebase application using your reference URL

  // by default a form submit reloads the DOM which will subsequently reload all our JS
  // to avoid this we preventDefault()

  // grab user's comment from input field

  // clear the user's comment from the input (for UX purposes)

  // create a section for comments data in your db

  // use the set method to save data to the comments




// 3. retrieve comments data when page loads nd when comments are added/updated

  // use reference to database to listen for changes in comments data

    // Get all comments stored in the results we received back from Firebase

    // Set an empty array where we can add new comment element

    // iterate (loop) through all comments coming from database call

      // Create an object literal with the data we'll pass to Handlebars

      // Get the HTML from our Handlebars comment template

      // Compile our Handlebars template

      // Pass the data for this comment (context) into the template

      // push newly created element to array of comments

    // remove all list items from DOM before appending list items

    // append each comment to the list of comments in the DOM



// 4). When page loads, get comments



// 5). Click event to delete comments

  // find comment whose objectId is equal to the id we're searching with



// 6). Click event to like comments

  // find comment whose objectId is equal to the id we're searching with

  // Get number of likes from HTML

  // Convert likes to a number and add a like

  // Update likes property in database


