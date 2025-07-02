'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { Section } from '../shared';

interface ContentCardProps {
  icon: string;
  title: string;
  items: string[];
  variant?: 'problem' | 'solution';
}

const ContentCard: React.FC<ContentCardProps> = ({ icon, title, items, variant = 'problem' }) => (
  <Card
    sx={{
      height: '100%',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: variant === 'problem' 
        ? '2px solid rgba(255, 130, 40, 0.2)' 
        : '2px solid rgba(0, 203, 117, 0.2)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: variant === 'problem'
          ? '0 8px 24px rgba(255, 130, 40, 0.15)'
          : '0 8px 24px rgba(0, 203, 117, 0.15)',
      },
    }}
  >
    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            fontSize: '2.5rem',
            mr: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: variant === 'problem' ? '#ff8228' : 'secondary.main',
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Card Content */}
      <Box component="ul" sx={{ 
        listStyle: 'none', 
        p: 0, 
        m: 0,
        flex: 1,
        '& li': {
          position: 'relative',
          pl: 3,
          mb: 2,
          color: 'text.primary',
          lineHeight: 1.6,
          '&:before': {
            content: variant === 'problem' ? '"•"' : '"✓"',
            position: 'absolute',
            left: 0,
            color: variant === 'problem' ? '#ff8228' : 'secondary.main',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          },
          '&:last-child': {
            mb: 0,
          },
        },
      }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </Box>
    </CardContent>
  </Card>
);

const ProblemSolutionSection = () => {
  const problems = [
    "You don't write the code anymore. Agents do.",
    "Your job is to guide, review, and refine their work—like a lead engineer, architect, or strategist working through intelligent collaborators.",
    "Every role in your Scrum team—developer, tester, designer, architect, product owner—works through agents to:",
    "Assess product goals, constraints, and technical approaches",
    "Plan sprints, epics, user stories, and architecture",
    "Design APIs, UIs, data models, and system interactions",
    "Implement production-ready code, tests, configs, docs",
    "Reflect through retrospectives and feed learning into memory",
  ];

  const solutions = [
    "Using Cursor Memory Bank, the system builds persistent knowledge—not just output. It enables:",
    "Personal Knowledge Loops: Each human—agent pairing creates a personal memory space—recording context, rationale, preferences, and lessons learned.",
    "Team Knowledge Overlap: These memories connect via reflection and memory modes, forming overlapping Venn diagrams of shared understanding.",
    "A Living Project Knowledge Base: These intersections create a persistent team or organizational memory—a knowledge system that accelerates delivery by learning from every interaction.",
    "Rooted in Personal Knowledge Management (PKM) and Knowledge Management (KM) theory, this model:",
    "Captures both tacit and explicit knowledge",
    "Embeds learning directly into the development process",
    "Turns retrospectives into fuel for smarter agent behavior",
    "Makes every future sprint faster and more informed than the last",
  ];

  return (
    <Section spacing="large">
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 600,
            mb: 3,
            lineHeight: 1.2,
          }}
        >
          The Future of Software Development: Agents Write the Code—You Guide the Intelligence
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          In this transformational course, your Scrum team will learn to build software in a completely new way:<br/>
          Agents—like ChatGPT, Claude, Gemini, and DeepSeek—write the code, generate requirements, create tests, design interfaces, and produce documentation. Humans no longer manually write these artifacts.<br/><br/>
          This is Agentic Programming: a paradigm where every role in your team collaborates with intelligent agents to plan, design, implement, and evolve software systems—faster, more reflectively, and with growing organizational intelligence.<br/><br/>
          This isn&apos;t about building AI apps. It&apos;s about building everything else—with AI.
        </Typography>
      </Box>

      {/* Problem/Solution Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
          gap: 4,
          mb: 4,
        }}
      >
        <ContentCard
          icon="🧠"
          title="The Paradigm Shift"
          items={problems}
          variant="problem"
        />
        <ContentCard
          icon="🔁"
          title="Memory and Learning: From Personal to Organizational Intelligence"
          items={solutions}
          variant="solution"
        />
      </Box>
    </Section>
  );
};

export default ProblemSolutionSection; 