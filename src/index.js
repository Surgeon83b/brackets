module.exports = function check(str, bracketsConfig) {
  // your solution
  let top = '';
  const opened = bracketsConfig.map((item, index, arr) => arr[index][0]);
  const closed = bracketsConfig.map((item, index, arr) => arr[index][1]);
  const mas = [];

  for (let i = 0; i < str.length; i++) {
    if (closed.includes(str[i])&&(!opened.includes(str[i]))) {
      top = mas.pop();
      if (!(bracketsConfig.filter(item => JSON.stringify(item) == JSON.stringify([top, str[i]])).length > 0)) return false
    }
    else
    if (closed.includes(str[i])&&(opened.includes(str[i]))&&(str[i]==mas[mas.length-1]))
      mas.pop()
    else 
      mas.push(str[i]);
  }
  return mas.length === 0
}
