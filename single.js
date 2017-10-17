var url= location.search.substring(1).split('=')[1];

$.get('https://www.reddit.com' + url + '.json')
    .then(function(sucess){
        var data =sucess[0];
        var post= makeList(data);

        var container= document.createElement('div');
        var header= document.createElement('h2');
        var subreddit=document.createElement('p');
        var op= document.createElement('p');
        var comments= document.createElement('p');

        header.innerText= post.title;
        subreddit.innerText= 'Subreddit: ' + post.subreddit;
        op.innerHTML= 'user:  '+ post.op;
        comments.innerText= post.comments + ' Comments';
        container.appendChild(header);
        container.appendChild(subreddit);
        container.appendChild(op);
        container.appendChild(comments);
        document.body.appendChild(container);
    });




    function makeList(data){
        var children= data.data.children;

        var result= children.map(function(child, i){
            console.log(child);
            var post= {};
            post.title= child.data.title;
            post.url= child.data.url;
            post.permalink= child.data.permalink;
            post.subreddit= child.data.subreddit;
            post.op= child.data.author;
            post.comments= child.data.num_comments;

            return post;
        });
        if (result.length ===1){
            return result[0];
        };
        return result;
    }