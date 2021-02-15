import newcol from "./newcol.js";

let characters=(maincol,data)=>{
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
    let died=data.died;
    if(died.length>0)
    {
        let col=newcol("Died : ",died);
        maincol.append(col);
    }
}
export default characters;