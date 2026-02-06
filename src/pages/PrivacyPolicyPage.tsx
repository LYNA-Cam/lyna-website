import { Link } from "react-router";
import SectionContainer from "../components/privacy-policy/section-container";
import Typography from "../components/privacy-policy/typography";
import SubSection from "../components/privacy-policy/sub-section";
import List from "../components/privacy-policy/list";

const IndexLink = ({ label, index }: { label: string; index: number }) => (
  <Link
    className="text-xs hover:underline hover:text-indigo-500 my-2 py-1"
    to={{ pathname: "/privacy-policy", hash: `section-${index}` }}
  >
    {label}
  </Link>
);

const indices = [
  "1. Information We Collect",
  "2. How We Use Your Information",
  "3. Legal Bases for Processing",
  "4. Data Sharing and Disclosure",
  "5. Cookies and Similar Technologies",
  "6. International Data Transfers",
  "7. Data Retention",
  "8. Children’s Privacy",
  "9. Your Rights and Choices",
  "10. AI and Wellness Disclaimer",
  "11. Marketing and Communication Preferences",
  "12. Regional Privacy Rights",
  "13. Biometric Data & Face Recognition Disclaimer",
  "14. Data Security Measures",
  "15. Third-Party Services and Integrations",
  "16. Changes to This Privacy Policy",
];

const data = [
  {
    dataType: "Face Data (Selfies)",
    retentionPeriod: "Until deletion or 12 months of inactivity",
  },
  {
    dataType: "Menstrual Cycle Data",
    retentionPeriod: "Until deletion or 12 months of inactivity",
  },
  {
    dataType: "Nutrition Logs",
    retentionPeriod: "Until deletion or 12 months of inactivity",
  },
  {
    dataType: "Account Information",
    retentionPeriod: "Until account deletion + 30 days",
  },
  {
    dataType: "Support Communications",
    retentionPeriod: "2 years after last contact",
  },
  {
    dataType: "Analytics (Anonymized)",
    retentionPeriod: "Indefinitely (cannot be linked to you)",
  },
  {
    dataType: "Temporary Processing Data",
    retentionPeriod: "24 hours maximum",
  },
];

const rights = [
  "You control your face data completely",
  "Delete anytime, instantly – no questions asked",
  "Never sold or shared for profit",
  "Encrypted and secure – AES-256 + TLS 1.3",
  "Used only for wellness personalization – not medical diagnosis",
  "Automatically deleted after 12 months of inactivity",
  "Permanently deleted within 30 days of account deletion",
  "No biometric identification – we don't use face recognition",
];

const PrivacyPolicyPage = () => {
  return (
    <div className="relative pt-40 w-full">
      <div className="container max-w-5xl mx-auto shadow-2xl rounded-b-3xl">
        <div className="py-20 bg-linear-to-r from-indigo-500 to-purple-500 rounded-t-3xl flex items-center justify-center flex-col gap-y-8">
          <h1 className="text-4xl text-white font-bold">Privacy Policy</h1>
          <p className="text-[#4a5568] text-sm">
            Last Updated: December 1, 2025
          </p>
        </div>
        <div className="p-8 space-y-8">
          <section className="bg-[#F7FAFD] p-6 border-l-4 border-l-indigo-500 rounded-md">
            <p className="text-[#4a5568]">
              LYNA Cam UK Limited (<strong>"LYNA Cam"</strong>,{" "}
              <strong>"we"</strong>, <strong>"us"</strong>, or{" "}
              <strong>"our"</strong>) is committed to protecting your privacy
              and personal data. This Privacy Policy explains what information
              we collect, how we use and share it, and the rights you have over
              your data. We design our practices to comply with the UK GDPR, EU
              GDPR, CCPA/CPRA, COPPA, and other applicable data protection laws.
            </p>
          </section>
          <section className="bg-[#F7FAFD] p-6 rounded-md flex flex-col">
            <h3 className="text-xl text-[#4a5568] font-semibold mb-4">
              Quick Navigation
            </h3>
            {indices.map((label, index) => (
              <IndexLink
                key={label.substring(0, 5) + index}
                label={label}
                index={index + 1}
              />
            ))}
          </section>
          <SectionContainer title="1. Information We Collect" index={1}>
            <Typography>
              We collect the following categories of information to provide,
              personalize, and improve LYNA Cam:
            </Typography>
            <SubSection title="1.A. Personal Information">
              <Typography>
                When you sign up for or use LYNA Cam, we may collect personal
                identifiers and account details such as:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Name and contact information (for example, email address)",
                  },
                  {
                    label:
                      "Date of birth or age range (for eligibility and personalization)",
                  },
                  { label: "Account login details and security credentials" },
                  {
                    label:
                      "Any profile information you choose to add (such as display name or avatar)",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="1.B. Health and Wellness Information">
              <Typography>
                LYNA Cam is focused on wellness and performance insights. You
                can choose to provide health and wellness information,
                including:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Menstrual cycle and period data (cycle dates, symptoms, flow intensity)",
                  },
                  {
                    label:
                      "Wellness and lifestyle data (for example, energy, mood, sleep, stress, training)",
                  },
                  {
                    label: "Nutrition, hydration, and meal-related information",
                  },
                  {
                    label:
                      "Notes you add about your body, performance, or wellness goals",
                  },
                ]}
              />
            </SubSection>
            <Typography>
              Some of this information may be considered “special category” or
              “sensitive” data under privacy laws. We only process this data
              where you choose to provide it and where the law allows.
            </Typography>
            <SubSection title="1.C. Device and Usage Information">
              <Typography>
                When you use LYNA Cam, we automatically collect certain
                technical data to run and secure the service, such as:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Device information (for example, device model, operating system, language)",
                  },
                  {
                    label:
                      "Log data (for example, time and duration of app use, features used, crash reports)",
                  },
                  {
                    label:
                      "IP address and general location (country or region, not precise GPS unless you grant permission)",
                  },
                  {
                    label:
                      "Event data that helps us understand how you interact with the app and improve it",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="1.D. Cookies and Similar Technologies">
              <Typography>
                When you visit our website or use web-based features of LYNA
                Cam, we may use cookies, SDKs, and similar technologies to:
              </Typography>
              <List
                items={[
                  { label: "Enable essential site and app functionality" },
                  {
                    label:
                      "Remember your preferences (for example, language, cookie choices)",
                  },
                  {
                    label:
                      "Measure and improve performance and user experience",
                  },
                ]}
              />
            </SubSection>
            <Typography>
              For more details, please see our Cookie Policy at{" "}
              <Link
                to={"/cookie-policy"}
                className="text-indigo-500 hover:underline"
              >
                lyna.cam/cookie-policy.
              </Link>
            </Typography>
            <SubSection title="1.E. Face Data and Facial Analysis">
              <div className="bg-red-300/10 p-6 border-l-4 border-l-red-500 rounded-md">
                <Typography>
                  <strong className="text-red-500">IMPORTANT NOTICE:</strong>{" "}
                  LYNA Cam does not diagnose any health conditions. Face data is
                  used solely for wellness personalization.
                </Typography>
              </div>
            </SubSection>
            <SubSection title="What Face Data We Collect">
              <Typography>
                When you use LYNA Cam's selfie feature, we collect:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Facial photographs (selfies) captured through the in-app camera",
                  },
                  {
                    label: "Facial analysis metrics including:",
                    sub_list: [
                      "Skin tone and undertone detection",
                      "General complexion indicators (brightness, clarity)",
                      "Facial symmetry measurements",
                      "Lighting quality assessment",
                      "Facial feature landmarks (for analysis purposes only)",
                    ],
                  },
                ]}
              />
            </SubSection>
            <SubSection title="What We DO NOT Collect">
              <Typography>
                When you use LYNA Cam's selfie feature, we collect:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Biometric identifiers for authentication or identification",
                  },
                  {
                    label:
                      "Face ID or facial recognition data for identity verification",
                  },
                  {
                    label: "Permanent facial fingerprints or templates",
                  },
                  {
                    label:
                      "Data that could identify specific individuals outside the app context",
                  },
                ]}
                symbol="✗"
                symbol_color="#fb2c36"
              />
            </SubSection>
            <SubSection title="How We Use Face Data">
              <Typography>
                Face data is used exclusively for wellness personalization:
              </Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Personalized wellness recommendations:</strong>{" "}
                        Analyzing visible wellness indicators to provide
                        tailored nutrition and hydration suggestions
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Cycle phase correlation:</strong> Helping you
                        understand how your menstrual cycle phase may affect
                        your appearance
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Hydration tracking:</strong> Detecting potential
                        signs of dehydration to recommend water intake
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Photo quality assurance:</strong> Ensuring
                        adequate lighting and image quality for accurate
                        wellness analysis
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Progress tracking:</strong> Allowing you to
                        visualize changes over time in your wellness journey
                        (optional)
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="What We DON'T Use Face Data For">
              <List
                items={[
                  {
                    label: "Medical diagnosis or disease detection",
                  },
                  {
                    label: "Identification or authentication",
                  },
                  {
                    label: "Advertising or marketing",
                  },
                  {
                    label: "Selling to third parties",
                  },
                  {
                    label: "Training AI models for external use",
                  },
                  {
                    label: "Sharing with data brokers",
                  },
                ]}
                symbol="✗"
                symbol_color="#fb2c36"
              />
            </SubSection>
            <SubSection title="Face Data Storage">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>On Your Device:</strong> Selfies are stored
                        locally in encrypted app storage using iOS
                        Keychain/Android Keystore.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Cloud Storage (Optional):</strong> If you enable
                        cloud backup, encrypted face data is stored on secure
                        AWS servers located in the United Kingdom and European
                        Union.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Encryption:</strong> All face data uses AES-256
                        encryption at rest and TLS 1.3 encryption during
                        transmission.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Access Controls:</strong> Only authorized LYNA
                        Cam personnel can access face data, and only when
                        necessary for providing services or technical support.
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Face Data Sharing">
              <Typography>
                We do NOT share your face data with any third parties.
              </Typography>
              <Typography>
                <strong>
                  We do NOT share your face data with any third parties.
                </strong>
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Face data may be temporarily processed by our secure cloud infrastructure provider (Amazon Web Services) for analysis purposes only.",
                  },
                  {
                    label:
                      "AWS operates under a strict Data Processing Agreement (DPA) and cannot access or use your data for their own purposes.",
                  },
                  {
                    label:
                      "AWS is contractually prohibited from sharing your data with third parties.",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Face Data Retention">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Active Account:</strong> Face data is retained
                        while you maintain an active account and choose to keep
                        it.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Upon Account Deletion:</strong> All face data is
                        permanently deleted within 30 days of account deletion.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Inactive Accounts:</strong> Accounts inactive
                        for 12 months will have all face data automatically
                        deleted.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Temporary Processing Data:</strong> Facial
                        analysis metadata is deleted within 24 hours after
                        processing.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>User Control:</strong> You can delete individual
                        selfies or all face data at any time via Settings →
                        Privacy → Delete Face Data
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Your Face Data Rights">
              <Typography>
                You have complete control over your face data:
              </Typography>
              <List
                items={[
                  {
                    label:
                      "Delete anytime: Remove individual selfies or all face data instantly",
                  },
                  {
                    label: "Access: Request a copy of all your face data",
                  },
                  {
                    label:
                      "Export: Download your face data in a portable format",
                  },
                  {
                    label:
                      "Opt-out: Disable cloud backup to keep all face data on your device only",
                  },
                  {
                    label:
                      "No penalty: Deleting face data will not affect your ability to use other app features",
                  },
                ]}
                symbol="✓"
                symbol_color="#48bb78"
              />
            </SubSection>
            <Typography>
              To exercise these rights, go to{" "}
              <span className="italic">
                Settings → Privacy → Face Data Management
              </span>{" "}
              or email{" "}
              <Link
                to={"mailto:hello@lyna.cam"}
                className="text-indigo-500 hover:underline"
              >
                hello@lyna.cam
              </Link>
              .
            </Typography>
          </SectionContainer>
          <SectionContainer title="2. How We Use Your Information" index={2}>
            <Typography>We use the information we collect to:</Typography>
            <List
              items={[
                {
                  label:
                    "Provide, maintain, and personalize LYNA Cam's features and services",
                },
                {
                  label:
                    "Generate wellness and performance insights, cycle and training guidance, and recommendations",
                },
                {
                  label:
                    "Send reminders, notifications, and in-app messages you choose to receive",
                },
                {
                  label:
                    "Maintain security, prevent fraud, and debug or fix issues",
                },
                {
                  label:
                    "Analyze usage trends and improve our product, including user experience and feature design",
                },
                {
                  label:
                    "Comply with legal obligations and enforce our Terms of Use",
                },
              ]}
            />
          </SectionContainer>
          <SectionContainer
            title="3. Legal Bases for Processing (EEA, UK, Switzerland)"
            index={3}
          >
            <Typography>
              Where applicable law requires a legal basis (for example under the
              GDPR), we rely on:
            </Typography>
            <List
              items={[
                {
                  label: (
                    <>
                      <strong>Consent:</strong> For processing special category
                      data such as health or face data, and certain marketing or
                      analytics activities.
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <strong>Contractual Necessity:</strong> To provide the
                      services you sign up for, such as running the app and
                      personalizing your experience.
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <strong>Legitimate Interests:</strong> To maintain and
                      improve our services, prevent fraud and abuse, and ensure
                      security, provided your rights and interests do not
                      override these interests.
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <strong>Legal Obligations:</strong> Where we must process
                      data to comply with applicable laws or regulatory
                      requirements.
                    </>
                  ),
                },
              ]}
            />
          </SectionContainer>
          <SectionContainer
            title="4. Data Sharing and Disclosure (Enhanced Version)"
            index={4}
          >
            <SubSection title="No Sale of Face Data or Personal Health Information">
              <Typography>
                We never sell your personal data, health data, or face data to
                third parties. Your privacy is not for sale.
              </Typography>
            </SubSection>
            <SubSection title="Service Providers">
              <Typography>
                Trusted partners may access limited data solely to perform
                services on our behalf, under strict confidentiality agreements:
              </Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>
                          Cloud Infrastructure: Amazon Web Services (AWS)
                        </strong>
                        -for secure data storage and processing
                      </>
                    ),
                    sub_list: [
                      "Location: UK and EU data centers",
                      "Access: Cannot view or use your data for their purposes",
                      "Contract: Bound by Data Processing Agreement (DPA)",
                      "Compliance: SOC 2 Type II, ISO 27001 certified",
                    ],
                  },
                  {
                    label: (
                      <>
                        <strong>Analytics:</strong> Anonymized, aggregated usage
                        data only (no personal health data or face data)
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Customer Support:</strong> Only with your
                        explicit consent and only the minimum data necessary to
                        resolve your issue
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Legal Requirements">
              <Typography>
                Data may be disclosed only if required by law:
              </Typography>
              <List
                items={[
                  {
                    label: "Valid court order or subpoena",
                  },
                  {
                    label:
                      "To protect our legal rights or defend against legal claims",
                  },
                  {
                    label: "To protect user safety in emergency situations",
                  },
                ]}
              />
              <Typography>
                You will be notified of any such disclosures unless prohibited
                by law.
              </Typography>
            </SubSection>
            <SubSection title="Business Transfers">
              <Typography>
                In the event of a merger, acquisition, or asset sale:
              </Typography>
              <List
                items={[
                  {
                    label: "You will be notified at least 30 days in advance",
                  },
                  {
                    label:
                      "Your rights and data protections will remain in effect",
                  },
                  {
                    label:
                      "You will have the option to delete your data before the transfer",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="What We NEVER Do With Your Data">
              <List
                items={[
                  {
                    label: "Sell to advertisers or data brokers",
                  },
                  {
                    label: "Share with social media platforms",
                  },
                  {
                    label: "Use for training AI models sold to third parties",
                  },
                  {
                    label: "Share with insurance companies",
                  },
                  {
                    label: "Provide to employers or educational institutions",
                  },
                ]}
                symbol="✗"
                symbol_color="#f56565"
              />
            </SubSection>
          </SectionContainer>
          <SectionContainer
            title="5. Cookies and Similar Technologies"
            index={5}
          >
            <Typography>
              We use cookies and similar technologies on our website and in
              certain app experiences to provide core functionality, remember
              your settings, and understand how people use LYNA Cam.
            </Typography>
            <List
              items={[
                {
                  label: (
                    <>
                      <strong>Essential cookies:</strong> Required for login,
                      security, and core app functionality.
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <strong>Preference cookies:</strong> Remember your
                      language, region, or cookie settings.
                    </>
                  ),
                },
                {
                  label: (
                    <>
                      <strong>Analytics cookies:</strong> Help us understand
                      usage patterns in an anonymized or aggregated way.
                    </>
                  ),
                },
              ]}
            />
            <Typography>
              Where required by law, we ask for your consent before using
              non-essential cookies and provide options to manage your
              preferences. For more details, see our Cookie Policy at
              <Link
                to={"/cookie-policy"}
                className="text-indigo-500 hover:underline"
              >
                lyna.cam/cookie-policy.
              </Link>
            </Typography>
          </SectionContainer>
          <SectionContainer title="6. International Data Transfers" index={6}>
            <Typography>
              We primarily store and process personal data on servers located in
              the United Kingdom and European Union. If we transfer your data to
              other countries, we will put in place appropriate safeguards (such
              as Standard Contractual Clauses or equivalent mechanisms) to
              ensure your data receives a level of protection essentially
              equivalent to that in your home jurisdiction.
            </Typography>
          </SectionContainer>
          <SectionContainer
            title="7. Data Retention (Enhanced Version)"
            index={7}
          >
            <SubSection title="General Data Retention">
              <Typography>
                We retain your data only as long as necessary for the purposes
                described in this policy:
              </Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Active Use:</strong> While you actively use LYNA
                        Cam
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Legal Requirements:</strong>As required by
                        applicable law
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Legitimate Business:</strong>For audit,
                        security, or fraud prevention (anonymized where
                        possible)
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Specific Retention Periods">
              <div className="w-full mx-auto">
                <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-indigo-500 text-white">
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Data Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.map((row, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-xs text-[#1A202C]">
                            {row.dataType}
                          </td>
                          <td className="px-6 py-4 text-xs text-[#1A202C]">
                            {row.retentionPeriod}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </SubSection>
            <SubSection title="Account Deletion Process">
              <Typography>When you delete your account:</Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Immediate:</strong> Your account is deactivated
                        and data is inaccessible
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Within 7 days:</strong> Face data is permanently
                        deleted
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Within 30 days:</strong> All personal and health
                        data is permanently deleted from active systems
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Within 90 days:</strong> Data is purged from
                        backup systems
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="How to Delete Your Data">
              <Typography>You can delete your data via:</Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>In-App:</strong>{" "}
                        <span className="italic">
                          Settings → Account → Delete Account
                        </span>
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Email:</strong>{" "}
                        <Link
                          to={"mailto:hello@lyna.cam"}
                          className="text-indigo-500 hover:underline"
                        >
                          hello@lyna.cam
                        </Link>{" "}
                        with subject "Account Deletion Request"
                      </>
                    ),
                  },
                ]}
              />
              <Typography>
                We will confirm deletion within 48 hours and complete the
                process within 30 days.
              </Typography>
            </SubSection>
            <SubSection title="Data Retention Exceptions">
              <Typography>We may retain certain data longer if:</Typography>
              <List
                items={[
                  {
                    label: "Required by law (e.g., tax records, legal holds)",
                  },
                  {
                    label: "Necessary for ongoing legal matters",
                  },
                  {
                    label: "You have unpaid debts to LYNA Cam",
                  },
                  {
                    label:
                      "For security, fraud prevention, or safety (anonymized where possible)",
                  },
                ]}
              />
              <Typography>
                You will be notified if any of your data is retained beyond
                standard periods.
              </Typography>
            </SubSection>
          </SectionContainer>
          <SectionContainer title="8. Children’s Privacy" index={8}>
            <Typography>
              LYNA Cam is not intended for children under the minimum age of
              digital consent in their country (for example, 13 or 16). We do
              not knowingly collect personal data from children without
              appropriate parental or guardian consent where required. If you
              believe a child has provided us with personal data in violation of
              this policy, please contact us so we can delete it.
            </Typography>
          </SectionContainer>
          <SectionContainer title="9. Your Rights and Choices" index={9}>
            <Typography>
              Depending on your location, you may have certain rights over your
              personal data, including the right to:
            </Typography>
            <List
              items={[
                { label: "Access the personal data we hold about you" },
                {
                  label: "Request correction of inaccurate or incomplete data",
                },
                {
                  label:
                    "Request deletion of your data, subject to legal exceptions",
                },
                {
                  label:
                    "Object to or request restriction of certain processing",
                },
                {
                  label:
                    "Receive your data in a portable, machine-readable format",
                },
                {
                  label:
                    "Withdraw consent where our processing is based on consent",
                },
              ]}
            />
            <Typography>
              Many of these rights can be exercised directly via in-app
              settings. You can also email us at hello@lyna.cam or contact our
              Data Protection Officer at dpo@lyna.cam. Additional
              region-specific rights are described in Section 12.
            </Typography>
          </SectionContainer>
          <SectionContainer title="10. AI and Wellness Disclaimer" index={10}>
            <Typography>
              LYNA Cam uses algorithms and artificial intelligence to generate
              insights, recommendations, and predictions. These outputs are
              probabilistic and may not always be accurate or applicable to your
              situation.
            </Typography>
            <br />
            <br />
            <Typography>
              LYNA Cam is for informational and wellness purposes only and does
              not provide medical advice, diagnosis, or treatment. Always
              consult a qualified healthcare professional about health-related
              questions and never ignore or delay seeking professional medical
              advice because of information obtained from LYNA Cam.
            </Typography>
          </SectionContainer>
          <SectionContainer
            title="11. Marketing and Communication Preferences"
            index={11}
          >
            <Typography>
              We may send you emails, push notifications, or in-app messages
              about new features, tips, or offers, in line with applicable law
              and your preferences.
            </Typography>
            <br />
            <br />
            <Typography>You can control these communications by:</Typography>
            <List
              items={[
                {
                  label:
                    "Adjusting your notification and marketing preferences in the app settings",
                },
                {
                  label: "Clicking “unsubscribe” links in marketing emails",
                },
                {
                  label: (
                    <>
                      Contacting us at{" "}
                      <Link
                        to={"mailto:hello@lyna.cam"}
                        className="text-indigo-500 hover:underline"
                      >
                        hello@lyna.cam
                      </Link>
                    </>
                  ),
                },
              ]}
            />
          </SectionContainer>
          <SectionContainer title="12. Regional Privacy Rights" index={12}>
            <SubSection title="12.A. European Economic Area (EEA), UK, and Switzerland – GDPR Rights">
              <Typography>
                If you are located in the EEA, UK, or Switzerland, you have the
                following rights under GDPR:
              </Typography>
            </SubSection>
            <SubSection title="Legal Basis for Processing:">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Consent:</strong> You provide explicit, informed
                        consent before we collect face data and sensitive health
                        information.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Contractual Necessity:</strong> To provide the
                        services you signed up for.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Legitimate Interest:</strong> To improve our
                        services and ensure security (when not overridden by
                        your privacy rights).
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Your GDPR Rights:">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Right to Access:</strong> Request a copy of all
                        personal data we hold about you.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Rectification:</strong> Correct
                        inaccurate or incomplete data.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>
                          Right to Erasure ("Right to be Forgotten"):
                        </strong>{" "}
                        Request deletion of your data.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Restrict Processing:</strong> Limit how
                        we use your data in certain circumstances.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Data Portability:</strong> Receive your
                        data in a machine-readable format.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Object:</strong> Object to specific
                        types of processing (e.g., direct marketing, automated
                        decisions).
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Withdraw Consent:</strong> Revoke
                        consent at any time (may affect app functionality).
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Lodge a Complaint:</strong> File a
                        complaint with your local data protection authority.
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <Typography>
              <strong>Data Protection Officer:</strong>{" "}
              <Link
                to={"mailto:dpo@lyna.cam"}
                className="text-indigo-500 hover:underline"
              >
                dpo@lyna.cam
              </Link>
            </Typography>
            <br />
            <br />
            <Typography>
              <strong>EU Representative (if applicable):</strong> [Name and
              Address of EU Representative if applicable]
            </Typography>
            <br />
            <br />
            <Typography>
              <strong>Supervisory Authority:</strong> You have the right to
              lodge a complaint with the Information Commissioner's Office (ICO)
              in the UK or your local data protection authority.
            </Typography>
            <SubSection title="12.B. California Residents – CCPA/CPRA Rights">
              <Typography>
                If you are a California resident, you have the following rights
                under CCPA/CPRA:
              </Typography>
              <List
                items={[
                  {
                    label: <strong>Right to Know:</strong>,
                    sub_list: [
                      "What personal information and sensitive data we collect",
                      "Why we collect it",
                      "Who we share it with (we don't sell it)",
                      "How long we keep it",
                    ],
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Delete:</strong> Request deletion of
                        all personal information (with limited exceptions)
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Opt-Out of Sale:</strong> We do not
                        sell personal information, so this right is
                        automatically satisfied
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Non-Discrimination:</strong> We will
                        not discriminate against you for exercising your privacy
                        rights
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Right to Correct:</strong> Request correction of
                        inaccurate personal information
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>
                          Right to Limit Use of Sensitive Personal Information:
                        </strong>{" "}
                        Limit our use of sensitive personal information (health
                        data, face data) to providing services you requested
                      </>
                    ),
                  },
                ]}
              />
              <Typography>How to Exercise California Rights:</Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Email:</strong>{" "}
                        <Link
                          to={"mailto:hello@lyna.cam"}
                          className="text-indigo-500 hover:underline"
                        >
                          hello@lyna.cam
                        </Link>
                      </>
                    ),
                  },
                  {
                    label: <>Subject: "California Privacy Rights Request"</>,
                  },
                  {
                    label: "We will respond within 45 days.",
                  },
                  {
                    label:
                      "Verification: We may need to verify your identity before processing requests.",
                  },
                  {
                    label:
                      "Authorized Agent: You may designate an authorized agent to make requests on your behalf.",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="12.C. Other Jurisdictions">
              <Typography>
                We comply with applicable data protection laws in all
                jurisdictions where we operate. If you have questions about your
                rights under local law, contact hello@lyna.cam.
              </Typography>
            </SubSection>
          </SectionContainer>
          <SectionContainer
            title="13. Biometric Data and Face Recognition Disclaimer"
            index={13}
          >
            <SubSection title="Important Clarification">
              <Typography>
                LYNA Cam does NOT use face recognition or biometric
                identification technology.
              </Typography>
            </SubSection>
            <SubSection title="What We Do:">
              <List
                items={[
                  {
                    label:
                      "Analyze facial photographs for wellness indicators (skin tone, symmetry, complexion)",
                  },
                  {
                    label:
                      "Provide personalized wellness recommendations based on visible characteristics",
                  },
                  {
                    label:
                      "Track changes in your appearance over time (optional)",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="What We DON'T Do:">
              <List
                items={[
                  {
                    label: "Create biometric templates or facial fingerprints",
                  },
                  {
                    label:
                      "Use face data for identity verification or authentication",
                  },
                  {
                    label:
                      "Compare your face to databases of other individuals",
                  },
                  {
                    label:
                      "Share biometric data with law enforcement or government agencies",
                  },
                  {
                    label:
                      "Use facial recognition to identify you in photos or videos",
                  },
                ]}
                symbol="✗"
                symbol_color="#f56565"
              />
            </SubSection>
            <SubSection title="Illinois Residents (BIPA)">
              <Typography>
                If you are an Illinois resident, LYNA Cam complies with the
                Illinois Biometric Information Privacy Act (BIPA):
              </Typography>
              <List
                items={[
                  {
                    label:
                      "We obtain explicit consent before collecting any biometric identifiers",
                  },
                  {
                    label:
                      "We publish retention schedules and deletion guidelines (see Section 7)",
                  },
                  {
                    label:
                      "We do not sell, lease, or trade biometric information",
                  },
                  {
                    label:
                      "We protect biometric information with industry-standard security",
                  },
                  {
                    label:
                      "We will notify you of any biometric data breaches within 10 days",
                  },
                ]}
              />
              <Typography>
                However, LYNA Cam does not collect biometric identifiers as
                defined by BIPA, as we do not use face data for identification
                purposes.
              </Typography>
            </SubSection>
            <SubSection title="Texas and Washington Residents">
              <Typography>
                Similar protections apply under Texas and Washington state
                biometric privacy laws. We do not collect biometric identifiers
                for identification purposes.
              </Typography>
            </SubSection>
          </SectionContainer>
          <SectionContainer title="14. Data Security Measures" index={14}>
            <SubSection title="Technical Security">
              <List
                items={[
                  {
                    label:
                      "Encryption at Rest: AES-256 encryption for all stored data",
                  },
                  {
                    label:
                      "Encryption in Transit: TLS 1.3 for all data transmission",
                  },
                  {
                    label:
                      "Secure Key Management: Hardware-backed security for encryption keys",
                  },
                  {
                    label:
                      "Access Controls: Role-based access with least-privilege principle",
                  },
                  {
                    label:
                      "Multi-Factor Authentication: Required for all employee access",
                  },
                  {
                    label:
                      "Regular Security Audits: Annual third-party penetration testing",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Organizational Security">
              <List
                items={[
                  {
                    label:
                      "Employee Training: Regular privacy and security training for all staff",
                  },
                  {
                    label:
                      "Background Checks: All employees with data access undergo background checks",
                  },
                  {
                    label:
                      "Confidentiality Agreements: All employees and contractors sign NDAs",
                  },
                  {
                    label:
                      "Incident Response Plan: Documented procedures for data breaches",
                  },
                  {
                    label:
                      "Data Minimization: We collect only what's necessary",
                  },
                  {
                    label:
                      "Regular Reviews: Quarterly privacy and security assessments",
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Data Breach Notification">
              <Typography>In the unlikely event of a data breach:</Typography>
              <List
                items={[
                  {
                    label:
                      "Notification: We will notify affected users within 72 hours of discovery",
                  },
                  {
                    label:
                      "Authorities: We will notify relevant data protection authorities as required",
                  },
                  {
                    label:
                      "Details: We will explain what happened, what data was affected, and what we're doing about it",
                  },
                  {
                    label:
                      "Support: We will provide resources and support to affected users",
                  },
                ]}
              />
            </SubSection>
          </SectionContainer>
          <SectionContainer
            title="15. Third-Party Services and Integrations"
            index={15}
          >
            <Typography>
              LYNA Cam may integrate with third-party services to enhance
              functionality. When you connect third-party services:
            </Typography>
            <SubSection title="Apple Health / Google Fit (Optional)">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>What we access:</strong> Only health data you
                        explicitly authorize (e.g., step count, sleep data).
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>How we use it:</strong> To provide more
                        personalized wellness insights.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Sharing:</strong> We do not share your LYNA Cam
                        data with Apple Health or Google Fit.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Control:</strong> You can revoke access at any
                        time through device settings.
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Nutrition Databases">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Anonymous:</strong> Searches for food nutrition
                        data are not linked to your identity.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>No sharing:</strong> We do not share your meal
                        logs or nutrition data with third-party databases.
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Analytics Services">
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Anonymized only:</strong> We use anonymized,
                        aggregated analytics (e.g., Google Analytics).
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>No personal data:</strong> Analytics providers
                        cannot identify you.
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Opt-out:</strong> You can disable analytics
                        tracking in Settings.
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Payment Processors (if applicable)">
              <List
                items={[
                  {
                    label:
                      "Stripe/Apple Pay/Google Pay: For secure payment processing.",
                  },
                  {
                    label:
                      "Limited data: Only payment information necessary to process transactions.",
                  },
                  {
                    label:
                      "PCI compliant: All payment processors are PCI DSS Level 1 certified.",
                  },
                  {
                    label:
                      "No storage: We do not store your full payment card details.",
                  },
                ]}
              />
            </SubSection>
          </SectionContainer>
          <SectionContainer
            title="16. Changes to This Privacy Policy"
            index={16}
          >
            <SubSection title="How We Notify You">
              <Typography>
                We will notify you of material changes to this Privacy Policy:
              </Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>In-App Notification:</strong> Prominent banner
                        upon app launch
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Email:</strong> Sent to your registered email
                        address
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Website Update:</strong> Posted at
                        <Link
                          to={"/privacy-policy"}
                          className="text-indigo-500 hover:underline"
                        >
                          lyna.cam/privacy-policy
                        </Link>{" "}
                        with "Last Updated" date
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Notice Period:</strong> At least 30 days before
                        changes take effect for material changes
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="What Constitutes a Material Change">
              <List
                items={[
                  { label: "New uses of face data or health data" },
                  { label: "Sharing data with new types of third parties" },
                  { label: "Changes to data retention periods" },
                  { label: "Reduction in security measures or user rights" },
                  { label: "Changes to how we handle sensitive data" },
                ]}
              />
            </SubSection>
            <SubSection title="Your Options">
              <Typography>If you disagree with changes:</Typography>
              <List
                items={[
                  {
                    label: (
                      <>
                        <strong>Delete data:</strong> You may delete your
                        account and data before changes take effect
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Opt-out:</strong> You may opt-out of new data
                        collection practices (where possible)
                      </>
                    ),
                  },
                  {
                    label: (
                      <>
                        <strong>Contact us:</strong> Email{" "}
                        <Link
                          to={"mailto:hello@lyna.cam"}
                          className="text-indigo-500 hover:underline"
                        >
                          hello@lyna.cam
                        </Link>{" "}
                        with concerns
                      </>
                    ),
                  },
                ]}
              />
            </SubSection>
            <SubSection title="Minor Changes">
              <Typography>
                For minor changes (e.g., contact information updates,
                clarifications), we will update the "Last Updated" date without
                additional notice. We encourage you to review this Privacy
                Policy periodically at{" "}
                <Link
                  to={"/privacy-policy"}
                  className="text-indigo-500 hover:underline"
                >
                  lyna.cam/privacy-policy
                </Link>
                .
              </Typography>
              <div className="bg-white border-2 border-indigo-300 rounded-2xl p-8 shadow-sm my-8">
                <h1 className="text-2xl font-semibold text-indigo-600 mb-6">
                  Quick Reference: Your Face Data Rights
                </h1>

                <div className="space-y-3">
                  {rights.map((right, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {right}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                  Questions or Concerns?
                </h2>

                <div className="space-y-4 text-center">
                  <p className="text-gray-600 text-sm">
                    For questions about face data, privacy, or this policy:
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Email:{" "}
                      <a
                        href="mailto:hello@lyna.cam"
                        className="text-indigo-500 hover:text-indigo-600 transition-colors"
                      >
                        hello@lyna.cam
                      </a>
                    </p>

                    <p className="text-sm text-gray-600">
                      Data Protection Officer:{" "}
                      <a
                        href="mailto:dpo@lyna.cam"
                        className="text-indigo-500 hover:text-indigo-600 transition-colors"
                      >
                        dpo@lyna.cam
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center leading-relaxed px-4 my-8">
                By using LYNA Cam, including LYNA Cam's selfie feature, you
                acknowledge that you have read and understood how we collect,
                use, store, and protect your data as described in this Privacy
                Policy.
              </p>
            </SubSection>
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
