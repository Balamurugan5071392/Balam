let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 123,
    comments: [
        { author:'a', body:'b' },
        { author:'a', body:'b' }
    ],
    isLive: true
}

console.log(post)

function Post(title,body,author){
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false

 }

 console.log(new Post('a','b','bla'))