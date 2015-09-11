Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function () {
  this.redirect('/curso')
})

Router.route('/curso', {
  template: 'course'
})

Router.route('/materia', {
  template: 'subject'
})

Router.route('/examen', {
  template: 'exam'
})

Router.route('/configuracion', {
  template: 'configuration'
})

Router.route('/asistencias', {
  template: 'attendances_individual'
})

Router.route('/boletin', {
  template: 'scoreCard'
})

Router.route('/login', {
  template: 'login'
})

Router.route('/subida', {
  template: 'fileUpload'
})

Router.route('/cursos', {
  template: 'courses'
})

Router.route('/nueva-notificacion', {
  template: 'createNotification'
})

Router.route('/nuevo-examen', {
  template: 'createExam'
})

Router.route('/estudiante', {
  template: 'student'
})
