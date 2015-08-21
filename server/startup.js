Meteor.startup(function() {
  if (Meteor.users.find().count() <= 0) {
    Seed.all()
    Seed.create(14).exams()
    Seed.create(50).examScores()
  }
})
