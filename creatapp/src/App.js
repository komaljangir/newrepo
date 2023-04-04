import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const prox = async () => {
      const proc = await axios.get("https://dummyjson.com/products");
      console.log(proc);
      if (proc) {
        setData(proc.data.products);
        setsearch(proc.data.products); 
      }
    };
    prox();
  }, []);

  return (
    <div className="box">
      {data.map((item, index) => (
        <div key={index}>
          Title: {item.title}
          id:{item.id}
          description:{item.description}
          price:{item.Price}
          discount:{item.discountPercentage}
          <img src={item.thumbnail} alt={item.thumbnail}></img>
        </div>
      ))}
    </div>
  );
}

export default App;
