/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { TbMinus, TbPlus, TbX } from "react-icons/tb";

const Items = ({ item, handleRemove, handleAdd, handleRemoveQuantity }) => {
  return (
    <motion.div
      className="items-detail"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <div className="item-info">
        <div className="item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item-title">{item.title}</div>
      </div>

      <div className="item-unit-price">$ {item.price}</div>

      <div className="item-quantity">
        <TbMinus onClick={() => handleRemoveQuantity(item.id)} />{" "}
        {item.quantity} <TbPlus onClick={() => handleAdd(item)} />
      </div>
      <div className="item-total-price">$ {item.price * item.quantity}</div>
      <div className="item-remove">
        <TbX onClick={() => handleRemove(item.id)} />
      </div>
    </motion.div>
  );
};

export default Items;
