import newcol from "./newcol.js";

let houses=(maincol,data)=>{
    let ancestralWeapons=data.ancestralWeapons.join(", ");
    if(ancestralWeapons.length>0)
    {
        let col=newcol("AncestralWeapons : ",ancestralWeapons);
        maincol.append(col);
    }
    let coatOfArms=data.coatOfArms;
    if(coatOfArms.length>0)
    {
        let col=newcol("CoatOfArms : ",coatOfArms);
        maincol.append(col);
    }
   
    let diedOut=data.diedOut;
    if(diedOut.length>0)
    {
        let col=newcol("DiedOut : ",diedOut);
        maincol.append(col);
    }

    let founded=data.founded;
    if(founded.length>0)
    {
        let col=newcol("Founded : ",founded);
        maincol.append(col);
    }
   
    let seats=data.seats.join(", ");
    if(seats.length>0)
    {
        let col=newcol("Seats : ",seats);
        maincol.append(col);
    }
    let titles=data.titles.join(", ");
    if(titles.length>0)
    {
        let col=newcol("Titles : ",titles);
        maincol.append(col);
    }

    let region=data.region;
    if(region.length>0)
    {
        let col=newcol("Region : ",region);
        maincol.append(col);
    }
    let words=data.words;
    if(words.length>0)
    {
        let col=newcol("Words : ",words);
        maincol.append(col);
    }
}
export default houses;