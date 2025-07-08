// Curriculum Data Structure for Agentic Programming Course
// Based on creative phase decisions: Enhanced 3-Day Nested Structure with Skills-Focused Presentation

export interface CurriculumModule {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
  skillsGained: string[];
  practicalOutcomes: string[];
  exercises: string[];
  targetRoles: string[];
}

export interface CurriculumDay {
  id: string;
  title: string;
  description: string;
  totalDuration: number; // minutes
  learningObjectives: string[];
  modules: CurriculumModule[];
  outcome: {
    title: string;
    description: string;
  };
}

export const curriculumData: CurriculumDay[] = [
  {
    id: 'day-1',
    title: 'Day 1: Mindset Transformation + Foundational AI-Native Skills',
    description: 'Individual transformation and core competency building',
    totalDuration: 240, // 4 hours
    learningObjectives: [
      'Develop an AI-native development mindset',
      'Master systematic problem analysis techniques',
      'Learn strategic planning and architecture design',
      'Build creative problem-solving capabilities'
    ],
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to AI-Native Development',
        description: 'Understanding the paradigm shift from traditional to AI-augmented development approaches',
        duration: 60,
        complexity: 'Beginner',
        skillsGained: [
          'AI-human collaboration mindset',
          'Understanding of AI-native development principles',
          'Recognition of paradigm shift opportunities',
          'Foundational AI tool awareness'
        ],
        practicalOutcomes: [
          'Think and approach problems like an AI-native developer',
          'Identify opportunities for AI augmentation in daily work',
          'Understand the strategic value of AI-native approaches',
          'Communicate the benefits of AI-native development to stakeholders'
        ],
        exercises: [
          'Traditional vs AI-native development comparison workshop',
          'Personal AI tool audit and gap analysis',
          'Team readiness assessment for AI-native transformation'
        ],
        targetRoles: ['All']
      },
      {
        id: 'module-2',
        title: 'Problem Analysis & Solution Validation',
        description: 'Systematic approaches to breaking down complex challenges and validating potential solutions',
        duration: 60,
        complexity: 'Beginner',
        skillsGained: [
          'Systematic problem decomposition techniques',
          'Solution validation frameworks',
          'Risk assessment methodologies',
          'Stakeholder analysis approaches'
        ],
        practicalOutcomes: [
          'Confidently assess and validate any development challenge',
          'Break complex problems into manageable components',
          'Validate solutions before significant investment',
          'Communicate problem scope and solutions clearly to teams'
        ],
        exercises: [
          'Complex problem decomposition workshop',
          'Solution validation framework application',
          'Risk assessment matrix creation for real projects'
        ],
        targetRoles: ['Developer', 'Architect', 'Manager']
      },
      {
        id: 'module-3',
        title: 'Strategic Planning & Architecture Design',
        description: 'Comprehensive project planning and architectural decision-making frameworks',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'Comprehensive project planning techniques',
          'Architecture decision-making frameworks',
          'Technology selection criteria',
          'Implementation roadmap development'
        ],
        practicalOutcomes: [
          'Create robust implementation plans for complex projects',
          'Make informed architectural decisions with confidence',
          'Develop clear technology selection criteria',
          'Build realistic project timelines and milestones'
        ],
        exercises: [
          'Architecture decision record creation',
          'Implementation roadmap development for sample project',
          'Technology evaluation matrix construction'
        ],
        targetRoles: ['Architect', 'Developer', 'Manager']
      },
      {
        id: 'module-4',
        title: 'Design Thinking & Creative Problem Solving',
        description: 'Creative solution generation and design decision frameworks for innovative outcomes',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'Creative solution generation techniques',
          'Design decision frameworks',
          'Innovation methodologies',
          'User-centered design approaches'
        ],
        practicalOutcomes: [
          'Generate multiple innovative solutions to complex problems',
          'Make informed design choices using proven frameworks',
          'Apply user-centered design principles consistently',
          'Lead creative problem-solving sessions effectively'
        ],
        exercises: [
          'Design thinking workshop with real scenarios',
          'Alternative solution generation exercise',
          'User journey mapping for development processes'
        ],
        targetRoles: ['Developer', 'Architect', 'All']
      }
    ],
    outcome: {
      title: 'AI-Native Foundation Established',
      description: 'Participants will have transformed their mindset toward AI-native development and gained foundational skills in problem analysis, strategic planning, and creative problem solving. They will be equipped to approach any development challenge with systematic, innovative thinking.'
    }
  },
  {
    id: 'day-2',
    title: 'Day 2: Role-Based Application + Advanced Problem-Solving',
    description: 'Advanced techniques and professional application',
    totalDuration: 240, // 4 hours
    learningObjectives: [
      'Master efficient code development and implementation techniques',
      'Develop continuous learning and knowledge management systems',
      'Apply advanced productivity techniques to complex challenges',
      'Integrate cutting-edge tools into development workflows'
    ],
    modules: [
      {
        id: 'module-5',
        title: 'Efficient Code Development & Implementation',
        description: 'Rapid development techniques and implementation best practices for high-quality code delivery',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'Rapid development methodologies',
          'Code quality optimization techniques',
          'Implementation best practices',
          'Automated development workflows'
        ],
        practicalOutcomes: [
          'Build high-quality code faster and more efficiently',
          'Implement automated quality checks in development workflow',
          'Reduce time from concept to working implementation',
          'Maintain code quality while increasing development speed'
        ],
        exercises: [
          'Speed coding challenge with quality metrics',
          'Automated workflow setup for personal projects',
          'Code review efficiency optimization workshop'
        ],
        targetRoles: ['Developer', 'Architect']
      },
      {
        id: 'module-6',
        title: 'Continuous Learning & Knowledge Management',
        description: 'Learning acceleration and knowledge capture systems for continuous improvement',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'Learning acceleration techniques',
          'Knowledge capture and organization systems',
          'Personal knowledge management frameworks',
          'Team knowledge sharing methodologies'
        ],
        practicalOutcomes: [
          'Continuously improve skills and build institutional knowledge',
          'Create effective personal and team knowledge repositories',
          'Accelerate learning of new technologies and methodologies',
          'Share knowledge effectively across teams and projects'
        ],
        exercises: [
          'Personal knowledge management system setup',
          'Team knowledge sharing workflow design',
          'Learning acceleration technique application'
        ],
        targetRoles: ['All']
      },
      {
        id: 'module-7',
        title: 'Advanced Productivity Techniques',
        description: 'Workflow optimization and advanced problem-solving patterns for complex challenges',
        duration: 60,
        complexity: 'Advanced',
        skillsGained: [
          'Advanced workflow optimization techniques',
          'Complex problem-solving patterns',
          'Productivity measurement and improvement methods',
          'Advanced automation strategies'
        ],
        practicalOutcomes: [
          'Handle complex challenges with proven methodologies',
          'Optimize personal and team productivity significantly',
          'Apply advanced problem-solving patterns to novel situations',
          'Measure and continuously improve workflow efficiency'
        ],
        exercises: [
          'Workflow optimization analysis and implementation',
          'Complex problem-solving pattern application',
          'Productivity measurement system creation'
        ],
        targetRoles: ['Developer', 'Architect', 'Manager']
      },
      {
        id: 'module-8',
        title: 'Tool Integration & Automation',
        description: 'AI tool mastery and automation workflows for enhanced development capabilities',
        duration: 60,
        complexity: 'Advanced',
        skillsGained: [
          'AI tool evaluation and selection criteria',
          'Tool integration strategies',
          'Automation workflow design',
          'Custom tool development approaches'
        ],
        practicalOutcomes: [
          'Integrate cutting-edge tools into development workflows seamlessly',
          'Automate repetitive tasks and focus on high-value activities',
          'Evaluate and select the most appropriate tools for specific needs',
          'Design custom automation solutions for unique requirements'
        ],
        exercises: [
          'AI tool evaluation matrix creation',
          'Personal automation workflow setup',
          'Custom tool integration project'
        ],
        targetRoles: ['Developer', 'Architect']
      }
    ],
    outcome: {
      title: 'Advanced Application Mastery',
      description: 'Participants will have mastered advanced development techniques and learned to apply their skills effectively in their specific roles. They will have integrated cutting-edge tools and automation into their workflows, significantly enhancing their productivity and problem-solving capabilities.'
    }
  },
  {
    id: 'day-3',
    title: 'Day 3: Team Collaboration + Knowledge Management + Organizational Scaling',
    description: 'Team dynamics and organizational implementation',
    totalDuration: 240, // 4 hours
    learningObjectives: [
      'Lead effective AI-native team collaboration',
      'Implement quality assurance and deployment excellence',
      'Apply proven patterns from real-world case studies',
      'Build sustainable, scalable development practices'
    ],
    modules: [
      {
        id: 'module-9',
        title: 'Team Collaboration & Best Practices',
        description: 'Team coordination, knowledge sharing, and collaborative workflows for AI-native teams',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'AI-native team coordination techniques',
          'Effective knowledge sharing strategies',
          'Collaborative workflow design',
          'Team performance optimization methods'
        ],
        practicalOutcomes: [
          'Lead and collaborate effectively in AI-native teams',
          'Design workflows that maximize team productivity',
          'Facilitate effective knowledge sharing across team members',
          'Optimize team performance using AI-native principles'
        ],
        exercises: [
          'Team workflow optimization workshop',
          'Knowledge sharing system design',
          'Collaborative problem-solving session facilitation'
        ],
        targetRoles: ['Manager', 'All']
      },
      {
        id: 'module-10',
        title: 'Quality Assurance & Deployment Excellence',
        description: 'Testing strategies, security practices, and deployment mastery for reliable software delivery',
        duration: 60,
        complexity: 'Advanced',
        skillsGained: [
          'AI-enhanced testing strategies',
          'Security best practices for AI-native development',
          'Deployment pipeline optimization',
          'Quality metrics and monitoring systems'
        ],
        practicalOutcomes: [
          'Ensure code quality and secure deployment practices',
          'Implement comprehensive testing strategies with AI assistance',
          'Design secure, reliable deployment pipelines',
          'Monitor and maintain high-quality software delivery'
        ],
        exercises: [
          'AI-enhanced testing strategy development',
          'Security checklist creation for AI-native projects',
          'Deployment pipeline optimization workshop'
        ],
        targetRoles: ['Developer', 'Architect']
      },
      {
        id: 'module-11',
        title: 'Real-World Case Studies & Implementation',
        description: 'Pattern recognition and implementation strategies from successful AI-native transformations',
        duration: 60,
        complexity: 'Intermediate',
        skillsGained: [
          'Pattern recognition from successful implementations',
          'Lessons learned analysis techniques',
          'Implementation strategy adaptation methods',
          'Success factor identification approaches'
        ],
        practicalOutcomes: [
          'Apply proven patterns to real-world scenarios',
          'Learn from both successes and failures in AI-native transformations',
          'Adapt successful strategies to unique organizational contexts',
          'Identify and replicate key success factors'
        ],
        exercises: [
          'Case study analysis and pattern extraction',
          'Implementation strategy adaptation workshop',
          'Success factor identification for current projects'
        ],
        targetRoles: ['Manager', 'Architect', 'All']
      },
      {
        id: 'module-12',
        title: 'Scaling & Future-Proofing Your Practice',
        description: 'Scaling strategies, future trend awareness, and continuous adaptation for sustainable growth',
        duration: 60,
        complexity: 'Advanced',
        skillsGained: [
          'Scaling strategy development',
          'Future trend analysis and preparation',
          'Continuous adaptation frameworks',
          'Organizational change management for AI-native transformation'
        ],
        practicalOutcomes: [
          'Build sustainable, scalable development practices',
          'Prepare organization for future AI development trends',
          'Implement continuous adaptation and improvement systems',
          'Lead organizational transformation to AI-native approaches'
        ],
        exercises: [
          'Scaling strategy development for current organization',
          'Future trend analysis and preparation planning',
          'Organizational change roadmap creation'
        ],
        targetRoles: ['Manager', 'Architect']
      }
    ],
    outcome: {
      title: 'Organizational Excellence Achieved',
      description: 'Participants will have developed comprehensive team collaboration skills and learned to implement AI-native practices at scale. They will be equipped to lead organizational transformation, ensure quality and security, and build sustainable practices that adapt to future technological developments.'
    }
  }
];

// Helper function to get activities list for current component structure
export const getCurriculumActivities = (dayId: string): string[] => {
  const day = curriculumData.find(d => d.id === dayId);
  if (!day) return [];
  
  return day.modules.map(module => 
    `${module.title}: ${module.description}`
  );
};

// Helper function to get day outcome
export const getCurriculumOutcome = (dayId: string) => {
  const day = curriculumData.find(d => d.id === dayId);
  return day?.outcome || { title: 'Day Outcome', description: 'Outcome description' };
};

// Helper function to get day title
export const getCurriculumTitle = (dayId: string): string => {
  const day = curriculumData.find(d => d.id === dayId);
  return day?.title || 'Day Title';
}; 