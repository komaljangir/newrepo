import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Api() {
  const [name, setName] = useState([]);
  const [searchtext, setSearchtext] = useState([]);

  useEffect(() => {
    let ok = async () => {
      const kk = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(kk);
    //   if (kk) {
    //     setName(kk.data.production_companies
    //       );
    //     setSearchtext(kk.data.production_companies
    //       );
    //   }
    };
  //   ok();
  }, []);

  return (
    <div className="name">
      {name.map((item, index) => (
        <div key={index}>
          {/* id:{item.id}
          name:{item.name}
          <img src={item.logo_path}/>
          logo_path:{item.logo_path} */}
          {/* imdb-id:{item.imdb_id}
          origin_title:{item.origin_title}
          
          
          poster_path:{item.poster_path} */}
        </div>
      ))}
    </div>
  );
}

export default Api;
