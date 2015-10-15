// UserStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of users.
function UserStore() {
    riot.observable(this) // Riot provides our event emitter.

    var self = this

    self.users = []

    // Our store's event handlers / API.
    // This is where we would use AJAX calls to interface with the server.
    // Any number of views can emit actions/events without knowing the specifics of the back-end.
    // This store can easily be swapped for another, while the view components remain untouched.

    self.on('user_add', function(newuser) {
        self.users.push(newuser)
        self.trigger('users_changed', self.users)
        console.log('user_add triggered')
    })

    self.on('user_remove', function() {
        self.users.pop()
        self.trigger('users_changed', self.users)
        console.log('user_remove triggered')
    })

    self.on('user_init', function() {
        self.trigger('users_changed', self.users)
        console.log('user_init triggered')
    })

    // The store emits change events to any listening views, so that they may react and redraw themselves.

}
