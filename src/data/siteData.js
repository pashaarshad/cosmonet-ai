export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    megaMenu: {
      categories: [
        {
          title: 'AI & Intelligence',
          items: [
            { name: 'Artificial Intelligence', desc: 'AI services, chatbots, intelligent automation' },
            { name: 'Machine Learning', desc: 'Predictive models and training pipelines' },
            { name: 'Generative AI / LLM', desc: 'Large language model development & integration' },
            { name: 'AI-Powered Analytics', desc: 'Data lakes, warehouses, insight platforms' },
          ],
        },
        {
          title: 'Engineering & Development',
          items: [
            { name: 'Web & Mobile Applications', desc: 'Scalable, enterprise-grade app development' },
            { name: 'Software Engineering', desc: 'API, microservices, full-stack engineering' },
            { name: 'Cyber Security', desc: 'Threat detection, compliance, pen testing' },
            { name: 'Digital Transformation', desc: 'Cloud migration & intelligent automation' },
          ],
        },
        {
          title: 'Business & Growth',
          items: [
            { name: 'MVP Services', desc: 'Rapid prototyping and PoC development' },
            { name: 'Staff Augmentation', desc: 'Hire dedicated engineers and AI teams' },
            { name: 'Support Services', desc: 'DevOps, CI/CD, and ongoing maintenance' },
          ],
        },
      ],
    },
  },
  {
    label: 'Tech Stack',
    href: '#expertise',
    megaMenu: {
      categories: [
        {
          title: 'AI & ML',
          items: [
            { name: 'TensorFlow / PyTorch', desc: 'Deep learning frameworks' },
            { name: 'Hugging Face', desc: 'Pre-trained model hub' },
            { name: 'OpenAI API', desc: 'GPT integrations' },
            { name: 'LangChain', desc: 'LLM application framework' },
          ],
        },
        {
          title: 'Cloud',
          items: [
            { name: 'AWS', desc: 'Amazon cloud services' },
            { name: 'Azure', desc: 'Microsoft cloud platform' },
            { name: 'GCP', desc: 'Google Cloud Platform' },
          ],
        },
        {
          title: 'DevOps',
          items: [
            { name: 'Docker & Kubernetes', desc: 'Container orchestration' },
            { name: 'GitHub Actions', desc: 'CI/CD automation' },
            { name: 'Terraform', desc: 'Infrastructure as code' },
          ],
        },
        {
          title: 'Frontend',
          items: [
            { name: 'React / Next.js', desc: 'UI component frameworks' },
            { name: 'Angular', desc: 'Enterprise web framework' },
            { name: 'Vue.js', desc: 'Progressive framework' },
          ],
        },
        {
          title: 'Backend',
          items: [
            { name: 'Node.js', desc: 'Server-side JavaScript' },
            { name: 'Python / FastAPI', desc: 'AI & API backend' },
            { name: 'Java / Spring', desc: 'Enterprise platform' },
          ],
        },
        {
          title: 'Data',
          items: [
            { name: 'PostgreSQL', desc: 'Relational database' },
            { name: 'MongoDB', desc: 'Document database' },
            { name: 'Redis', desc: 'In-memory data store' },
          ],
        },
      ],
    },
  },
  { label: 'Industries', href: '#industries' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const statsData = [
  { number: 50, suffix: '+', label: 'Years of combined technology leadership' },
  { number: 150, suffix: '+', label: 'AI & digital transformation projects delivered' },
  { number: 25, suffix: '+', label: 'Technology specialists and engineers' },
  { number: 100, suffix: '%', label: 'Commitment to scalable, secure architecture' },
];

export const heroContent = {
  title: 'Powering Innovation with a Future-Ready Core Tech Stack',
  subtitle: 'Build smarter, scale faster, and innovate confidently with our AI-driven technology ecosystem. From Artificial Intelligence Solutions to cloud-native architectures, our stack is engineered to deliver performance, flexibility, and intelligence at every layer.',
  cta: 'Explore Our Capabilities'
};

export const expertiseSections = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    content: 'Cosmonet AI’s Artificial Intelligence Solutions are built on advanced Machine Learning frameworks, enabling businesses to unlock predictive insights and intelligent automation. We specialize in AI Product Development, including Generative AI Development, natural language processing (NLP), and computer vision. Cosmonet AI works cohesively with clients:',
    bullets: [
      'With Powered by Large Language Models (LLMs) and advanced deep learning architectures',
      'With Systems designed to learn, adapt, and evolve continuously',
      'To Build intelligent solutions like recommendation engines and AI copilots',
      'To Transform complex data into actionable, business-ready insights',
      'To Enable enterprises to stay ahead in a competitive digital landscape',
      'To Ensure scalable, high-performance, and reliable AI systems'
    ]
  },
  {
    title: 'Generative AI & Large Language Models (LLMs)',
    content: 'Is your business creating, communicating, and innovating at the speed of intelligence? If you are unsure of it, let’s decode that. We, at Cosmonet AI specialize in Generative AI Development, building systems powered by Large Language Models (LLMs) that redefine how businesses interact with data and users. From AI chatbot development to content generation platforms, our solutions enhance engagement and productivity, and ensure to:',
    bullets: [
      'Enable conversational intelligence using Natural Language Processing (NLP) and deep learning',
      'Deliver context-aware interactions with advanced language understanding',
      'Leverage LLM orchestration, fine-tuning, and prompt engineering for precision outputs',
      'Build highly customized Enterprise AI Solutions tailored to business needs',
      'Enhance user experience through intelligent, adaptive systems',
      'Drive innovation at scale with next-generation AI capabilities'
    ]
  },
  {
    title: 'Data Engineering & Analytics',
    content: 'Is your data working for you? Data is the foundation of every intelligent system. If your company’s data is sitting unused, bring it to us. Our Data Engineering Services focus on building robust data pipelines, data lakes, and analytics platforms that power decision-making. We transform raw, fragmented data into structured, high-quality datasets ready for analysis and AI integration.',
    bullets: [
      'Leverage big data analytics solutions and real-time processing for faster insights',
      'Enable quick access to actionable, business-critical intelligence',
      'Ensure your company’s data moves in perfect sync',
      'Implement strong data governance and scalability frameworks',
      'Build robust AI & Data Engineering Services ecosystems',
      'Drive adoption of data-driven decision systems',
      'Help organizations shift from intuition to intelligence-led decision making'
    ]
  },
  {
    title: 'Cloud & Platform Engineering',
    content: 'Cloud-Native Application Development approach is meant to make every solution scalable, secure, and future-ready. We design and deploy applications across AWS, Azure, and GCP cloud solutions, leveraging microservices and serverless architectures. From cloud migration services to multi-cloud environments, we build resilient platforms that support dynamic business needs.',
    bullets: [
      'Accelerate delivery with DevOps and CI/CD automation',
      'Enable rapid deployments and continuous innovation cycles',
      'Seamlessly integrate cloud infrastructure with AI workloads',
      'Build high-performance, scalable digital ecosystems',
      'Drive operational efficiency and sustainable business growth'
    ]
  },
  {
    title: 'Full-Stack Software Engineering',
    content: 'Most of the start-ups fail when they are unable to turn a complex idea into a seamless digital experience. Look no further, as we deliver end-to-end Custom Software Development using modern frameworks and agile methodologies. Our Full-Stack Development Services cover everything from intuitive front-end interfaces to robust back-end systems.',
    bullets: [
      'Build SaaS product development platforms and enterprise-grade applications tailored to business needs',
      'Focus on high performance, robust security, and seamless user experience',
      'Craft digital experiences that solve real problems and keep your customers truly keen',
      'Deliver solutions using a holistic, end-to-end engineering approach',
      'Partner with us as a trusted AI Development Company driving scalable innovation'
    ]
  },
  {
    title: 'API Engineering & Integrations',
    content: 'In today’s connected ecosystem, how seamlessly do your systems communicate with each other? Seamless communication between systems is as critical as basic communication. Our API Development and Integration Services enable businesses to unify platforms, applications, and data sources.',
    bullets: [
      'Easy and seamless integration of third-party tools and internal systems',
      'Built for high reliability and performance at scale',
      'Powered by microservices architecture development',
      'Modular design for easy scalability and maintenance',
      'Strong foundation for AI-driven business solutions',
      'Enables smooth data exchange across platforms',
      'Enhances overall system functionality and efficiency'
    ]
  },
  {
    title: 'DevOps & Automation',
    content: 'Your company is working, but at what pace? Speed and efficiency are at the core of modern development. Our DevOps and CI/CD automation practices streamline the software lifecycle, from development to deployment. We implement automated pipelines, monitoring systems, and infrastructure-as-code to ensure consistency and reliability.',
    bullets: [
      'Integrate Intelligent Automation Solutions to minimize manual effort',
      'Accelerate time-to-market with streamlined workflows',
      'Enable continuous innovation without compromising quality',
      'Fast, stress-free DevOps & CI/CD automation that just work',
      'Build agile, scalable, and resilient systems',
      'Support evolving needs through Digital Transformation Services'
    ]
  },
  {
    title: 'Security & Compliance Engineering',
    content: 'Cosmonet AI ensures Security is embedded into every layer of the technology stack. We implement advanced cybersecurity frameworks, encryption protocols, and compliance standards to protect sensitive data and systems. Our solutions are designed to meet global security benchmarks while supporting enterprise AI solutions.',
    bullets: [
      'End-to-end resilience across systems and infrastructure',
      'Secure cloud environments with built-in protection layers',
      'Application-level security embedded from day one',
      'Security-first approach in Custom Software Development and cloud solutions',
      'Proactive threat prevention, not just reactive fixes',
      'Designed for trust, scalability, and compliance',
      'Enabling businesses to operate confidently in complex digital ecosystems'
    ]
  }
];

export const expertiseItems = expertiseSections.map(s => s.title);

export const servicesData = [
  {
    title: 'AI & Data',
    desc: 'Leverage artificial intelligence, machine learning, and data engineering to unlock actionable insights and build smart systems.',
    icon: 'brain',
  },
  {
    title: 'Application Development',
    desc: 'Build scalable, enterprise-grade web and mobile applications tailored to your business needs.',
    icon: 'code',
  },
  {
    title: 'Cyber Security',
    desc: 'Protect your digital assets with comprehensive threat detection, compliance, and penetration testing.',
    icon: 'shield',
  },
  {
    title: 'Digital Transformation',
    desc: 'Modernize legacy systems and accelerate business growth through intelligent cloud migration and automation.',
    icon: 'transform',
  },
  {
    title: 'MVP Services',
    desc: 'Rapidly prototype, validate, and launch minimum viable products to test market fit.',
    icon: 'rocket',
  },
  {
    title: 'Software Engineering',
    desc: 'End-to-end full-stack engineering with modern frameworks, APIs, and microservices architecture.',
    icon: 'gear',
  },
  {
    title: 'Staff Augmentation',
    desc: 'Scale your engineering teams with dedicated specialists in AI, cloud, and software development.',
    icon: 'users',
  },
  {
    title: 'Support Services',
    desc: 'Continuous DevOps, CI/CD automation, maintenance, and operational support for your platforms.',
    icon: 'support',
  },
];

export const industriesData = [
  { name: 'Automation', icon: 'cpu' },
  { name: 'Fintech', icon: 'dollar' },
  { name: 'Healthcare', icon: 'heart' },
  { name: 'Insurance', icon: 'fileCheck' },
  { name: 'Digital Innovation', icon: 'lightbulb' },
  { name: 'E-Commerce', icon: 'shoppingCart' },
];

export const whyChooseData = [
  {
    title: 'AI-First Innovation',
    desc: 'We build solutions around Artificial Intelligence, Machine Learning, and advanced data models.',
    icon: 'zap',
  },
  {
    title: 'Engineering Excellence',
    desc: 'Our team applies modern software engineering frameworks, agile methodologies, and DevOps pipelines.',
    icon: 'award',
  },
  {
    title: 'Scalable Architecture',
    desc: 'We design systems that are secure, cloud-ready, and built for enterprise scale.',
    icon: 'layers',
  },
  {
    title: 'Business-Focused Technology',
    desc: 'Every solution is designed to solve real business challenges and deliver measurable impact.',
    icon: 'target',
  },
  {
    title: 'Future-Ready Solutions',
    desc: 'We develop products that evolve with AI, automation, and next-generation technologies.',
    icon: 'trendUp',
  },
];

export const partnerTypes = [
  'Startups building AI products',
  'Enterprises modernizing legacy platforms',
  'Technology companies scaling digital platforms',
  'Organizations adopting AI and automation',
];

export const blogData = [
  {
    title: 'How Generative AI is Redefining Enterprise Software',
    excerpt: 'Explore how Large Language Models and Generative AI are transforming custom software development and business automation.',
    category: 'AI Strategy',
    date: 'Mar 15, 2026',
    image: null,
  },
  {
    title: 'Building Scalable Data Pipelines with AWS',
    excerpt: 'A practical guide to designing cloud-native data engineering services for real-time analytics and AI model training.',
    category: 'Cloud',
    date: 'Mar 08, 2026',
    image: null,
  },
  {
    title: 'The CTO\'s Guide to Intelligent Automation Solutions',
    excerpt: 'How enterprise AI solutions and intelligent automation are reducing operational costs by up to 40% for modern businesses.',
    category: 'Automation',
    date: 'Feb 28, 2026',
    image: null,
  },
];

export const jobOpenings = [
  { title: 'Senior ML Engineer', location: 'Remote', type: 'Full-time' },
  { title: 'Cloud Solutions Architect', location: 'San Francisco, CA', type: 'Full-time' },
  { title: 'Full-Stack Developer', location: 'Bangalore, India', type: 'Full-time' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#expertise' },
    { label: 'Industries', href: '#industries' },
    { label: 'Blog', href: '#blog' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    'AI & Data',
    'Application Development',
    'Cyber Security',
    'Digital Transformation',
    'MVP Services',
    'Software Engineering',
    'Staff Augmentation',
    'Support Services',
  ],
};
