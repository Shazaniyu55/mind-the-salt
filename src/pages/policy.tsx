import React from "react";

const Policy: React.FC = () => {
  return (
    <div style={{ padding: "20px",   borderRadius: "10px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", textDecoration: "underline" }}>Disclaimer and Legal Notice</h1>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>1. Purpose of the Game</h2>
        <p>
          The Mind the Salt Game is an educational tool designed to increase awareness and understanding of sodium intake and its impact on health. 
          It aims to provide general health education and promote healthier dietary habits. The game does not replace professional medical advice, 
          diagnosis, or treatment.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>2. Not a Medical Tool</h2>
        <p>
          The information provided in the game is for educational purposes only and should not be considered medical advice. Always consult a 
          qualified healthcare professional for any concerns about your health or dietary needs. If you have a medical emergency, seek immediate 
          assistance from a healthcare provider.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>3. No Guarantee of Accuracy</h2>
        <p>
          While the game aims to provide accurate and up-to-date information based on reliable sources, Mind the Salt and its creators make no 
          guarantees about the accuracy, completeness, or suitability of the information for any purpose. Health guidelines and recommendations 
          may vary by individual needs and regional standards.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>4. Personal Responsibility</h2>
        <p>
          Participation in the game is voluntary and undertaken at your own risk. Mind the Salt is not responsible for any direct, indirect, 
          incidental, or consequential damages resulting from the use of the game, including reliance on the information provided within it.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>5. Suitability for Different Audiences</h2>
        <p>
          The game is designed for general audiences and is not intended for use by children under the age of 13 without parental or guardian 
          supervision. Users are responsible for ensuring the content is suitable for their personal circumstances.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>6. Data Collection and Privacy</h2>
        <p>
          The game may collect non-personal data for analytics purposes to improve the user experience. No personally identifiable information (PII) 
          is required or collected during gameplay. Please review the Mind the Salt Privacy Policy for more details on data handling.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>7. Copyright and Intellectual Property</h2>
        <p>
          All content, design, and functionality of the Mind the Salt Game are the intellectual property of Mind the Salt. Reproduction, 
          distribution, or modification of any game content without prior written consent is strictly prohibited.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>8. External Links and Resources</h2>
        <p>
          The game may include links to external websites or resources for further information. Mind the Salt is not responsible for the content, 
          accuracy, or privacy practices of these external sites.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>9. User Conduct</h2>
        <p>
          Users agree to engage with the game in a respectful and lawful manner. Any misuse, including attempts to disrupt or manipulate the game, 
          will result in restricted access and may be reported to appropriate authorities if necessary.
        </p>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>10. Updates to the Disclaimer</h2>
        <p>
          Mind the Salt reserves the right to update this disclaimer and legal notice as needed. Users are encouraged to review this document 
          periodically to stay informed of any changes.
        </p>
      </section>
      
      <section style={{ textAlign: "center", marginTop: "30px" }}>
        <h3>Call to Action for Users</h3>
        <p>
          By participating in the Mind the Salt Game, you acknowledge that you have read, understood, and agree to this disclaimer and legal notice. 
          If you do not agree, please refrain from using the game.
        </p>
        <p>For further inquiries, contact us at: <a href="mailto:support@mindthesalt.org" style={{ color: "var(--link-color)" }}>support@mindthesalt.org</a></p>
      </section>
    </div>
  );
};

export default Policy;
