export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-23px", zIndex: 10,backgroundColor:'#02413a', borderRadius:'50%', padding:'5px', width:'30px', height:'30px' }}  // Add positioning and background
        onClick={onClick}
      />
    );
  }



  export function SampleNextArrow(props) {
    
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  ...style, display: "block", right: "-23px", zIndex: 10,backgroundColor:'#02413a', borderRadius:'50%', padding:'5px', width:'30px', height:'30px' }}  // Add positioning and background
        onClick={onClick}
      />
        
    );
  }



  
  export const overrideForLoader = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };