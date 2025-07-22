import ProfileCard from "../components/AboutMe/ProfileCard";
import AboutMe from "../components/AboutMe/AboutMe";
import AppNavigation from "../UI/Navbar/AppNavigation";
import SkillSet from "../components/Skills/SkillSet";
import MyProjects from "../components/Projects/MyProjects";
import ContactForm from "../components/Contact/ContactForm";

export default function Home() {
  return (
    <>
      <div className="outer-container">
        <AppNavigation />
        {/* <AGlimpseOfMyLife /> */}
        <div className="main-container mx-auto">
          <div className="about-me-wrapper-container">
            <div className="profile-card-wrapper">
              <ProfileCard />
            </div>
            <div className="about-me-sections">
              <AboutMe />
              <SkillSet />
              <MyProjects />
              {/* <EmbedLinkedInPost /> */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
