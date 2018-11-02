jQuery(function($) {
  $("#submit").on("click", function() {
    $.getJSON('https://api.guildwars2.com/v2/guild/A76E8CA4-7596-E311-941E-AC162DAE5AD5/upgrades?access_token=8F1820AA-0D42-CB4F-870F-01C32BE956EF5135E5D6-1AFE-46AA-BB49-14EC8B3D65B3', function(data) {
      console.log(data);
    });
  });
});
