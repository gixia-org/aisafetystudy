export type Language = 'zh' | 'en';

export interface Translations {
  // Navigation
  nav: {
    events: string;
    resources: string;
    about: string;
  };

  // Hero Section
  hero: {
    title: string;
    description: string;
    joinButton: string;
  };

  // Events Section
  events: {
    title: string;
    allTypes: string;  // 新增：用于"全部"的翻译
    upcomingEvents: string;
    pastEvents: string;
    eventTypes: {
      seminar: {
        title: string;
        description: string;
      };
      lecture: {
        title: string;
        description: string;
      };
      course: {
        title: string;
        description: string;
      };
    };
    eventList: Array<{
      id: string;
      type: 'seminar' | 'lecture' | 'course';
      title: string;
      description: string;
      date: string;
      time: string;
      location: string;
      videoLink?: string;
      documentLink?: string;
      speaker?: string;
      tags: string[];
      isUpcoming: boolean;
    }>;
    viewAll: string;
    viewMore: string;
    collapse: string;
    noEvents: string;
    noEventsOfType: string;
    watchVideo: string;
    viewDocument: string;
    registerNow: string;
    comingSoon: string;
  };

  // Resources Section
  resources: {
    title: string;
    description: string;
    categories: {
      courses: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
        }>;
      };
      bloggers: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
        }>;
      };
      projects: {
        title: string;
        description: string;
        items: Array<{
          name: string;
          description: string;
          url: string;
        }>;
      };
    };
  };

  // About Section
  about: {
    title: string;
    description: string;
    contact: {
      email: string;
      wechat: string;
      zhihu: string;
      circle: string;
      bilibili: string;
      linkedin: string;
      github: string;
    };
    qrCodeText: string;
  };

  // Partners Section
  partners: {
    title: string;
  };

  // Footer
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      events: '活动',
      resources: '资源',
      about: '关于我们',
    },
    hero: {
      title: 'AI 安全学习小组',
      description: '关注AI对齐、伦理、评估、治理、可解释性、隐私、攻防等前沿话题，促进AI的安全可持续发展。',
      joinButton: '加入',
    },
    events: {
      title: '活动',
      allTypes: '全部',
      upcomingEvents: '即将举行的活动',
      pastEvents: '往期活动',
      eventTypes: {
        seminar: {
          title: '研讨会',
          description: '参与深度研讨会，发表自己的观点',
        },
        lecture: {
          title: '讲座',
          description: '前沿或科普的主题讲座',
        },
        course: {
          title: '共学课程',
          description: '与其它成员共同学习一门课程',
        },
      },
      eventList: [
        {
          id: 'seminar-2025-01',
          type: 'seminar' as const,
          title: 'AI对齐研究前沿讨论',
          description: '探讨最新的AI对齐研究成果，包括强化学习人类反馈(RLHF)、宪法AI等话题。',
          date: '2025-02-15',
          time: '19:00-21:00',
          location: '线上会议',
          videoLink: 'https://example.com/video1',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/seminars/2025-01-ai-alignment.md',
          speaker: '张三博士',
          tags: ['AI对齐', 'RLHF', '宪法AI'],
          isUpcoming: true,
        },
        {
          id: 'lecture-2025-01',
          type: 'lecture' as const,
          title: '大语言模型的安全风险与防护',
          description: '深入分析大语言模型可能存在的安全风险，包括幻觉、偏见、对抗攻击等问题，以及相应的防护措施。',
          date: '2025-02-10',
          time: '14:00-16:00',
          location: '清华大学',
          videoLink: 'https://example.com/video2',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/lectures/2025-01-llm-safety.md',
          speaker: '李四教授',
          tags: ['大语言模型', '安全风险', '防护'],
          isUpcoming: false,
        },
        {
          id: 'course-2025-01',
          type: 'course' as const,
          title: 'AI安全基础课程',
          description: '系统学习AI安全的基础知识，包括机器学习安全、算法公平性、隐私保护等内容。',
          date: '2025-02-01',
          time: '每周六 10:00-12:00',
          location: '线上课程',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/courses/2025-01-ai-safety-basics.md',
          speaker: '王五老师',
          tags: ['基础课程', '机器学习安全', '算法公平性'],
          isUpcoming: true,
        },
        {
          id: 'seminar-2024-12',
          type: 'seminar' as const,
          title: 'AI可解释性研究进展',
          description: '讨论AI模型可解释性的最新研究进展，包括注意力机制、梯度归因、反事实解释等方法。',
          date: '2024-12-20',
          time: '19:00-21:00',
          location: '线上会议',
          videoLink: 'https://example.com/video3',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/seminars/2024-12-ai-interpretability.md',
          speaker: '赵六博士',
          tags: ['可解释性', '注意力机制', '梯度归因'],
          isUpcoming: false,
        },
      ],
      viewAll: '查看全部',
      viewMore: '查看更多活动',
      collapse: '收起',
      noEvents: '暂无活动',
      noEventsOfType: '暂无{type}活动',
      watchVideo: '观看视频',
      viewDocument: '查看文档',
      registerNow: '立即报名',
      comingSoon: '敬请期待',
    },
    resources: {
      title: '资源',
      description: '精心整理的AI安全学习资源，帮助您深入了解人工智能安全知识',
      categories: {
        courses: {
          title: '课程网站',
          description: '优质的AI安全在线学习平台',
          items: [
            {
              name: 'BlueDot',
              description: '专业的AI安全教育平台，提供系统性的课程内容',
              url: 'https://bluedot.org/'
            },
            {
              name: 'ML4Good',
              description: '致力于将机器学习应用于社会公益的教育机构',
              url: 'https://www.ml4good.org/'
            },
            {
              name: 'ARENA',
              description: 'AI对齐研究工程师加速器，提供实践性训练',
              url: 'https://www.arena.education/'
            }
          ]
        },
        bloggers: {
          title: '博主推荐',
          description: 'AI安全领域知名博主和意见领袖',
          items: [
            {
              name: '飞秒光年',
              description: 'AI安全研究者，深度分析AI发展趋势和风险',
              url: 'https://www.zhihu.com/people/femtosec-light-years'
            },
            {
              name: '王巍',
              description: 'AI技术专家，专注于人工智能的安全性和可控性',
              url: 'https://www.zhihu.com/people/ai-wwang'
            },
            {
              name: '时间旅客',
              description: '科技观察者，关注AI对社会的长远影响',
              url: 'https://www.zhihu.com/people/time-passenger'
            },
            {
              name: '王金戈',
              description: 'AI安全学习小组创始人，推动AI安全教育普及',
              url: 'https://www.zhihu.com/people/jingewang'
            }
          ]
        },
        projects: {
          title: '研究项目',
          description: '重要的AI安全研究机构和项目',
          items: [
            {
              name: 'SPAR',
              description: 'AI对齐研究监督项目，为有志于AI安全研究的人员提供导师指导',
              url: 'https://sparai.org/'
            },
            {
              name: 'MATS',
              description: '机器学习对齐与理论学者项目，培养AI安全研究人才',
              url: 'https://www.matsprogram.org/'
            }
          ]
        }
      }
    },
    about: {
      title: '关于我们',
      description: 'AI Safety Study Group 是一个面向大众的学习小组，我们欢迎对AI和AI安全感兴趣的朋友加入。无论你的背景如何，都可以在这里学习AI知识，准备应对未来的社会变革。欢迎通过以下方式加入社区或浏览最新动态。',
      contact: {
        email: '邮箱',
        wechat: '微信',
        zhihu: '知乎',
        circle: '圈子',
        bilibili: 'Bilibili',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      qrCodeText: '扫码加入微信群',
    },
    partners: {
      title: '合作伙伴',
    },
    footer: {
      copyright: '© 2026 Gixia. All rights reserved.',
    },
  },
  en: {
    nav: {
      events: 'Events',
      resources: 'Resources',
      about: 'About',
    },
    hero: {
      title: 'AI Safety Study Group',
      description: 'Focusing on AI alignment, ethics, evaluation, governance, interpretability, privacy, attack and defense, and other cutting-edge topics to promote the safe and sustainable development of AI.',
      joinButton: 'Join',
    },
    events: {
      title: 'Events',
      allTypes: 'All',
      upcomingEvents: 'Upcoming Events',
      pastEvents: 'Past Events',
      eventTypes: {
        seminar: {
          title: 'Seminars',
          description: 'Participate in in-depth seminars and share your perspectives',
        },
        lecture: {
          title: 'Lectures',
          description: 'Cutting-edge or popular science lectures',
        },
        course: {
          title: 'Study Groups',
          description: 'Learn courses together with other members',
        },
      },
      eventList: [
        {
          id: 'seminar-2025-01',
          type: 'seminar' as const,
          title: 'AI Alignment Research Frontiers',
          description: 'Explore the latest AI alignment research achievements, including Reinforcement Learning from Human Feedback (RLHF), Constitutional AI, and other topics.',
          date: '2025-02-15',
          time: '19:00-21:00',
          location: 'Online Meeting',
          videoLink: 'https://example.com/video1',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/seminars/2025-01-ai-alignment.md',
          speaker: 'Dr. Zhang San',
          tags: ['AI Alignment', 'RLHF', 'Constitutional AI'],
          isUpcoming: true,
        },
        {
          id: 'lecture-2025-01',
          type: 'lecture' as const,
          title: 'Safety Risks and Protection of Large Language Models',
          description: 'In-depth analysis of potential safety risks in large language models, including hallucinations, bias, adversarial attacks, and corresponding protective measures.',
          date: '2025-02-10',
          time: '14:00-16:00',
          location: 'Tsinghua University',
          videoLink: 'https://example.com/video2',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/lectures/2025-01-llm-safety.md',
          speaker: 'Prof. Li Si',
          tags: ['Large Language Models', 'Safety Risks', 'Protection'],
          isUpcoming: false,
        },
        {
          id: 'course-2025-01',
          type: 'course' as const,
          title: 'AI Safety Fundamentals Course',
          description: 'Systematically learn the basics of AI safety, including machine learning security, algorithmic fairness, privacy protection, and more.',
          date: '2025-02-01',
          time: 'Every Saturday 10:00-12:00',
          location: 'Online Course',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/courses/2025-01-ai-safety-basics.md',
          speaker: 'Teacher Wang Wu',
          tags: ['Fundamentals', 'ML Security', 'Algorithmic Fairness'],
          isUpcoming: true,
        },
        {
          id: 'seminar-2024-12',
          type: 'seminar' as const,
          title: 'Advances in AI Interpretability Research',
          description: 'Discuss the latest advances in AI model interpretability, including attention mechanisms, gradient attribution, counterfactual explanations, and other methods.',
          date: '2024-12-20',
          time: '19:00-21:00',
          location: 'Online Meeting',
          videoLink: 'https://example.com/video3',
          documentLink: 'https://github.com/gixia-org/aisafetystudy-doc/blob/main/seminars/2024-12-ai-interpretability.md',
          speaker: 'Dr. Zhao Liu',
          tags: ['Interpretability', 'Attention Mechanisms', 'Gradient Attribution'],
          isUpcoming: false,
        },
      ],
      viewAll: 'View All',
      viewMore: 'View More Events',
      collapse: 'Collapse',
      noEvents: 'No events available',
      noEventsOfType: 'No {type} events available',
      watchVideo: 'Video',
      viewDocument: 'Document',
      registerNow: 'Register Now',
      comingSoon: 'Coming Soon',
    },
    resources: {
      title: 'Resources',
      description: 'Carefully curated AI safety learning resources to help you deepen your understanding of artificial intelligence safety',
      categories: {
        courses: {
          title: 'Course Websites',
          description: 'High-quality online AI safety learning platforms',
          items: [
            {
              name: 'BlueDot',
              description: 'Professional AI safety education platform with systematic course content',
              url: 'https://bluedot.org/'
            },
            {
              name: 'ML4Good',
              description: 'Educational institution dedicated to applying machine learning for social good',
              url: 'https://www.ml4good.org/'
            },
            {
              name: 'ARENA',
              description: 'AI alignment research engineer accelerator with practical training',
              url: 'https://www.arena.education/'
            }
          ]
        },
        bloggers: {
          title: 'Recommended Bloggers',
          description: 'Renowned bloggers and thought leaders in AI safety',
          items: [
            {
              name: '飞秒光年 (Femtosec Light Years)',
              description: 'AI safety researcher with in-depth analysis of AI trends and risks',
              url: 'https://www.zhihu.com/people/femtosec-light-years'
            },
            {
              name: '王巍 (Wang Wei)',
              description: 'AI technology expert focused on AI safety and controllability',
              url: 'https://www.zhihu.com/people/ai-wwang'
            },
            {
              name: '时间旅客 (Time Passenger)',
              description: 'Tech observer focused on long-term impacts of AI on society',
              url: 'https://www.zhihu.com/people/time-passenger'
            },
            {
              name: '王金戈 (Wang Jinge)',
              description: 'Founder of AI Safety Study Group, promoting AI safety education',
              url: 'https://www.zhihu.com/people/jingewang'
            }
          ]
        },
        projects: {
          title: 'Research Projects',
          description: 'Important AI safety research institutions and projects',
          items: [
            {
              name: 'SPAR',
              description: 'Supervised Program for Alignment Research - a remote research program pairing aspiring AI safety researchers with mentors',
              url: 'https://sparai.org/'
            },
            {
              name: 'MATS',
              description: 'Machine Learning Alignment & Theory Scholars, training AI safety researchers',
              url: 'https://www.matsprogram.org/'
            }
          ]
        }
      }
    },
    about: {
      title: 'About Us',
      description: 'AI Safety Study Group is a learning group for the general public. We welcome friends who are interested in AI and AI safety to join. Regardless of your background, you can learn AI knowledge here and prepare for future social changes. Welcome to join the community or browse the latest updates through the following methods.',
      contact: {
        email: 'Email',
        wechat: 'WeChat',
        zhihu: 'Zhihu',
        circle: 'Circle',
        bilibili: 'Bilibili',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      qrCodeText: 'Scan QR code to join WeChat group',
    },
    partners: {
      title: 'Partners',
    },
    footer: {
      copyright: '© 2026 Gixia. All rights reserved.',
    },
  },
};
