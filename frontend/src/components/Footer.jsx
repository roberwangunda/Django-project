import React from "react";
import {
  Box,
  Container_footer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container_footer>
        <Row>
          <Column>
            <Heading>Ideals Fumigation</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Get In Touch</Heading>
            <FooterLink href="#">0700626951</FooterLink>
            <FooterLink href="#">Business Hours</FooterLink>
            <FooterLink href="#">7AM - 5PM</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container_footer>
    </Box>
  );
};
export default Footer;
