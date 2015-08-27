uploader = new Slingshot.Upload("myFileUploads");

Template.fileUpload.rendered = function() {
  $(".file_input").css('opacity','0');
}

Template.fileUpload.events({
  'click #select_file': function(event) {
    event.preventDefault();
    $(".file_input").trigger('click');
  },
  'click #create_resource': function(event) {
    var $base = $(event.currentTarget).closest('.container')
    $base.find('.progress').show()
    var file = $base.find(".file_input")[0].files[0]
    uploader.send(file, function (err, downloadUrl) {
      if (!err) {
        Meteor.call('createResource', file.name, downloadUrl, file.type, function(err, res) {
          swal({
            title: err ? 'Error al crear el archivo' : 'El archivo se subio exitosamente',
            text: err,
            type: err ? 'error' : 'success'
          })
          $base.find('.progress').hide()
        })
      } else {
        if (err.error == 'Aborted') {
          return; // if user has aborted the upload, don't show error
        }
        swal({ title: 'Error al subir el archivo', text: err.message, type: 'error' })
      }
    });
  },
  'click #cancel_upload': function(event) {
    uploader.xhr.abort()
    Session.set('file_name', null)
    var $base = $(event.currentTarget).closest('.container')
    $base.find('.showOnSelectedFile').hide()
    $base.find('.progress').hide()
  }
})

Template.fileUpload.helpers({
  file_name: function() {
    return Session.get('file_name') || 'Por favor, elige un archivo.'
  }
})

