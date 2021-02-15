import newcol from "./newcol.js";

let books=(col,data)=>{
    let authors=data.authors.join(", ");
    let col1=newcol("Authors : ",authors);
    let col2=newcol("Country : ",data.country);
    let col3=newcol("Publisher : ",data.publisher);
    let col4=newcol("Released : ",data.released);
    let col5=newcol("No. of Pages : ",data.numberOfPages);
    let col6=newcol("ISBN : ",data.isbn);
    let col7=newcol("MediaType : ",data.mediaType);
    col.append(col1,col2,col3,col4,col5,col6,col7);
    
}
export default books;