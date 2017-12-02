global.Seed = {
  all: function () {
    var creds = {
      client_email: Meteor.settings.spreadsheet.client_email,
      private_key: Meteor.settings.spreadsheet.private_key
    }

    createAdmin('teacher')
    createSubjects()
    createStudents()
    createAdmin('directive')

    function createAdmin (role) {
      console.log('Seeding', role)
      var directivesSheet = new GoogleSpreadsheet(
        Meteor.settings.spreadsheet[role + 's_file_id']
      )
      directivesSheet.useServiceAccountAuth(creds)
      var directiveRows = directivesSheet.getRows(1)
      directiveRows.forEach(createDirective)

      function createDirective (row) {
        var userId = Accounts.createUser({
          email: row.email,
          password: row.dni
        })
        Roles.addUsersToRoles(userId, [role])
        Meteor.users.update(userId, {
          $set: {
            'profile.firstName': row.nombre,
            'profile.lastName': row.apellido,
            'profile.document_id': row.dni,
            'profile.phoneNumber': row.telefono
          }
        })
      }
    }

    function createStudents () {
      console.log('Seeding students')
      Meteor.settings.spreadsheet.student_files.forEach(function (
        studentFileId
      ) {
        var studentsSheet = new GoogleSpreadsheet(studentFileId)
        studentsSheet.useServiceAccountAuth(creds)

        var courseName = studentsSheet.getInfo().title
        var course = Courses.findOne({ name: courseName })
        var courseId = course
          ? course._id
          : Courses.insert({ name: courseName })
        var rows = studentsSheet.getRows(1)
        rows.forEach(createStudent)

        function createStudent (row) {
          var userId = Accounts.createUser({
            email: row.email,
            password: row.dni
          })
          Roles.addUsersToRoles(userId, ['student'])
          Meteor.users.update(userId, {
            $set: {
              courseId: courseId,
              'profile.firstName': row.nombre,
              'profile.lastName': row.apellido,
              'profile.document_id': row.dni,
              'profile.phoneNumber': row.telefono
            }
          })
        }
      })
    }

    function createSubjects () {
      console.log('Seeding subjects')
      Meteor.settings.spreadsheet.subject_files.forEach(function (
        subjectFileId
      ) {
        var subjectSheet = new GoogleSpreadsheet(subjectFileId)
        subjectSheet.useServiceAccountAuth(creds)

        var courseName = subjectSheet.getInfo().title
        var course = Courses.findOne({ name: courseName })
        var courseId = course
          ? course._id
          : Courses.insert({ name: courseName })

        var rows = subjectSheet.getRows(1)
        rows.forEach(createSubject)

        function createSubject (row) {
          if (row.nombre !== '\n') {
            Subjects.insert({
              name: row.nombre,
              description:
                (row.descripcion !== '\n' && row.descripcion) ||
                Fake.paragraph(10),
              courseId: courseId,
              teacher_id: Meteor.users.findOne({
                emails: { $elemMatch: { address: row.profesor } }
              })._id
            })
          }
        }
      })
    }
  },
  create: function (number) {
    var range = Array.apply(null, { length: number }).map(Number.call, Number)
    return {
      exams: function (subjectId) {
        range.forEach(Exams.iterableSample(subjectId))
      },
      examScores: function (studentId, examId) {
        range.forEach(ExamScores.iterableSample(studentId, examId))
      }
    }
  }
}
