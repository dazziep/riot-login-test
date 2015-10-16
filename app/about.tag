<about-page>
    <div if={ router.current.name == 'about' }>
        <h1>Welcome</h1>
        <button onclick={ back }>Go Home</button>
    </div>

    <script>
    this.mixin('rg.router')

    this.back = stateName => {
    this.router.go('home')
    }

    </script>
</about-page>