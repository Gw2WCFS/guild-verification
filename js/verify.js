jQuery(function($) {
  $("#submit").on("click", function() {
    $.getJSON('https://api.guildwars2.com/v2/guild/A76E8CA4-7596-E311-941E-AC162DAE5AD5', function(data) {
      console.log(data);
    });
  });
});
