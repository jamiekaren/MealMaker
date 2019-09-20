$(document).ready(function() {
    // favoritesContainer holds all of our posts
    var favoritesContainer = $(".fav");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    var posts;
  
    // This function grabs posts from the database and updates the view
    function getPosts() {
      $.get("/api/posts", function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/posts/" + id
      })
        .then(function() {
          getPosts(postCategorySelect.val());
        });
    }
  
    // Getting the initial list of posts
    getPosts();
    // InitializeRows handles appending all of our constructed post HTML inside
    // favoritesContainer
    function initializeRows() {
      favoritesContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      favoritesContainer.append(postsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(post) {
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-default");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostCategory = $("<h5>");
      
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text(post.body);
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostCategory);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      return newPostCard;
    }
  
    // This function figures out which post we want to delete and then calls
    // deletePost
    function handlePostDelete() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      deletePost(currentPost.id);
    }
  
    // This function figures out which post we want to edit and takes it to the
    // Appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      window.location.href = "/cms?post_id=" + currentPost.id;
    }
  
    // This function displays a message when there are no posts
    function displayEmpty() {
      favoritesContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
      favoritesContainer.append(messageH2);
    }
  });