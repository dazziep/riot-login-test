<users>
    <div class="container">
        <div each={ users } class="panel panel-primary center-block">
            <div class="panel-body">
                <div class="media">
                    <div class="media-left media-middle">
                        <span class="glyphicon glyphicon-user" style="font-size: xx-large;"></span>
                    </div>
                    <div class="media-body">
                        <div><b>username: { username }</b></div>
                        <div><b>password: { password }</b></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
    var self = this
    self.users = []

    self.on('mount', function() {
        // Trigger init event when component is mounted to page.
        // Any store could respond to this.
        RiotControl.trigger('user_init')
    })

    // Register a listener for store change events.
    RiotControl.on('users_changed', function(users) {
        self.users = users
        self.update()
    })
    </script>

    <style scoped>
        :scope .container{
            margin-top: 10px;
            width: 400px;
        }
    </style>
</users>