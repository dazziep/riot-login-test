riot.tag('login', '<div class="container login-box"> <form class="form-signin" onsubmit="{ add }"> <h2 class="form-signin-heading">Please sign in</h2> <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""> <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""> <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button> </form> </div>', 'input, button { margin-bottom: 10px; } .login-box { width: 400px; margin-top: 70px; border: solid 1px #eee; padding: 15px; background-color: #eee; }', function(opts) {
        var self = this;

        this.add = function(e) {
            RiotControl.trigger('user_add', { username: 'sid@sid.com', password: 'test3' })
        }.bind(this);
    
});