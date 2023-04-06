// compilation of inputs

function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;


// Tab support

  html.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    html.setRangeText(
      '  ',
      html.selectionStart,
      html.selectionStart,
      'end'
    )
  }
})

  css.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    css.setRangeText(
      '  ',
      css.selectionStart,
      css.selectionStart,
      'end'
    )
  }
})

  js.addEventListener('keydown', (e) => {
  if (e.keyCode === 9) {
    e.preventDefault()

    js.setRangeText(
      '  ',
      js.selectionStart,
      js.selectionStart,
      'end'
    )
  }
})


// button clear

document.querySelectorAll('.clear').forEach((clear) =>
  clear.addEventListener('click', (e) => {
    const ele = e.target.classList[1];
    document.querySelector(`#${ele}`).value = '';
    compile();
  })
);


// button minimize 

document.querySelectorAll('.control').forEach((control) =>
  control.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.classList.toggle('collapse');
    e.target.classList.add('close');
    e.target.parentElement.querySelector('h2').classList.toggle('hidden');
  })
);

/* Button copy */


// copy message

document.querySelectorAll('.copybtn').forEach((copy) => {
  copy.addEventListener('click', (e) => {
    const tmp = e.target.innerHTML;
    e.target.innerText = 'Copied.';
    setTimeout(function () {
      e.target.innerHTML = tmp;
    }, 1000);
  });
});



document.querySelector('.copy-html').addEventListener('click', (e) => {
  const code = document.querySelector('#html');
  copyCode(code);
});

// copy
function copyCode(code) {
  code.select();
  document.execCommand("copy");
}

// iframe
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
}


compile();