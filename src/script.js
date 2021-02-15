import fn from "./main.js";
document.getElementById('allbooks').onclick=async()=>{
    let page_no=1;
    document.getElementById('content').innerHTML="";
    document.getElementById('loading').hidden=false;
    let url=`https://www.anapioficeandfire.com/api/books?page=${page_no}&pageSize=12`;
    await fn(url,page_no,"BOOKS",1,1,12); 
    document.getElementById('loading').hidden=true;
}
document.getElementById('allcharacters').onclick=async()=>{
    let page_no=1;
    document.getElementById('content').innerHTML="";
    document.getElementById('loading').hidden=false;
    let url=`https://www.anapioficeandfire.com/api/characters?page=${page_no}&pageSize=5`;
    await fn(url,page_no,"CHARACTERS",1,214*2,5); 
    document.getElementById('loading').hidden=true;
}
document.getElementById('allhouses').onclick=async()=>{
    let page_no=1;
    document.getElementById('loading').hidden=false;
    document.getElementById('content').innerHTML="";
    let url=`https://www.anapioficeandfire.com/api/houses?page=${page_no}&pageSize=5`;
    await fn(url,page_no,"HOUSES",1,45*2,5); 
    document.getElementById('loading').hidden=true;
}
document.getElementById('button1').onclick=async()=>{
    let page_no=1;
    document.getElementById('loading').hidden=false;
    document.getElementById('content').innerHTML="";
    let value=document.getElementById('characters').value;
    let url=`https://www.anapioficeandfire.com/api/characters?name=${value}&page=1&pageSize=10`;
    await fn(url,page_no,"CHARACTERS",1,1,5); 
    document.getElementById('loading').hidden=true;
}
document.getElementById('button2').onclick=async()=>{
    let page_no=1;
    document.getElementById('loading').hidden=false;
    document.getElementById('content').innerHTML="";
    let value=document.getElementById('houses').value;
    let url=`https://www.anapioficeandfire.com/api/houses?name=${value}&page=1&pageSize=10`;
    await fn(url,page_no,"HOUSES",1,1,5); 
    document.getElementById('loading').hidden=true;
}
document.getElementById('button3').onclick=async()=>{
    let page_no=1;
    document.getElementById('loading').hidden=false;
    document.getElementById('content').innerHTML="";
    let value=document.getElementById('books').value;
    let url=`https://www.anapioficeandfire.com/api/books?name=${value}&page=1&pageSize=10`;
    await fn(url,page_no,"BOOKS",1,1,5); 
    document.getElementById('loading').hidden=true;
}

document.getElementById('allbooks').click();