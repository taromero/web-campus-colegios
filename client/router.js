Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {
  template: 'course',
})

Router.route('/subject', {
  template: 'subject',
})

Router.route('/examen', {
  template: 'examen',
})

Router.route('/configuration', {
  template: 'configuration',
})
