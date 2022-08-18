import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimateText = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="bg-white p-32 rounded">Some Div</div>
      <section>
        <h1>Scroll Down to Reveal Elements &#8595;</h1>
      </section>
      <section>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          accusantium dolore quia dicta tempora, nam expedita harum numquam eum
          obcaecati enim est, reiciendis doloribus quis suscipit id esse at
          voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Rem, ipsa! Quo nihil voluptas pariatur quos iste molestias suscipit
          deleniti necessitatibus ea, rem harum libero nam, aut perferendis modi
          nobis blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Numquam omnis voluptate facere deserunt eaque tenetur voluptatem
          corrupti, sunt asperiores in hic? Eveniet ipsam amet placeat est
          obcaecati beatae odit commodi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe accusantium dolore quia dicta tempora, nam
          expedita harum numquam eum obcaecati enim est, reiciendis doloribus
          quis suscipit id esse at voluptate. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem, ipsa! Quo nihil voluptas pariatur
          quos iste molestias suscipit deleniti necessitatibus ea, rem harum
          libero nam, aut perferendis modi nobis blanditiis? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Numquam omnis voluptate facere
          deserunt eaque tenetur voluptatem corrupti, sunt asperiores in hic?
          Eveniet ipsam amet placeat est obcaecati beatae odit commodi. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium
          dolore quia dicta tempora, nam expedita harum numquam eum obcaecati
          enim est, reiciendis doloribus quis suscipit id esse at voluptate.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ipsa!
          Quo nihil voluptas pariatur quos iste molestias suscipit deleniti
          necessitatibus ea, rem harum libero nam, aut perferendis modi nobis
          blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam omnis voluptate facere deserunt eaque tenetur voluptatem
          corrupti, sunt asperiores in hic? Eveniet ipsam amet placeat est
          obcaecati beatae odit commodi.
        </div>
      </section>
      <section>
        <div data-aos="slide-left" data-aos-offset="200">
          <p className="p-5 border rounded">I am animated</p>
        </div>
      </section>
      <section>
        <div className="bg-purple-400 p-10 rounded">Hello Footer</div>
      </section>
    </>
  );
};

export default AnimateText;
