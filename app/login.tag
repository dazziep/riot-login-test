<login>
    <div class="container login-box">

    <form class="form-signin" onsubmit={ add }>
    <h2 class="form-signin-heading">Please sign in</h2>

    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">

    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>

    </div>

    <script>
        var self = this;

        add(e) {
            RiotControl.trigger('user_add', { username: 'sid@sid.com', password: 'test3' })
        }
    </script>

    <style>
        input, button {
            margin-bottom: 10px;
        }

        .login-box {
            width: 400px;
            margin-top: 70px;
            border: solid 1px #eee;
            padding: 15px;
            background-color: #eee;
        }
    </style>
</login>