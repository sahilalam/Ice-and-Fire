import newcol from "./newcol.js";
import getdata from "./getdata.js";

let characters=async(maincol,data,book_names)=>{
    let father=data.father,mother=data.mother,spouse=data.spouse;
    if(father.length>0)
    {
        father=await getdata(father);
        father=father.name;   
    }
    if(mother.length>0)
    {
        mother=await getdata(mother);
        mother=mother.name;   
    }
    if(spouse.length>0)
    {
        spouse=await getdata(spouse);
        spouse=spouse.name;   
    }
    let books="";
    for(let i=0;i<data.books.length;i++)
    {
        let id=data.books[i][data.books[i].length-1]-1;
        books+=book_names[id];
        if(i<data.books.length-1)
        {
            books+=", ";
        }
    }
    if(books.length>0)
    {
        let col=newcol("Books : ",books);
        maincol.append(col);
    }
    let aliases=data.aliases.join(", ");
    if(aliases.length>0)
    {
        let col=newcol("Aliases : ",aliases);
        maincol.append(col);
    }
    
    let born=data.born;
    if(born.length>0)
    {
        let col=newcol("Born : ",born);
        maincol.append(col);
    }
    let culture=data.culture;
    if(culture.length>0)
    {
        let col=newcol("Culture : ",culture);
        maincol.append(col);
    }
    let gender=data.gender;
    if(gender.length>0)
    {
        let col=newcol("Gender : ",gender);
        maincol.append(col);
    }
    if(father.length>0)
    {
        let col=newcol("Father : ",father);
        maincol.append(col);
    }
    if(mother.length>0)
    {
        let col=newcol("Motherr : ",mother);
        maincol.append(col);
    }
    if(spouse.length>0)
    {
        let col=newcol("Spouse : ",spouse);
        maincol.append(col);
    }
    let died=data.died;
    if(died.length>0)
    {
        let col=newcol("Died : ",died);
        maincol.append(col);
    }
}
export default characters;