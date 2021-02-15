let newcol=(key,value)=>{
    let col=document.createElement('div');
    col.setAttribute("class","col-12");
    let bold=document.createElement('b');
    bold.innerText=key;
    col.append(bold);
    col.append(`${value}`);

    return col;
}
export default newcol;