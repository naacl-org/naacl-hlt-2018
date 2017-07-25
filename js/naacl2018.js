/**
 * Created by limteng on 7/21/17.
 */
$(document).ready(function () {

}).on('mouseenter', 'span.scratch', scratch_span_hover);

function scratch_span_hover() {
    $(this).delay(2000).addClass('scratched');
}