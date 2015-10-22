<about-page>
    <div if={ router.current.name == 'about' }>

        <departments></departments>

        <button onclick={ back }>Go Home</button>
    </div>

    <script>
    this.mixin('rg.router')

    this.back = stateName => {
    this.router.go('home')
    }

    </script>
</about-page>