module.exports = function multiply(first, second) {
  var rFirst = first.split('').reverse();
  var rSecond = second.split('').reverse();
  var result = [];

  for ( var i = 0; i < rFirst.length; i++){
      for ( var k = 0; k < rSecond.length; k++){
          var res = rFirst[i] * rSecond[k];
          if (result[i + k]){
              result[i + k] = result[i + k] + res;
          } else {
              result[i + k] = res;
          }
      }
  }
  // console.log('result 1 --', result);
  var length = result.length;
  for (var i = 0; i < length; i++){
      var resItem = result[i] % 10;
      var resForNext = Math.floor(result[i] / 10);
      result[i] = resItem;
      if (!result[i + 1]){
          if (resForNext > 0){
          result[i + 1] = resForNext;
          }
      }
      else{
          if (resForNext > 0){
              result[i + 1] = result[i + 1] + resForNext;
          }
          
      }
      
      // console.log('resIiii -- ', resItem , resForNext);
      
  }

  result = result.reverse();
  return result.join('')
  // console.log('in -- ', first, second, rFirst, rSecond);
  // console.log('result 2 --', result.join(''));
}
