import React from "react";
import Image from "react-bootstrap/Image";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const FooterTWC = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
                     <div style={{display: 'flex', justifyContent: 'center'}}>
        
        <Image className=' w-30 mt-2 ' 
      src=
          "https://content.govdelivery.com/attachments/fancy_images/UKTW/2021/03/4282237/uktw-2020_original.png"
         
      rounded
    />
    
    </div>
   
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Career</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Transportation</FooterLink>
            <FooterLink href="#">D365 CRM</FooterLink>
            <FooterLink href="#">Azure Services</FooterLink>
            <FooterLink href="#">Power Platform</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">London</FooterLink>
            <FooterLink href="#">United States</FooterLink>
            <FooterLink href="#">Pakistan</FooterLink>
            <FooterLink href="#">South Africa</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterTWC;