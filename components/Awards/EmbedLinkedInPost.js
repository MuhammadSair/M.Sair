"use client";

export default function LinkedInIframeEmbed() {
  return (
    <div className="container" id="awards">
      <div className="title pb-5">
        <p>Awards</p>
      </div>
      <div className="w-full  min-h-screen">
        <div className="relative pb-[185%] w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7087416127454089216"
            className="absolute top-0 left-0 w-full h-full"
            style={{ background: "#151312" }}
            allowFullScreen
            title="LinkedIn Embedded Post"
          ></iframe>
        </div>
      </div>
    </div>
    
  );
}
