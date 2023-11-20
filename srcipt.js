document.getElementById("fetch-posts").onclick = function() {
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            let posts = JSON.parse(xhr.responseText);
           console.log(posts);
            let postListHTML = "";
            for (let post of posts) {
                
                postListHTML +=
                "" + post.title + "" + post.body + "";

            }
            document.getElementById(
                "post-list-container"
            ).innerHTML = postListHTML;
        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
};