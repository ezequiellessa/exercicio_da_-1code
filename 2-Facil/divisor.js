function solution(x, y, z) {
   if(x%y==0 && x%z==0){
    return true;
   }
   else{
    return false;
   }
}
console.log(solution(8,2,1));