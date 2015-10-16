riot.tag('users', '<div class="container"> <div each="{ users }" class="panel panel-primary center-block"> <div class="panel-body"> <div class="media"> <div class="media-left media-middle"> <span class="glyphicon glyphicon-user" style="font-size: xx-large;"></span> </div> <div class="media-body"> <div><b>username: { username }</b></div> <div><b>password: { password }</b></div> </div> </div> </div> </div> </div>', 'users .container, [riot-tag="users"] .container{ margin-top: 10px; width: 400px; }', function(opts) {
    var self = this
    self.users = []

    self.on('mount', function() {


        RiotControl.trigger('user_init')
    })

    RiotControl.on('users_changed', function(users) {
        self.users = users
        self.update()
    })
    
});