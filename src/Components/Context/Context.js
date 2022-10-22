import React ,{createContext ,useState,useEffect} from "react";

export const Context = createContext()

export const CustomProvider = ({ children }) => {
    const [cart , setCart] = useState([]);
    const [qty , setQty] = useState(0);
    const [total , setTotal] = useState(0);
  
    useEffect(() => {
      setQty(cart.reduce((total, item) => total + item.count, 0))
      setTotal(cart.reduce((total, item) => total + (item.count * item.price), 0))
    }, [cart])
    
  
    const addItem = (producto, count) => {
      if (IsInCart(producto.id)) {
        const modificado = cart.map((product) => {
          if (product.id === producto.id) {
            producto.count += count;
          }
          return product;
        });
        setCart(modificado);
      } else {
        setCart([...cart, { ...producto, count }]);
      }
      setQty(qty + count);
      setTotal(total + (producto.price * count));
    };
  
    const deleteItem = (id) => {
      const found = cart.find(product => product.id === id);
      setCart(cart.filter((item) => item.id !== id));
      setQty( qty - found.count)
      setTotal(total - (found.price * found.count))
    };
  
    const IsInCart = (id) => cart.some((item) => item.id === id);
  
    const clear = () => {
      setCart([]);
      setQty(0);
      setTotal(0);
    };
  
    return (
      <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear, IsInCart }}>
        {children}
      </Context.Provider>
    );
  };