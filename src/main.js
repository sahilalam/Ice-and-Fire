import books from "./books.js";
import characters from "./characters.js";
import houses from "./houses.js";
import getdata from "./getdata.js";
let book_name=[];
let fill=true;
let fn=async(url,page_no,type,first,last,ps)=>{
    document.getElementById('allbooks').setAttribute('class',"btn btn-outline-info p-1 bord");
    document.getElementById('allcharacters').setAttribute('class',"btn btn-outline-info p-1 bord");
    document.getElementById('allhouses').setAttribute('class',"btn btn-outline-info p-1 bord");
    let param;
    if(type=="BOOKS")
    {
        document.getElementById('allbooks').setAttribute('class',"btn btn-outline-info p-1 bord active");
        param='books';
    }
    else if(type=="CHARACTERS")
    {
        document.getElementById('allcharacters').setAttribute('class',"btn btn-outline-info p-1 bord active");
        param='characters';
    }
    else
    {
        document.getElementById('allhouses').setAttribute('class',"btn btn-outline-info p-1 bord active"); 
        param='houses';  
    }
    let data=await getdata(url);
    let row=document.getElementById("content");
    if(data.length>0)
    {
        document.getElementById('sad').hidden=true;
        let heading=document.createElement('div');
        heading.setAttribute("class","col-12 text-center bookheading");
        heading.innerText=type;
        row.append(heading);
        for(let i=0;i<data.length;i++)
        {
            let col=document.createElement('div');
            col.setAttribute("class","col-md-5 col-12 m-3 mt-5 mb-2 p-0 bord details background");
            

            let book_heading=document.createElement('div');
            book_heading.setAttribute("class","col-12 p-2  bord background text-center bookheading");
            book_heading.innerText=(data[i].name)?data[i].name:"No Name";
            col.append(book_heading);

            let details=document.createElement('div');
            details.setAttribute("class","col-12 p-2 text-left text-dark");
            if(type=="BOOKS")
            {
                if(fill)
                {
                    book_name.push(data[i].name);
                }
                books(details,data[i]);
            }
            else if(type=="CHARACTERS")
            {
                await characters(details,data[i],book_name);
            }
            else
            {
                await houses(details,data[i]);
            }

        
            col.append(details);

            row.append(col);
        }
        fill=false;

        heading=document.createElement('div');
        heading.setAttribute("class","col-12 text-center bookheading");
        heading.innerText=`Page : ${page_no}`;
        row.append(heading);

        let col=document.createElement('div');
        col.setAttribute("class","col-lg-6 col-md-8 col-12 mt-2 text-center");

        let prev=document.createElement('button');
        prev.setAttribute("class","btn btn-outline-info col-3 p-2 pt-1 pb-1 m-2 bord text-center")
        prev.innerText="prev";
        col.append(prev);
        
        let next=document.createElement('button');
        next.setAttribute("class","btn btn-outline-info col-3 p-2 pt-1 pb-1 m-2 bord text-center")
        next.innerText="next";
        col.append(next);
        
        let pdis=(page_no==first)?true:false;
        let ndis=(page_no==last)?true:false;

        prev.disabled=pdis;
        next.disabled=ndis;

        prev.onclick=async()=>{
            page_no--;
            document.getElementById('content').innerHTML="";
            document.getElementById('loading').hidden=false;
            await fn(`https://www.anapioficeandfire.com/api/${param}?page=${page_no}&pageSize=${ps}`,page_no,type,first,last,ps);
            document.getElementById('loading').hidden=true;
        }
        next.onclick=async()=>{
            page_no++;
            document.getElementById('content').innerHTML="";
            document.getElementById('loading').hidden=false;
            await fn(`https://www.anapioficeandfire.com/api/${param}?page=${page_no}&pageSize=${ps}`,page_no,type,first,last,ps);
            document.getElementById('loading').hidden=true;
        }
        row.append(col);
    }
    else
    {
        document.getElementById('sad').hidden=false;
        let col=document.createElement('div');
        col.setAttribute("class","col-12 text-center bookheading");
        col.innerText="Sorry...No Results Found!";
        row.append(col);

    }
    
}
export default fn;