
module.exports = {
    ready: function () {
        var vm = this;
        var options = this.$data.$sortable || {};
        var $el = options.$el || this.$el;


        var prevStart = options.start ? options.start : function() {};
        options.start = function (event, ui) {
            ui.item.data('start', ui.item.index());

            // Call the user specified .start callback
            prevStart(event, ui);
        };

        var prevUpdate = options.update ? options.update : function() {};
        options.update = function (event, ui) {
            var start = ui.item.data('start');
            var end = ui.item.index();
            var listKey = options.key ? options.key : 'elements';
            var swappedEl = vm[listKey].splice(start, 1)[0];

            // Move the item to the new position(index) and add back the swapped element
            // which was holding that position
            vm[listKey].splice(end, 0, swappedEl);

            // Call the user specified .update callback
            prevUpdate(event, ui);
        };

        $($el).sortable(options);
    }
};