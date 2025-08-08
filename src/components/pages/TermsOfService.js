import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none prose-invert">
            <p className="text-gray-300 mb-8">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Yumemi ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Yumemi is a mobile application that provides a collaborative roleplay and storytelling platform. The App allows users to create, share, and participate in interactive storytelling experiences within a dreamy mobile world.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
              <p className="text-gray-300 mb-4">
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Conduct</h2>
              <p className="text-gray-300 mb-4">
                You agree not to use the App to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>Post content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Upload or transmit viruses, worms, or any other malicious code</li>
                <li>Interfere with or disrupt the App or servers connected to the App</li>
                <li>Attempt to gain unauthorized access to any part of the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Content and Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                Users retain ownership of content they create within the App. However, by posting content, you grant Yumemi a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the App, to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Beta Testing</h2>
              <p className="text-gray-300 mb-4">
                Yumemi is currently in beta testing through TestFlight. Beta users acknowledge that the App may contain bugs, errors, and other issues. We are not liable for any damages resulting from the use of beta software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimers</h2>
              <p className="text-gray-300 mb-4">
                The App is provided "as is" without warranties of any kind. We do not guarantee that the App will be uninterrupted or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Yumemi be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to the App immediately, without prior notice, for any reason, including breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-300">
                Email: <a href="mailto:yumemi.inquiries@gmail.com" className="text-purple-400 hover:text-purple-300">yumemi.inquiries@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
