import "./About.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Services from "../../components/services/Services";

function About() {
	return (
		<>
			<Header />
			<main className="about">
				<div className="container">
					<div className="aboutContent">
						<h1 className="aboutTitle">Haqqımızda</h1>
						<div className="aboutText">
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Nisi expedita tempore, ipsa,
								beatae placeat repellendus voluptatibus ducimus
								earum excepturi aspernatur soluta tenetur!
								Molestiae dolorem incidunt iure ex dicta sint
								odio!
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Nisi debitis doloremque ut
								tenetur molestias consequuntur quibusdam esse
								exercitationem voluptate voluptatem.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Nisi debitis doloremque ut
								tenetur molestias consequuntur quibusdam esse
								exercitationem voluptate voluptatem.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Nisi debitis doloremque ut
								tenetur molestias consequuntur quibusdam esse
								exercitationem voluptate voluptatem.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Nisi debitis doloremque ut
								tenetur molestias consequuntur quibusdam esse
								exercitationem voluptate voluptatem.
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Nisi debitis doloremque ut
								tenetur molestias consequuntur quibusdam esse
								exercitationem voluptate voluptatem.
							</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, amet.
							</p>
						</div>
					</div>
				</div>
			</main>
			<Services />
			<Footer />
		</>
	);
}

export default About;
