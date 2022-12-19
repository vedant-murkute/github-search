import { optionsMapping } from "../constants/options";

export const sortArray = (temp,sortOption,sortOrder) => {
  if (sortOrder === "asc") {
    temp.sort(
      (a, b) =>{
        if(sortOption==="created_at"){
          const date_a = new Date(a[optionsMapping[sortOption]]);
          const date_b = new Date(b[optionsMapping[sortOption]]);
          return date_a - date_b;
        }
        else if(sortOption==="name"){
          return a[optionsMapping[sortOption]].localeCompare(b[optionsMapping[sortOption]]);
        }
        else{
          return a[optionsMapping[sortOption]] - b[optionsMapping[sortOption]];
        }
      }
    );
  } else {
    temp.sort(
      (a, b) =>{
        if(sortOption==="created_at"){
          const date_a = new Date(a[optionsMapping[sortOption]]);
          const date_b = new Date(b[optionsMapping[sortOption]]);
          return date_b - date_a;
        }
        else if(sortOption==="name"){
          return a[optionsMapping[sortOption]].localeCompare(b[optionsMapping[sortOption]]);
        }
        else{
          return b[optionsMapping[sortOption]] - a[optionsMapping[sortOption]];
        }
      }
    );
  }
  return temp;
}