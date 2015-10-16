<app>
    <login></login>
    <users></users>
    <about-page></about-page>

    <script>
        this.mixin('rg.router')

        this.router.add({
            name: 'home',
            url: ''
        })
        .add({
            name: 'about',
            url: 'about'
        })


      /*  this.goAbout = () => this.router.go('about') */

        this.startRouter = () => this.router.start()
        this.stopRouter = () => this.router.stop()

        this.router.on('start', () => {
            this.router.go('home')
            console.log('started')})
        this.router.on('stop', () => console.log('stopped'))
        this.router.on('add', state => console.log('added', state))
        this.router.on('remove', state => console.log('removed', state))
        this.router.on('go', (curr, prev) => console.log(curr, prev))

    </script>
</app>