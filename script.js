let i=0, imgArr=new Array();
imgArr[0]="https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/459f4bd3-ba75-4acd-a36b-ed775326fd8b?subjectId=74";
imgArr[1]="https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/35f41b64-0db1-43fc-92d6-f12b1d31350c?subjectId=74";
imgArr[2]="https://www.ncyu.edu.tw/ncyu/ServerFile/GetByKindEditor/cd12259d-e329-4aa2-99d7-292638feed15?subjectId=76";

function showImg(){
  document.getElementById('ico').src=imgArr[i];
  i=(i+1)%3; 
}

function show(){
  setInterval(showImg,2000); 
}