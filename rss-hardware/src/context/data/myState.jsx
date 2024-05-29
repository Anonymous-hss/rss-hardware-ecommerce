import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { toast } from "react-toastify";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);

  const [products, getProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all fields are required");
    }
    const productRef = collection(fireDB, "products");
    setLoading(true);

    try {
      await addDoc(productRef, products);
      toast.success("Added product successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProducts] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
