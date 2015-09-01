Template.roleSelector.onRendered(function() {
  $('li').click(function(a, b) {
    role.set($(this).data('role'))
  })
})
