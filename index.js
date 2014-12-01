
module.exports = {
    compiled: function () {
        var vm = this;
        var $el = this.$el;
        var key = 'elements';

        // Refresh jQuery sortable when we make changes to the listKey array
        vm.$watch(key, function () {
            $($el).sortable('refresh')
        });

        var onStart = function (event, ui) {
            ui.item.data('start', ui.item.index());
        };

        var onUpdate = function (event, ui) {
            var start = ui.item.data('start');
            var end = ui.item.index();
            var array = vm.$get(key) || [];
            var swappedEl = array.splice(start, 1)[0];

            // Move the item to the new position(index) and add back the swapped element
            // which was holding that position
            array.splice(end, 0, swappedEl);
        };

        $($el).sortable({
            start: onStart,
            update: onUpdate
        });
    }
};