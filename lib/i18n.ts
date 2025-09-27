export type Language = 'zh' | 'en';

export interface Translations {
  // Navigation
  nav: {
    events: string;
    blog: string;
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
  
  // Blog Section
  blog: {
    title: string;
    posts: Array<{
      date: string;
      title: string;
      url: string;
    }>;
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
      blog: '博客',
      about: '关于我们',
    },
    hero: {
      title: 'AI 安全学习小组',
      description: '关注AI对齐、伦理、评估、治理、可解释性、隐私、攻防等前沿话题，促进AI的安全可持续发展。',
      joinButton: '加入',
    },
    events: {
      title: '活动',
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
    blog: {
      title: '博客',
      posts: [
        {
          date: '2025-04-15',
          title: '大模型的"神经科学"基础',
          url: 'https://zhuanlan.zhihu.com/p/1893366157634928815',
        },
        {
          date: '2025-03-09',
          title: 'AI如何在两年内接管世界',
          url: 'https://zhuanlan.zhihu.com/p/28938402698',
        },
        {
          date: '2025-04-04',
          title: 'AI Safety资源汇总',
          url: 'https://zhuanlan.zhihu.com/p/8372533549',
        },
        {
          date: '2025-01-11',
          title: 'AI日益增强的自我意识（self-awareness）',
          url: 'https://zhuanlan.zhihu.com/p/17750373522',
        },
      ],
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
      copyright: '© 2025 Gixia. All rights reserved.',
    },
  },
  en: {
    nav: {
      events: 'Events',
      blog: 'Blog',
      about: 'About',
    },
    hero: {
      title: 'AI Safety Study Group',
      description: 'Focusing on AI alignment, ethics, evaluation, governance, interpretability, privacy, attack and defense, and other cutting-edge topics to promote the safe and sustainable development of AI.',
      joinButton: 'Join',
    },
    events: {
      title: 'Events',
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
    blog: {
      title: 'Blog',
      posts: [
        {
          date: '2025-04-15',
          title: 'The "Neuroscience" Foundation of Large Language Models',
          url: 'https://zhuanlan.zhihu.com/p/1893366157634928815',
        },
        {
          date: '2025-03-09',
          title: 'How AI Takeover Might Happen in 2 Years',
          url: 'https://zhuanlan.zhihu.com/p/28938402698',
        },
        {
          date: '2025-04-04',
          title: 'AI Safety Resources Collection',
          url: 'https://zhuanlan.zhihu.com/p/8372533549',
        },
        {
          date: '2025-01-11',
          title: 'AI\'s Increasing Self-Awareness',
          url: 'https://zhuanlan.zhihu.com/p/17750373522',
        },
      ],
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
      copyright: '© 2025 Gixia. All rights reserved.',
    },
  },
};
