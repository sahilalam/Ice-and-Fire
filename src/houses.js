import newcol from "./newcol.js";
import getdata from "./getdata.js";

let houses=async(maincol,data)=>{
    let currentLord=data.currentLord,heir=data.heir,overlord=data.overlord,founder=data.founder;
    if(currentLord.length>0)
    {
        currentLord=await getdata(currentLord);
        currentLord=currentLord.name;
    }
    if(heir.length>0)
    {
        heir=await getdata(heir);
        heir=heir.name;
    }
    if(overlord.length>0)
    {
        overlord=await getdata(overlord);
        overlord=overlord.name;
    }
    if(founder.length>0)
    {
        founder=await getdata(founder);
        founder=founder.name;
    }

    if(currentLord.length>0)
    {
        let col=newcol("CurrentLord : ",currentLord);
        maincol.append(col);
    }
    if(heir.length>0)
    {
        let col=newcol("Heir : ",heir);
        maincol.append(col);
    }
    if(overlord.length>0)
    {
        let col=newcol("Overlord : ",overlord);
        maincol.append(col);
    }
    if(founder.length>0)
    {
        let col=newcol("Founder : ",founder);
        maincol.append(col);
    }


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