<departments>
    <div class="container">
        <div each={ departments } class="panel panel-primary center-block">
            <div class="panel-body">
                <div><b>{ name }</b></div>
            </div>
        </div>
    </div>

    <script>
        var self = this
        self.departments = []

        self.on('mount', function() {
            // Trigger init event when component is mounted to page.
            // Any store could respond to this.
            RiotControl.trigger('user_init')
        })

        // Register a listener for store change events.
        RiotControl.on('departments_changed', function(departments) {
            self.departments = departments
            self.update()
        })
    </script>
</departments>