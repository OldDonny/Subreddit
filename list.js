$.get('https://www.reddit.com/r/worldnews.json')
.then(function(sucess){
    var posts= makeList(sucess)
    console.log(sucess);
    
    posts.forEach(function(post) {
        var container= document.createElement('div');
        var heading=document.createElement('h2');
        var link=document.createElement('a');
        var info= document.createElement('p')
        var upvotes=document.createElement('p')
        var op=document.createElement('p');
        
        link.setAttribute('href', 'single.html?url='+ post.permalink);
        op.innerText= 'OP '+post.op;
        upvotes.innerText='Upvotes '+ post.upvote;
        heading.innerText=post.title;
        link.appendChild(heading);
        container.appendChild(link);
        container.appendChild(upvotes);
        container.appendChild(op)
        document.body.appendChild(container);
    });
});



function makeList(data){
    var children= data.data.children;

        return children.map(function(child, i){
            var post={};

            post.title= child.data.title;
            post.url=child.data.url;
            post.permalink=child.data.permalink;
            post.thumbnail=child.data.thumbnail;
            post.upvote=child.data.ups;
            post.op=child.data.author;
        return post;

        console.log(data);
        });
};



