import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";
import Modal1 from "./components/Modal1";
import TestimonialsSection from "./components/TestimonialsSection";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const heroSectionContent = (
    <div className="modal-content">
      <h2>Nike Air Max Infinity</h2>
      <p>
        NIKE, Inc. is a team comprised of the Nike, Jordan and Converse brands
        driven by a shared purpose to leave an enduring impact.
      </p>
    </div>
  );

  const renderShoeModalContent = (shoe) => (
    <div className="modal-content">
      <h2>{shoe.name}</h2>
      <p>Model: {shoe.model}</p>
      <p>Price: ${shoe.price}</p>
      <p>{shoe.description}</p>
      <h3>Features:</h3>
      <ul>
        {shoe?.features?.map((feature, index) => (
          <li key={index}>
            <strong>{feature?.name}:</strong> {feature?.description}
          </li>
        ))}
      </ul>
      <h3>Technology:</h3>
      <ul>
        {shoe?.technology?.map((tech, index) => (
          <li key={index}>
            <strong>{tech?.name}:</strong> {tech?.description}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="App">
      <Header />
      <HeroSection showModal={() => openModal(heroSectionContent)} />
      <TestimonialsSection />
      <ShopSection
        openModal={(shoe) => openModal(renderShoeModalContent(shoe))}
      />
      <Footer />
      <Modal1 isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal1>
    </div>
  );
};

export default App;
