<login>
    <div class="container" if={ router.current.name == 'home' }>
        <div class="panel panel-primary center-block">
            <div class="panel-heading">
                Please sign in
            </div>
            <div class="panel-body">
                <form class="form-signin" onsubmit={ add }>
                    <input type="text" name="userName" onkeyup={ editUserName } class="form-control" placeholder="User name" required="" autofocus="">
                    <input type="password" name="password" onkeyup={ editPassword } class="form-control" placeholder="Password" required="">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    </div>



    <script>
        this.mixin('rg.router')

       var self = this
        self.users = []

       self.add = (e) => {
            RiotControl.trigger('user_add', {
                username: self.userName,
                password: self.password
            })
            e.target.reset()
        }

        self.editUserName = (e) => self.userName = e.target.value
        self.editPassword = (e) => self.password = e.target.value

        self.on('mount', function() {
            // Trigger init event when component is mounted to page.
            // Any store could respond to this.
            RiotControl.trigger('user_init')
        })

        // Register a listener for store change events.
        RiotControl.on('users_changed', function(users) {
            self.router.go('about')
        })
    </script>

    <style scoped>
       :scope

        input, button {
            margin-bottom: 10px;
        }

       .panel {
            width: 400px;
            margin-top: 70px;
        }
    </style>
</login>