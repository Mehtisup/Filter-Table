<script>
$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = 
        $(this).val().toLowerCase();
        $("#list tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
})
</script>
