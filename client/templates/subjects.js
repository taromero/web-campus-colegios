Template.subjects.helpers({
  subjects: function() {
    var subjects = Subjects.find()
    return subjects.map(function(subject) {
      subject.teacher = Meteor.users.findOne(subject.teacher_id)
      return subject
    })
  }
})
