riot.tag('login', '<div class="container"> <div class="panel panel-primary center-block"> <div class="panel-heading"> Please sign in </div> <div class="panel-body"> <form class="form-signin" onsubmit="{ add }"> <input type="text" name="userName" onkeyup="{ editUserName }" class="form-control" placeholder="User name" required="" autofocus=""> <input type="password" name="password" onkeyup="{ editPassword }" class="form-control" placeholder="Password" required=""> <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> </form> </div> </div> </div>', 'login input, [riot-tag="login"] input,login button, [riot-tag="login"] button{ margin-bottom: 10px; } login .panel, [riot-tag="login"] .panel{ width: 400px; margin-top: 70px; }', function(opts) {
        var self = this
        self.users = []

        this.add = function(e) {
            RiotControl.trigger('user_add', {
                username: self.userName,
                password: self.password
            })
    e.target.reset()
        }.bind(this);

        this.editUserName = function(e) {
            self.userName = e.target.value
        }.bind(this);

        this.editPassword = function(e) {
            self.password = e.target.value
        }.bind(this);

        self.on('mount', function() {


            RiotControl.trigger('user_init')
        })

        RiotControl.on('users_changed', function(users) {
            self.update()
        })
    
});