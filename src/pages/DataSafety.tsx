import { motion } from "motion/react";
import type React from "react";
import { Link } from "react-router";

const Card = ({
  symbol,
  label,
  caption,
}: {
  symbol: string;
  label: string;
  caption: string;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      className="relative flex flex-col p-8 items-center justify-center drop-shadow-md bg-white rounded-2xl space-y-4"
      whileHover={{ y: "-10px" }}
    >
      <span className="size-[60px] bg-linear-135 from-[#6B46C1] to-[#8B5CF6] rounded-full flex items-center justify-center text-3xl">
        {symbol}
      </span>
      <h3 className="text-[2rem] text-[#6B46C1] font-bold text-center">
        {label}
      </h3>
      <p className="text-base text-[#64748B] text-center">{caption}</p>
    </motion.div>
  );
};

const ImportantNotice = ({
  symbol,
  label,
  caption,
}: {
  symbol: string;
  label: string;
  caption: React.ReactNode;
}) => {
  return (
    <div className="w-full">
      <div className="bg-linear-to-r from-amber-100 to-yellow-50 border-2 border-amber-600 rounded-2xl py-8 px-4 shadow-sm">
        <div className="flex gap-3">
          {/* Warning Icon */}
          <span className="text-3xl">{symbol}</span>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-amber-900 font-bold text-lg mb-2">{label}</h3>
            <p className="text-amber-900 text-sm leading-relaxed">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Container = ({
  children,
  label,
  symbol,
}: {
  children: React.ReactNode;
  label: string;
  symbol: string;
}) => {
  return (
    <div className="relative bg-white p-8 space-y-8 drop-shadow-md rounded-3xl">
      <div className="relative flex items-center gap-x-4">
        <span className="text-xl size-[45px] bg-linear-135 from-[#6B46C1] to-[#8B5CF6] flex items-center justify-center rounded-xl">
          {symbol}
        </span>
        <h3 className="text-3xl text-[#6B46C1] font-bold">{label}</h3>
      </div>
      {children}
    </div>
  );
};

const Tail = ({
  symbol,
  label,
  caption,
  color = "#6B46C1",
  alpha_color = "#F9FAFB",
}: {
  symbol: string;
  label: string;
  caption: string;
  color?: string;
  alpha_color?: string;
}) => {
  return (
    <div
      className={`border-l-4 rounded-xl p-5 flex gap-x-4`}
      style={{ borderColor: color, backgroundColor: alpha_color }}
    >
      <span
        className="size-[24px] flex items-center justify-center text-white rounded-full"
        style={{ backgroundColor: color }}
      >
        {symbol}
      </span>
      <div className="space-y-2">
        <h3 className="text-[#2D1B4E] font-bold">{label}</h3>
        <p className="text-[#64748B]">{caption}</p>
      </div>
    </div>
  );
};

const CardV2 = ({ label, caption }: { label: string; caption: string }) => {
  return (
    <div className="border border-[#C4B5FD] bg-linear-135 from-[#F5F3FF] to-[#EDE9FE] rounded-xl p-6 space-y-4">
      <h3 className="text-[#6B46C1] font-bold">{label}</h3>
      <p className="text-[#64748B]">{caption}</p>
    </div>
  );
};

const DataSafety = () => {
  return (
    <section className="relative pt-40 w-full">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="bg-linear-135 from-[#6B46C1] to-[#8B5CF6] py-16 px-8 w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-y-8">
          <h1 className="text-4xl text-white font-bold text-center">
            🔒 Data Safety
          </h1>
          <p className="text-lg opacity-95 text-center text-white">
            Your privacy and security are at the heart of everything we do at
            LYNA Cam
          </p>
        </div>
        <div className="relative w-full flex flex-col py-12 px-8 gap-y-10">
          <div className="relative bg-white drop-shadow-md p-10 space-y-4 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#6B46C1]">
              Transparency First
            </h2>
            <p className="text-xs text-[#2D1B4E]">
              We believe you deserve to know exactly how your data is collected,
              used, and protected. This page provides a complete overview of our
              data practices in clear, simple language.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Card
              symbol="🔐"
              label="AES-256"
              caption="Military-grade encryption for all your data"
            />
            <Card
              symbol="🚫"
              label="Never Sold"
              caption="Your data is not for sale, period"
            />
            <Card
              symbol="✅"
              label="GDPR Compliant"
              caption="Full compliance with global privacy laws"
            />
            <Card
              symbol="🗑️"
              label="30 Days"
              caption="Complete data deletion upon account removal"
            />
          </div>
          <ImportantNotice
            symbol="⚠️"
            label="Important Notice"
            caption={
              <>
                <strong>LYNA Cam does not diagnose medical conditions.</strong>
                All face data and health tracking features are designed for
                wellness personalization only, not medical diagnosis.
              </>
            }
          />
          <Container symbol="📊" label="Data We Collect">
            <Tail
              label="Account Information"
              caption="Name, email address, date of birth, and account credentials to provide you with personalized services"
              symbol="✓"
            />
            <Tail
              label="Menstrual Cycle Data"
              caption="Cycle dates, symptoms, hormonal indicators, and fertility data to provide accurate predictions and insights"
              symbol="✓"
            />
            <Tail
              label="Face Data (Selfies)"
              caption="Facial photographs for wellness personalization, skin tone analysis, and optional progress tracking. Not used for biometric identification."
              symbol="✓"
            />
            <Tail
              label="Nutrition & Lifestyle Data"
              caption="Food logs, meal photos, exercise habits, mood, and sleep patterns to provide personalized nutrition recommendations"
              symbol="✓"
            />
            <Tail
              label="Technical Data"
              caption="Device information, app usage statistics, and diagnostic data to improve app performance and fix bugs"
              symbol="✓"
            />
          </Container>
          <Container symbol="🚫" label="Data We DON'T Collect">
            <Tail
              label="Biometric Identifiers"
              caption="We do NOT collect facial fingerprints, Face ID data, or use face recognition for identification"
              symbol="✗"
              color="#DC2626"
              alpha_color="#FEE2E2"
            />
            <Tail
              label="Medical Records"
              caption="We do NOT access your medical records or integrate with healthcare systems"
              symbol="✗"
              color="#DC2626"
              alpha_color="#FEE2E2"
            />
            <Tail
              label="Financial Information"
              caption="Payment processing is handled by secure third parties (Stripe). We never store full payment card details"
              symbol="✗"
              color="#DC2626"
              alpha_color="#FEE2E2"
            />
            <Tail
              label="Precise Location (by default)"
              caption="We only collect location data if you explicitly grant permission, and it's never required for core features"
              symbol="✗"
              color="#DC2626"
              alpha_color="#FEE2E2"
            />
          </Container>
          <Container symbol="🎯" label="How We Use Your Data">
            <Tail
              symbol="1"
              label="Personalized Wellness Insights"
              caption="Provide cycle predictions, nutrition recommendations, and lifestyle tips tailored to your unique profile"
            />
            <Tail
              symbol="2"
              label="Improve Our Services"
              caption="Analyze anonymized, aggregated data to enhance app features, fix bugs, and develop new functionality"
            />
            <Tail
              symbol="3"
              label="Communication"
              caption="Send you cycle reminders, wellness tips, customer support responses, and app updates (you control notifications)"
            />
            <Tail
              symbol="4"
              label="Research & Development"
              caption="Use anonymized data to advance women's health research and improve cycle prediction algorithms"
            />
          </Container>
          <Container symbol="🔐" label="Security Measures">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CardV2
                label="🔒 AES-256 Encryption"
                caption="All data stored with military-grade encryption at rest"
              />
              <CardV2
                label="🌐 TLS 1.3"
                caption="Secure data transmission using latest encryption protocols"
              />
              <CardV2
                label="🔑 Secure Key Management"
                caption="Hardware-backed security for encryption keys"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CardV2
                label="👥 Access Controls"
                caption="Role-based access with least-privilege principle"
              />
              <CardV2
                label="🛡️ Regular Audits"
                caption="Annual third-party security assessments and penetration testing"
              />
              <CardV2
                label="📊 Data Minimization"
                caption="We collect only what's absolutely necessary"
              />
            </div>
          </Container>
          <Container symbol="🤝" label="Data Sharing">
            <ImportantNotice
              label="We Never Sell Your Data"
              symbol="🚫"
              caption="Your personal information, health data, and face data are NEVER sold, rented, or shared with advertisers, data brokers, or third parties for profit."
            />
            <Tail
              symbol="☁️"
              label="Cloud Infrastructure (AWS)"
              caption="Secure data storage and processing only. AWS cannot access or use your data for their purposes under strict Data Processing Agreement"
            />
            <Tail
              symbol="📈"
              label="Analytics (Anonymized)"
              caption="Only anonymized, aggregated usage data shared with analytics providers. They cannot identify you"
            />
            <Tail
              symbol="⚖️"
              label="Legal Requirements"
              caption="Data disclosed only if required by law (court orders, subpoenas). You'll be notified unless prohibited by law"
            />
          </Container>
          <Container symbol="⚡" label="Your Rights & Controls">
            <Tail
              symbol="🗑️"
              label="Delete Anytime"
              caption="Delete individual data points, all face data, or your entire account instantly in Settings"
            />
            <Tail
              symbol="👁️"
              label="Access Your Data"
              caption="Request a complete copy of all your personal and health data in portable format"
            />
            <Tail
              symbol="✏️"
              label="Correct Inaccuracies"
              caption="Update or correct any inaccurate information in your profile"
            />
            <Tail
              symbol="🚫"
              label="Opt-Out"
              caption="Control marketing communications, data sharing, and optional features"
            />
            <Tail
              symbol="📦"
              label="Data Portability"
              caption="Export your data to take to another service if you choose"
            />
          </Container>
          <Container symbol="⏱️" label="Data Retention">
            <Tail
              symbol="📅"
              label="Active Account"
              caption="Data retained while you actively use LYNA Cam"
            />
            <Tail
              symbol="⏰"
              label="Inactive Account (12 months)"
              caption="All face data and personal information automatically deleted after 12 months of inactivity"
            />
            <Tail
              symbol="🗑️"
              label="Account Deletion"
              caption="Face data deleted within 7 days, all personal data within 30 days, and purged from backups within 90 days"
            />
            <Tail
              symbol="⚡"
              label="Temporary Processing Data"
              caption="Facial analysis metadata automatically deleted within 24 hours"
            />
          </Container>
          <div className="flex flex-col items-center justify-center gap-4 py-12 px-4 text-center bg-white drop-shadow-md rounded-2xl">
            <p className="text-gray-600 text-sm">
              For complete details, please read our full Privacy Policy
            </p>

            <Link
              to={"/privacy-policy"}
              className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors"
            >
              View Privacy Policy →
            </Link>

            <p className="text-gray-600 text-sm">
              Questions? Contact us at{" "}
              <Link
                to="mailto:hello@lyna.cam"
                className="text-indigo-600 hover:underline"
              >
                hello@lyna.cam
              </Link>
            </p>

            <p className="text-gray-500 text-xs">
              Last Updated: December 1, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSafety;
