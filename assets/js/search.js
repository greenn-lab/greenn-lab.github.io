var search = document.querySelector('.search > input')

if (search) {

  search.addEventListener('keyup', function (e) {
    var exec = function () {
        console.log(search.value)
      },
      trigger = function () {
        if (search.time + 500 < new Date().getTime()) exec()
        else {
          setTimeout(trigger, 10);
        }
      }

    search.time = new Date().getTime()
    trigger();
  })

  function load(location, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', location, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState===4 && xhr.status===200) {
        try {
          callback(null, JSON.parse(xhr.responseText) )
        }
        catch(err) {
          callback(err, null)
        }
      }
    }
    xhr.send()
  }

}
