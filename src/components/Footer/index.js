import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Horizontal,
Copyright,
Logo, 
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		
	</h1>
	<Container>
		<Row>
            <Column className="about-col">
            <Heading>About</Heading>
            <p className="text-justify">The Bonappetite app strives to help the everyday busy user get inspired to 
            create a inspirational dinner for their family or themselves when they don't have much time to prepare.  As simple as search, cook and enjoy!</p>
            </Column>
            <Column>
                <Heading>Contact</Heading>
                <FooterLink href="mailto:gregorypaul@gregorypauldesigns.com">Gregory Paul</FooterLink>
                <FooterLink href="https://gregorypauldesigns.com">Gregory Paul Designs</FooterLink>
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
        <Horizontal />
        <Copyright>
            <Logo to ={'/'}><span className="normal white">BON</span>APPETITE</Logo>
            <div>Copyright © 2023 All Rights Reserved.</div>
        </Copyright>
	</Container>
	</Box>
);
};
export default Footer;
