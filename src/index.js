
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  return element;
}
  // document.body.appendChild(component());
  let element = component()
  document.body.appendChild(element)


// console.log(module.hot, 'module.hot---------------')
//   if (module.hot) {
//     module.hot.accept('./print.js', function() {
//       console.log('Accepting the updated printMe module!');
//       // printMe();
//       document.body.removeChild(element)
//       element = component()
//       document.body.appendChild(element)
//     })
//   }