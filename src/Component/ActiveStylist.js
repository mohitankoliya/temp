import React, { useRef, useEffect } 
from "react";
import {
  SliderContainer,
  MainContainer,
  GalleryContainer,
  TextContainer,  
  StylistName,
  LeftAlignedColumnContainer,
  OverLay,
  Wrapper
} from "./StyleofStylist";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
// import { motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, Draggable);

export function ActiveStylist(props) {
    console.log("ActiveStylist", props)
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
      const scroller2 = document.getElementById("scroller2");
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
                scroller: '.scroller2',
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
            //     scroller: '.scroller2',
            //     trigger: imageRefs.current[index - 1],
            //     toggleActions: 'play none none none',
            //     scrub: 1,
            //     start: 'right +=250',
            //     horizontal: true
            //   }
            }
          );
        });
        const slider = document.querySelector('.scroller2');
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
              <SliderContainer className="scroller2" id="scroller2">
                {props.item.map((stylist, index) => {
                  return (
                    <>
                      {" "}
                      <LeftAlignedColumnContainer>
                        <div
                          ref={addToRefs}
                          style={{
                            // marginLeft: "20px",
                            marginRight: "32px",
                            display: "flex"
                          }}
                        >
                          <OverLay />
                          <img 
                            alt={stylist}
                            key={index}
                            style={{
                                width: "64.59px",
                                height: "63.82px",
                              borderRadius: "15px",
                            //   aspectRatio: "16:9",
                            //   imageRendering: "crisp-edges"
                            }}
                            src={stylist.stylist_image}
                          /> <div className="tcenon onlineg"></div>
                        </div>
                       
                       
                        <TextContainer ref={addToTextRefs}>
                        <StylistName>{stylist.stylist_name}</StylistName>
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
