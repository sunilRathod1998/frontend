import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'


const Menu = () => {
  const addToCartHandler = ()=>{

  }
  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          delay={0.2}
          burgerSrc={burger1}
          price={200}
          title={"cheese burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          delay={0.4}
          burgerSrc={burger2}
          price={200}
          title={"chiken cheese burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          delay={0.4}
          burgerSrc={burger2}
          price={200}
          title={"chiken cheese burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={4}
          delay={0.4}
          burgerSrc={burger2}
          price={200}
          title={"chiken cheese burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={5}
          delay={0.4}
          burgerSrc={burger2}
          price={200}
          title={"chiken cheese burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={6}
          delay={0.6}
          burgerSrc={burger3}
          price={200}
          title={"cheese burger with chiken Tikka"}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
}

export default Menu