// UserStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of users.
function UserStore() {
    riot.observable(this) // Riot provides our event emitter.

    var self = this

    self.users = []
    self.departments = []

    // Our store's event handlers / API.
    // This is where we would use AJAX calls to interface with the server.
    // Any number of views can emit actions/events without knowing the specifics of the back-end.
    // This store can easily be swapped for another, while the view components remain untouched.
    self.on('user_login', function(user) {
            $.post("https://ev08internalauthorisation/oauth/token",
                {
                    grant_type: "password",
                    username: user.username,
                    password: user.password,
                    client_id: "PortalLocalDev"
                },
                function(data, status){
                    //alert("Data: " + data + "\nStatus: " + status)
                    if(status == 'success')
                    {

                       //quick test...
                        $.ajax({
                                url: 'https://localhost:44300/departments',
                                success: function (d) {
                                    self.departments = d.items
                                    self.trigger('departments_changed', self.departments)

                                },
                                beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization','Bearer ' + data.access_token); }
                            }
                        )

                        localStorage.setItem('access_token', (data.access_token))
                        self.users.push({'username':data.userName})

                        //console.log('user_login triggered')
                        self.trigger('users_changed', self.users)
                    }
                })
        }
    )

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
