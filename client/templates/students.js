Template.students.helpers({
  students: function () {
    return Meteor.users.find().map(function(user) {
      // user.email = user.emails[0]
      user.completeName = user.profile.lastName + ', ' + user.profile.firstName
      user.shortName = user.profile.lastName + ', ' + user.profile.firstName[0] + '.'
      return user
    })
  }
})
