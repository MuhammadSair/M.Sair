import Image from "next/image";
import Link from "next/link";

export default function ABoutMe() {
  return (
    <div className="container" id="about">
      <div className="title">
        <p>SOFTWARE</p>
        <p>ENGINEER</p>
      </div>

      <div className=".intro">
        👋 With over a year of experience in software development, I specialize
        in building scalable, full-stack web applications using technologies
        like React.js, Next.js, and the MERN stack. My work spans micro-frontend
        architectures, accessible component-driven design systems, and
        automation testing. Alongside my frontend focus, I develop deep learning
        solutions for satellite imagery analysis and apply geospatial analytics
        in real-world contexts. Currently exploring the intersection of AI and
        web development, I&apos;m eager to contribute to innovative software
        solutions that push both fields forward.
      </div>

      <div className="stats-container">
        <div className="stats">
          <div>
            <span>+1</span>
            <span className="line-break">YEARS OF</span>
            <span className="line-break">EXPERIENCE</span>
          </div>

          <div>
            <span>+4</span>
            <span className="line-break">PROJECTS</span>
            <span className="line-break">COMPLETED</span>
          </div>
        </div>
        <div className="talkBtn">
          <Image
            src="https://res.cloudinary.com/djivuystd/image/upload/v1752598677/stack-icon_r0hjzw.svg"
            alt="stack icon"
            width={48}
            height={48}
          />

          <Link href="#contact" aria-label="contact">
            <span className="line-break">Let’s build something</span>

            <div className="work-together-box">
              <span>extraordinary together!</span>
              <Image
                src="https://res.cloudinary.com/djivuystd/image/upload/v1752598677/arrow-down-icon_sitxdj.svg"
                alt="arrow down icon"
                width={24}
                height={24}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
