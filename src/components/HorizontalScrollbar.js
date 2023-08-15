import React from 'react'
//import { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
//import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
// import LeftArrowIcon from "../assets/icons/left-arrow.png"
// import RightArrowIcon from "../assets/icons/right-arrow.png"
// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <button onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </button>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <button onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </button>
//   );
// };


const HorizontalScrollbar = ({data , bodyPart ,setBodyPart}) => {
  return (
    
    <ScrollMenu>
       { data.map((item)=>(
        <div
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            className='mx-[40px] my-0'
        >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </div>
       )
    )}
    </ScrollMenu>
  
  )
}

export default HorizontalScrollbar