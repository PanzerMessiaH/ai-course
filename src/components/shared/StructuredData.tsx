'use client';

import React from 'react';

interface StructuredDataProps {
  type?: 'course' | 'organization' | 'website' | 'all';
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'all' }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ACCSO",
    "url": "https://accso.com",
    "logo": "https://ai-course.accso.com/accso-logo.png",
    "description": "Leading enterprise software development and AI training company",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Training Inquiries",
      "email": "training@accso.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    }
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI-Native Agentic Programming Bootcamp",
    "description": "Transform your enterprise team into AI-Native Engineers in just 2-3 days. Learn Agentic Programming methodologies from industry pioneers who've deployed AI-first systems at scale.",
    "provider": {
      "@type": "Organization",
      "name": "ACCSO",
      "url": "https://accso.com"
    },
    "instructor": {
      "@type": "Organization", 
      "name": "ACCSO & Dominic Systems"
    },
    "educationalLevel": "Professional",
    "courseMode": ["In-person", "Intensive"],
    "timeRequired": "P3D",
    "numberOfCredits": 0,
    "audience": {
      "@type": "Audience",
      "audienceType": "Software Engineers, Technical Leads, Enterprise Development Teams",
      "educationalRole": "Professional"
    },
    "teaches": [
      "AI-Native Programming Methodologies",
      "Agentic Programming Patterns", 
      "Enterprise Software Development without Code",
      "AI-First System Architecture",
      "Automated Programming Techniques"
    ],
    "coursePrerequisites": "Software engineering experience",
    "educationalCredentialAwarded": "Certificate of Completion",
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI-Native Agentic Programming Bootcamp",
    "url": "https://ai-course.accso.com",
    "description": "Enterprise training in AI-Native and Agentic Programming methodologies",
    "publisher": {
      "@type": "Organization",
      "name": "ACCSO"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ai-course.accso.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const renderSchema = (schema: object, key: string) => (
    <script
      key={key}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );

  if (type === 'course') return renderSchema(courseSchema, 'course-schema');
  if (type === 'organization') return renderSchema(organizationSchema, 'org-schema');
  if (type === 'website') return renderSchema(websiteSchema, 'website-schema');

  // Render all schemas by default
  return (
    <>
      {renderSchema(organizationSchema, 'org-schema')}
      {renderSchema(courseSchema, 'course-schema')}
      {renderSchema(websiteSchema, 'website-schema')}
    </>
  );
};

export default StructuredData;
