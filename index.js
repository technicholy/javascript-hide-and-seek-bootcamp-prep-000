function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const lis = document.getElementById('div').querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(i)+1).toString();
  }
}
