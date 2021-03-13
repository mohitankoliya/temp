import React, { useRef, useEffect } 
from "react";
import {
  SliderContainer,
  MainContainer,
  GalleryContainer,
  TextContainer,  
  CategoryName,
  LeftAlignedColumnContainer,
  OverLay,
  Wrapper
} from "./ContainerStyles";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
// import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, Draggable);

export function SliderImageComponent(props) {
    console.log("SliderImageComponent", props)
      const imageRefs = useRef([]);
      imageRefs.current = [];
      const textRefs = useRef([]);
      textRefs.current = [];
    
      const addToRefs = el => {
        if (el && !imageRefs.current.includes(el)) {
          imageRefs.current.push(el);
          console.log(imageRefs);
        }
      };
    
      const addToTextRefs = el => {
        if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
          console.log(textRefs);
        }
      };
      const proxy = document.createElement("div");
      const scroller = document.getElementById("scroller");
      useEffect(() => {
        imageRefs.current.forEach((el, index) => {
          gsap.fromTo(
            el,
            {
              filter: 'blur(0px)',
              scale: 1,
              autoAlpha: 0.98
            },
            {
              duration: 0.6,
              ease: 'power2',
              filter: 'blur(0px)',
              scale: 1,
              autoAlpha: 1,
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                scroller: '.scroller',
                start: 'left 350',
                end: 'right 40',
                toggleActions: 'play none none none',
                horizontal: true,
                scrub: 1,
                onLeave: () =>
                  gsap.to(el, {
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power3.easeOut'
                  }),
                onEnterBack: () =>
                  gsap.to(el, {
                    autoAlpha: 1,
                    duration: 0.8,
                    delay: 1.2,
                    ease: 'powe2.easeOut'
                  })
              }
            }
          );
        });
    
        textRefs.current.forEach((el, index) => {
          if (index === 0) {
            return;
          }
          gsap.fromTo(
            el,
            {
              autoAlpha: 0
            },
            {
              duration: 0.5,
              autoAlpha: 1,
            //   scrollTrigger: {
            //     id: `section-${index + 1}`,
            //     scroller: '.scroller',
            //     trigger: imageRefs.current[index - 1],
            //     toggleActions: 'play none none none',
            //     scrub: 1,
            //     start: 'right +=250',
            //     horizontal: true
            //   }
            }
          );
        });
        const slider = document.querySelector('.scroller');
        let isDown = false;
        let startX;
        let scrollLeft;
        let scrollRight;
        slider.addEventListener('pointerdown', e => {
          isDown = true;
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
          scrollRight = slider.scrollRight;
        });
        slider.addEventListener('pointerleave', () => {
          isDown = false;
          slider.classList.remove('active');
        });
        slider.addEventListener('pointerup', () => {
          isDown = false;
        });
        slider.addEventListener('pointermove', e => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 3; //scroll-fast
          slider.scrollLeft = scrollLeft - walk;
          slider.scrollRight = scrollRight + walk;
          console.log(walk);
        });
        /** */
      }, []);
    
      return (
        <>
          <GalleryContainer>
            <MainContainer>
              <SliderContainer className="scroller" id="scroller">
                {props.item.map((category, index) => {
                  return (
                    <>
                      {" "}
                      <LeftAlignedColumnContainer>
                        <div
                          ref={addToRefs}
                          style={{
                            // marginLeft: "20px",
                            marginRight: "20px",
                            display: "flex"
                          }}
                        >
                          <OverLay />
                          <img
                            alt={category}
                            key={index}
                            style={{
                              width: "182px",
                              height: "105px",
                              borderRadius: "15px",
                            //   aspectRatio: "16:9",
                            //   imageRendering: "crisp-edges"
                            }}
                            src={category.category_image}
                          />
                        </div>
                       
                       
                        <TextContainer ref={addToTextRefs}>
                        <CategoryName>{category.category_name}</CategoryName>
                        </TextContainer>
                      </LeftAlignedColumnContainer>
                    </>
                  );
                })}
              </SliderContainer>
            </MainContainer>
          </GalleryContainer>
        </>
      );
}
