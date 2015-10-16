riot.tag('app', '<login></login> <users></users> <about-page></about-page>', function(opts) {
        this.mixin('rg.router')

        this.router.add({
            name: 'home',
            url: ''
        })
        .add({
            name: 'about',
            url: 'about'
        })


      

        this.router.on('start', () => console.log('started'))
        this.router.on('stop', () => console.log('stopped'))
        this.router.on('add', state => console.log('added', state))
        this.router.on('remove', state => console.log('removed', state))
        this.router.on('go', (curr, prev) => console.log(curr, prev))
    
});