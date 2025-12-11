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
        👋 I’m a software engineer with hands-on experience in building
        full-stack, cloud-ready applications and AI-driven platforms. I’ve
        worked on products ranging from video processing pipelines and
        intelligent document automation to geospatial analytics and real-time
        web systems. My work spans React, Next.js, FastAPI, Node.js, modern
        databases, and AWS-based deployments, with additional experience in
        machine learning using TensorFlow and Keras. Currently working as an
        Associate Software Engineer and graduating this January, I’m passionate
        about designing scalable systems, solving complex engineering problems,
        and contributing to impactful, production-grade software.
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
