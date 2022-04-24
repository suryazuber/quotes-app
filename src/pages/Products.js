import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><NavLink to="/products/p1">A React Course </NavLink></li>
        <li><NavLink to="/products/p2">Book </NavLink></li>
        <li><NavLink to="/products/p3">Carpet </NavLink></li>
      </ul>
    </section>
  );
};
export default Products;
