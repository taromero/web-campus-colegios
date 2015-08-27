Template.progressBar.helpers({
  progress: function () {
    return Math.round(uploader.progress() * 100)
  }
})
