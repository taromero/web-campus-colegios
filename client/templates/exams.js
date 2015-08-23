Template.exams.helpers({
  exams: function() {
    return Exams.find().map(function(exam) {
      exam.score = Math.floor((Math.random() * 10) + 1)
      return exam
    })
  }
})
