$(function() {
  let inputToken = ''
  let inputDomain = ''
  if (window.localStorage.getItem('inputToken')) {
    $('#token').val(window.localStorage.getItem('inputToken'))
    inputToken = window.localStorage.getItem('inputToken')
  }
  if (window.localStorage.getItem('inputDomain')) {
    $('#domain').val(window.localStorage.getItem('inputDomain'))
    inputDomain = window.localStorage.getItem('inputDomain')
  }
  $('#token').blur(() => {
    inputToken = $('#token').val().trim()
    if (inputToken === '') {
      $('.token-message').removeClass('hide')
      $('#upload-label').addClass('disabled')
    } else {
      checkError()
      window.localStorage.setItem('inputToken', inputToken)
      $('.token-message').addClass('hide')
    }
  })

  $('#domain').blur(() => {
    inputDomain = $('#domain').val().trim()
    if (inputDomain === '') {
      $('.result-message').removeClass('hide')
      $('#upload-label').addClass('disabled')
    } else {
      checkError()
      window.localStorage.setItem('inputDomain', inputDomain)
      $('.result-message').addClass('hide')
    }
  })
  function checkError() {
    if (inputDomain === '' || inputToken === '') {
      $('#upload-label').addClass('disabled')
    } else {
      $('#upload-label').removeClass('disabled')
    }
  }
  checkError()

  $("#file").change(function(e) {
    $('.result').addClass('hide')
    var observable = qiniu.upload(e.target.files[0], e.target.files[0].name, inputToken)
    var subscription = observable.subscribe((res) => {
    }, (error) => {
      $('.error-msg').text(error.message)
      $('.error-display').removeClass('hidden')
    }, (res) => {
      $('.error-display').addClass('hidden')
      $('#result-url').text(`${inputDomain}/${res.key}`)
      $('#result-md').text(`![${res.key.split('.')[0]}](${inputDomain}/${res.key})`)
      $('.result').removeClass('hide')
      $('.result-preview').html(`<img src="${inputDomain}/${res.key}">`)
    })
  })
})
