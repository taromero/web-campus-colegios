Template.notifications.helpers({
  notifications: function() {
    return [
      { title: 'Llegada tarde', medium: 'whatsapp', date: Date.now() },
      { title: 'Examen desaprobado', medium: 'email', date: Date.now() },
      { title: 'Ausencia', medium: 'whatsapp', date: Date.now() }
    ]
  }
})
