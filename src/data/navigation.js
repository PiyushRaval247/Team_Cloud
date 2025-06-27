export const navigationData = [
  {
    id: 'about',
    title: 'About Us',
    path: '/about-teem',
    children: [
      {
        id: 'about-overview',
        title: 'Company Overview',
        path: '/about-teem',
        description: 'Learn about Teem Cloud\'s journey and values'
      },
      {
        id: 'about-mission',
        title: 'Our Mission',
        path: '/about-teem/our-mission',
        description: 'Discover our mission and vision for the future'
      },
      {
        id: 'about-team',
        title: 'Leadership Team',
        path: '/about-teem/leadership-team',
        description: 'Meet our experienced leadership team'
      },
      {
        id: 'about-culture',
        title: 'Company Culture',
        path: '/about-teem/company-culture',
        description: 'Explore our collaborative and innovative culture'
      },
      {
        id: 'about-careers',
        title: 'Careers',
        path: '/about-teem/careers',
        description: 'Join our team of talented professionals'
      },
      {
        id: 'about-awards',
        title: 'Awards & Recognition',
        path: '/about-teem/awards-recognition',
        description: 'See our achievements and industry recognition'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    path: '/services',
    children: [
      {
        id: 'cloud-native',
        title: 'Cloud Native Development',
        path: '/services/cloud-native-development',
        description: 'Build scalable, resilient cloud applications',
        children: [
          {
            id: 'microservices',
            title: 'Microservices Architecture',
            path: '/services/cloud-native-development/microservices',
            description: 'Design and implement microservices solutions'
          },
          {
            id: 'containerization',
            title: 'Containerization & Orchestration',
            path: '/services/cloud-native-development/containerization',
            description: 'Docker, Kubernetes, and container management'
          },
          {
            id: 'serverless',
            title: 'Serverless Computing',
            path: '/services/cloud-native-development/serverless',
            description: 'Build serverless applications and functions'
          }
        ]
      },
      {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        path: '/services/ai-machine-learning',
        description: 'Intelligent solutions for your business',
        children: [
          {
            id: 'predictive-analytics',
            title: 'Predictive Analytics',
            path: '/services/ai-machine-learning/predictive-analytics',
            description: 'Data-driven insights and forecasting'
          },
          {
            id: 'computer-vision',
            title: 'Computer Vision',
            path: '/services/ai-machine-learning/computer-vision',
            description: 'Image and video analysis solutions'
          },
          {
            id: 'nlp',
            title: 'Natural Language Processing',
            path: '/services/ai-machine-learning/natural-language-processing',
            description: 'Text analysis and language understanding'
          },
          {
            id: 'chatbots',
            title: 'Chatbots & Conversational AI',
            path: '/services/ai-machine-learning/chatbots',
            description: 'Intelligent conversational interfaces'
          }
        ]
      },
      {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        path: '/services/mobile-apps',
        description: 'Native and cross-platform mobile solutions',
        children: [
          {
            id: 'ios-development',
            title: 'iOS Development',
            path: '/services/mobile-apps/ios-development',
            description: 'Native iOS applications'
          },
          {
            id: 'android-development',
            title: 'Android Development',
            path: '/services/mobile-apps/android-development',
            description: 'Native Android applications'
          },
          {
            id: 'cross-platform',
            title: 'Cross-Platform Development',
            path: '/services/mobile-apps/cross-platform',
            description: 'React Native, Flutter, and hybrid apps'
          }
        ]
      },
      {
        id: 'web-development',
        title: 'Web Development',
        path: '/services/web-development',
        description: 'Modern web applications and websites',
        children: [
          {
            id: 'frontend',
            title: 'Frontend Development',
            path: '/services/web-development/frontend',
            description: 'React, Vue, Angular, and modern frameworks'
          },
          {
            id: 'backend',
            title: 'Backend Development',
            path: '/services/web-development/backend',
            description: 'Node.js, Python, Java, and database solutions'
          },
          {
            id: 'ecommerce',
            title: 'E-commerce Solutions',
            path: '/services/web-development/ecommerce',
            description: 'Online stores and payment integrations'
          }
        ]
      },
      {
        id: 'cloud-migration',
        title: 'Cloud Migration',
        path: '/services/cloud-migration',
        description: 'Seamless cloud transformation',
        children: [
          {
            id: 'aws-migration',
            title: 'AWS Migration',
            path: '/services/cloud-migration/aws-migration',
            description: 'Migrate to Amazon Web Services'
          },
          {
            id: 'azure-migration',
            title: 'Azure Migration',
            path: '/services/cloud-migration/azure-migration',
            description: 'Migrate to Microsoft Azure'
          },
          {
            id: 'gcp-migration',
            title: 'Google Cloud Migration',
            path: '/services/cloud-migration/gcp-migration',
            description: 'Migrate to Google Cloud Platform'
          }
        ]
      },
      {
        id: 'devops',
        title: 'DevOps & CI/CD',
        path: '/services/devops',
        description: 'Automation and deployment solutions',
        children: [
          {
            id: 'ci-cd',
            title: 'Continuous Integration/Deployment',
            path: '/services/devops/ci-cd',
            description: 'Automated build and deployment pipelines'
          },
          {
            id: 'infrastructure',
            title: 'Infrastructure as Code',
            path: '/services/devops/infrastructure-as-code',
            description: 'Terraform, CloudFormation, and automation'
          }
        ]
      }
    ]
  },
  {
    id: 'industries',
    title: 'Industries',
    path: '/industries',
    children: [
      {
        id: 'media',
        title: 'Media & Entertainment',
        path: '/industries/media-entertainment',
        description: 'Digital transformation for media companies',
        children: [
          {
            id: 'streaming',
            title: 'Streaming Platforms',
            path: '/industries/media-entertainment/streaming-platforms',
            description: 'OTT and streaming solutions'
          },
          {
            id: 'content-management',
            title: 'Content Management',
            path: '/industries/media-entertainment/content-management',
            description: 'Digital asset management systems'
          }
        ]
      },
      {
        id: 'healthcare',
        title: 'Healthcare',
        path: '/industries/healthcare',
        description: 'Digital health solutions and compliance',
        children: [
          {
            id: 'telemedicine',
            title: 'Telemedicine Platforms',
            path: '/industries/healthcare/telemedicine',
            description: 'Remote healthcare delivery solutions'
          },
          {
            id: 'health-records',
            title: 'Electronic Health Records',
            path: '/industries/healthcare/electronic-health-records',
            description: 'Secure patient data management'
          }
        ]
      },
      {
        id: 'fintech',
        title: 'Fintech',
        path: '/industries/fintech',
        description: 'Financial technology innovations',
        children: [
          {
            id: 'payment-solutions',
            title: 'Payment Solutions',
            path: '/industries/fintech/payment-solutions',
            description: 'Digital payment and processing systems'
          },
          {
            id: 'blockchain',
            title: 'Blockchain & Cryptocurrency',
            path: '/industries/fintech/blockchain',
            description: 'Distributed ledger technology solutions'
          }
        ]
      },
      {
        id: 'ecommerce',
        title: 'E-commerce',
        path: '/industries/ecommerce',
        description: 'Online retail and marketplace solutions',
        children: [
          {
            id: 'marketplace',
            title: 'Marketplace Platforms',
            path: '/industries/ecommerce/marketplace-platforms',
            description: 'Multi-vendor marketplace solutions'
          },
          {
            id: 'inventory',
            title: 'Inventory Management',
            path: '/industries/ecommerce/inventory-management',
            description: 'Smart inventory tracking and optimization'
          }
        ]
      },
      {
        id: 'manufacturing',
        title: 'Manufacturing',
        path: '/industries/manufacturing',
        description: 'Industry 4.0 and smart manufacturing',
        children: [
          {
            id: 'iot',
            title: 'IoT Solutions',
            path: '/industries/manufacturing/iot-solutions',
            description: 'Connected devices and sensor networks'
          },
          {
            id: 'predictive-maintenance',
            title: 'Predictive Maintenance',
            path: '/industries/manufacturing/predictive-maintenance',
            description: 'AI-powered equipment monitoring'
          }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        path: '/industries/education',
        description: 'EdTech and learning management solutions',
        children: [
          {
            id: 'lms',
            title: 'Learning Management Systems',
            path: '/industries/education/learning-management-systems',
            description: 'Comprehensive educational platforms'
          },
          {
            id: 'virtual-classrooms',
            title: 'Virtual Classrooms',
            path: '/industries/education/virtual-classrooms',
            description: 'Remote learning and collaboration tools'
          }
        ]
      }
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions',
    path: '/solutions',
    children: [
      {
        id: 'custom-software',
        title: 'Custom Software Development',
        path: '/solutions/custom-software-development',
        description: 'Tailored software solutions for your business'
      },
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        path: '/solutions/digital-transformation',
        description: 'End-to-end digital transformation services'
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics & BI',
        path: '/solutions/data-analytics',
        description: 'Business intelligence and data insights'
      },
      {
        id: 'security',
        title: 'Cybersecurity',
        path: '/solutions/cybersecurity',
        description: 'Comprehensive security solutions'
      },
      {
        id: 'consulting',
        title: 'Technology Consulting',
        path: '/solutions/technology-consulting',
        description: 'Strategic technology advisory services'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    path: '/resources',
    children: [
      {
        id: 'blog',
        title: 'Blog',
        path: '/resources/blog',
        description: 'Latest insights and industry trends'
      },
      {
        id: 'case-studies',
        title: 'Case Studies',
        path: '/resources/case-studies',
        description: 'Success stories and project showcases'
      },
      {
        id: 'whitepapers',
        title: 'Whitepapers',
        path: '/resources/whitepapers',
        description: 'In-depth technical and industry research'
      },
      {
        id: 'webinars',
        title: 'Webinars',
        path: '/resources/webinars',
        description: 'Educational sessions and expert talks'
      },
      {
        id: 'documentation',
        title: 'Documentation',
        path: '/resources/documentation',
        description: 'Technical documentation and guides'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '/contact',
    children: [
      {
        id: 'get-quote',
        title: 'Get a Quote',
        path: '/contact/get-quote',
        description: 'Request a custom quote for your project'
      },
      {
        id: 'support',
        title: 'Support',
        path: '/contact/support',
        description: 'Technical support and assistance'
      },
      {
        id: 'partnership',
        title: 'Partnership',
        path: '/contact/partnership',
        description: 'Explore partnership opportunities'
      }
    ]
  }
] 