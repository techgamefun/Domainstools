const urlRegex = /^(https?:\/\/|www\.)[^\/]+/i;

// Example usage:
const testString = blogUrls = [
    "https://www.example.com/blog/post1",
    "http://blog.example.org/article2",
    "https://blog.sample.com/latest",
    "http://www.blogtest.net/featured-article",
    "https://exampleblog.com/blog-post-5",
    "http://blog.example.org/new-entry",
    "https://www.blogsite.net/latest-news",
    "http://www.blogcentral.org/top-10-tips",
    "https://blog.testsite.com/review-article",
    "http://www.exampleblog.net/2023/01/article",
    "https://blog.samplesite.org/tech-update",
    "http://www.blogtestsite.com/how-to-guide",
    "https://blog.example.net/product-review",
    "http://www.blogcentral.com/insights",
    "https://www.blogsite.org/weekly-digest"
  ];

testString.forEach(element => {
    if (urlRegex.test(element)) {
        console.log(element)
    }
  
     
    
});

