import Alert from 'react-bootstrap/Alert';
import Image from "react-bootstrap/Image";
function HeaderDesign() {
  return (
    <>
      {[
        'primary',
        
      ].map((variant) => (
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
        
          <Image className=' w-30 mt-2 ' 
        src=
            "https://content.govdelivery.com/attachments/fancy_images/UKTW/2021/03/4282237/uktw-2020_original.png" 
        rounded
      />
      
        
        </div>
       
      ))}
    </>
  );
}

export default HeaderDesign;