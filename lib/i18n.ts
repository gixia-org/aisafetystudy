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
      seminars: {
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
      title: 'AI安全开放社区',
      description: '中文互联网最大的 AI 安全开放性社区，关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，促进 AI 的安全可持续发展。',
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
              description: 'AI安全开放社区创始人，推动 AI 安全教育普及',
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
        },
        seminars: {
          title: '学术研讨会',
          description: 'AI安全领域的定期研讨会和学术讲座',
          items: [
            {
              name: 'BlueDot Reading Group',
              description: 'BlueDot 主办的AI安全读书会，定期组织深度学习和讨论',
              url: 'https://lu.ma/bluedotevents'
            },
            {
              name: 'FAR AI Seminar',
              description: 'FAR AI 举办的研讨会，聚焦 AI 安全研究的前沿进展',
              url: 'https://www.far.ai/events/seminar'
            }
          ]
        }
      }
    },
    about: {
      title: '关于我们',
      description: 'AI安全开放社区（Open Community for AI Safety China）是中文互联网最大的 AI 安全开放性社区，我们关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，力图通过交流与合作促进 AI 的安全可持续发展。欢迎通过以下方式加入社区或浏览最新动态。',
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
      copyright: '© 2026 OCAS. All rights reserved.',
    },
  },
  en: {
    nav: {
      events: 'Events',
      resources: 'Resources',
      about: 'About',
    },
    hero: {
      title: 'Open Community for AI Safety China',
      description: 'Open Community for AI Safety China is the largest AI safety open community in Chinese internet. We focus on AI risks, AI safety technologies and AI safety governance, aiming to promote the safe and sustainable development of AI.',
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
              description: 'Founder of Open Community for AI Safety China, promoting AI safety education',
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
        },
        seminars: {
          title: 'Academic Seminars',
          description: 'Regular seminars and academic talks in AI safety',
          items: [
            {
              name: 'BlueDot Reading Group',
              description: 'BlueDot-hosted AI safety reading groups with regular in-depth learning and discussions',
              url: 'https://lu.ma/bluedotevents'
            },
            {
              name: 'FAR AI Seminar',
              description: 'FAR AI seminar series focusing on frontier AI safety research',
              url: 'https://www.far.ai/events/seminar'
            }
          ]
        }
      }
    },
    about: {
      title: 'About Us',
      description: 'Open Community for AI Safety China is the largest AI safety open community in Chinese internet. We focus on AI risks, AI safety technologies and AI safety governance, aiming to promote the safe and sustainable development of AI. Welcome to join the community or browse the latest updates through the following methods.',
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
      copyright: '© 2026 OCAS. All rights reserved.',
    },
  },
};
