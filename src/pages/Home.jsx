import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch(); 
  const products = useSelector(state => state.product.products); 

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json(); 
    // console.log(data);
    dispatch(addProducts(data));
  };

  useEffect(() => {
    getData();
  }, []); 
  return <div>Home</div>;
};

export default Home;
