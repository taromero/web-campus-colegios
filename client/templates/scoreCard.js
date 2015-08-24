Template.scoreCard.helpers({
  subjects: function() {
    return Subjects.find()
  },
  randomScore: function() {
    return Math.floor((Math.random() * 6) + 5)
  }
})
