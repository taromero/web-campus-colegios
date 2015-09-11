Template.registerHelper('formatDate', function (date) {
  return moment(date).format('DD-MM-YYYY')
})

window.role = new ReactiveVar('directive')
Template.registerHelper('isDirective', function () {
  return role.get() === 'directive'
})
