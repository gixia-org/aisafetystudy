export type Language = 'zh' | 'en';

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsData {
  members: StatItem;
  events: StatItem;
  views: StatItem;
}

export interface Translations {
  // Navigation
  nav: {
    siteName: string;
    events: string;
    resources: string;
    joinAction: string;
  };

  // Hero Section
  hero: {
    badge: string;
    titlePrefix: string;
    titleStrikethrough: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };

  // Community Stats
  stats: StatsData;

  // Events Section
  events: {
    title: string;
    description: string;
    allTypes: string;
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

  // Join Section
  join: {
    title: string;
    description: string;
    button: string;
    note: string;
  };

  // About Section
  about: {
    title: string;
    description: string;
    contact: {
      bilibili: string;
      circle: string;
      linkedin: string;
      github: string;
    };
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
      siteName: 'AI安全开放社区',
      events: '活动',
      resources: '资源',
      joinAction: '加入社区',
    },
    hero: {
      badge: '中文互联网最大的AI安全社区',
      titlePrefix: '推动 AI 走向',
      titleStrikethrough: '更强大',
      titleHighlight: '更安全',
      titleSuffix: '的未来',
      description: '关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。',
      primaryButton: '加入社区',
      secondaryButton: '关于我们',
    },
    stats: {
      members: { value: '200+', label: '社区成员' },
      events: { value: '10+', label: '已举办活动' },
      views: { value: '1000+', label: '视频播放量' },
    },
    events: {
      title: '活动',
      description: '关注最新的研讨会、技术讲座和共学课程',
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
          title: '课程资源',
          description: '优质的AI安全在线学习平台',
          items: [
            {
              name: 'BlueDot',
              description: '专业的AI安全教育平台，提供系统性的课程内容',
              url: 'https://bluedot.org/',
            },
            {
              name: 'ML4Good',
              description: '致力于将机器学习应用于社会公益的教育机构',
              url: 'https://www.ml4good.org/',
            },
            {
              name: 'ARENA',
              description: 'AI对齐研究工程师加速器，提供实践性训练',
              url: 'https://www.arena.education/',
            },
          ],
        },
        projects: {
          title: '研究项目',
          description: 'AI安全研究项目，兼职/全职，申请制',
          items: [
            {
              name: 'SPAR',
              description: 'AI对齐研究实习项目，为有志于AI安全研究的人员提供导师指导',
              url: 'https://sparai.org/',
            },
            {
              name: 'MATS',
              description: '机器学习对齐与理论学者项目，培养AI安全研究人才',
              url: 'https://www.matsprogram.org/',
            },
          ],
        },
        seminars: {
          title: '学术研讨会',
          description: 'AI安全领域的定期研讨会和学术讲座',
          items: [
            {
              name: 'BlueDot Reading Group',
              description: 'BlueDot 主办的AI安全读书会，定期组织深度学习和讨论',
              url: 'https://lu.ma/bluedotevents',
            },
            {
              name: 'FAR AI Seminar',
              description: 'FAR AI 举办的研讨会，聚焦 AI 安全研究的前沿进展',
              url: 'https://www.far.ai/events/seminar',
            },
          ],
        },
      },
    },
    join: {
      title: '加入AI安全开放社区',
      description: '填写表单加入我们的社区，获取最新的AI安全资讯和活动通知。',
      button: '加入社区',
      note: '我们会尽快与你取得联系。',
    },
    about: {
      title: '关注我们',
      description:
        'AI安全开放社区（Open Community for AI Safety China）是中文互联网最大的 AI 安全开放性社区，我们关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，力图通过交流与合作促进 AI 的安全可持续发展。社区以微信群为核心，并在多个平台同步更新动态。机构合作或意见反馈，可通过邮件或各平台私信联系。',
      contact: {
        bilibili: 'Bilibili',
        circle: '知乎圈子',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    partners: {
      title: '合作伙伴',
    },
    footer: {
      copyright: '© 2026 OCASC. All rights reserved.',
    },
  },
  en: {
    nav: {
      siteName: 'OCASC',
      events: 'Events',
      resources: 'Resources',
      joinAction: 'Join Us',
    },
    hero: {
      badge: "China's Largest AI Safety Community",
      titlePrefix: 'Toward a ',
      titleStrikethrough: 'More Powerful',
      titleHighlight: 'Safer',
      titleSuffix: ' Future for AI',
      description:
        'Focusing on AI risks, AI safety technologies and AI safety governance, promoting the safe and sustainable development of AI through collaboration.',
      primaryButton: 'Join Us',
      secondaryButton: 'About Us',
    },
    stats: {
      members: { value: '200+', label: 'Members' },
      events: { value: '10+', label: 'Events Held' },
      views: { value: '1000+', label: 'Video Views' },
    },
    events: {
      title: 'Events',
      description:
        'Stay updated with the latest workshops, technical seminars, and study groups',
      allTypes: 'All',
      upcomingEvents: 'Upcoming Events',
      pastEvents: 'Past Events',
      eventTypes: {
        seminar: {
          title: 'Seminars',
          description:
            'Participate in in-depth seminars and share your perspectives',
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
      description:
        'Carefully curated AI safety learning resources to help you deepen your understanding of artificial intelligence safety',
      categories: {
        courses: {
          title: 'Course Resources',
          description: 'High-quality online AI safety learning platforms',
          items: [
            {
              name: 'BlueDot',
              description:
                'Professional AI safety education platform with systematic course content',
              url: 'https://bluedot.org/',
            },
            {
              name: 'ML4Good',
              description:
                'Educational institution dedicated to applying machine learning for social good',
              url: 'https://www.ml4good.org/',
            },
            {
              name: 'ARENA',
              description:
                'AI alignment research engineer accelerator with practical training',
              url: 'https://www.arena.education/',
            },
          ],
        },
        projects: {
          title: 'Research Projects',
          description:
            'AI safety research projects, part-time/full-time, application-based',
          items: [
            {
              name: 'SPAR',
              description:
                'Supervised Program for Alignment Research — a remote research program pairing aspiring AI safety researchers with mentors',
              url: 'https://sparai.org/',
            },
            {
              name: 'MATS',
              description:
                'Machine Learning Alignment & Theory Scholars, training AI safety researchers',
              url: 'https://www.matsprogram.org/',
            },
          ],
        },
        seminars: {
          title: 'Academic Seminars',
          description:
            'Regular seminars and academic talks in AI safety',
          items: [
            {
              name: 'BlueDot Reading Group',
              description:
                'BlueDot-hosted AI safety reading groups with regular in-depth learning and discussions',
              url: 'https://lu.ma/bluedotevents',
            },
            {
              name: 'FAR AI Seminar',
              description:
                'FAR AI seminar series focusing on frontier AI safety research',
              url: 'https://www.far.ai/events/seminar',
            },
          ],
        },
      },
    },
    join: {
      title: 'Join AI Safety Open Community',
      description:
        'Fill out the form to join our community and receive the latest AI safety news and event updates.',
      button: 'Join Us',
      note: "We'll get in touch with you soon.",
    },
    about: {
      title: 'Follow Us',
      description:
        'Open Community for AI Safety China (OCASC) is the largest AI safety open community in the Chinese-speaking internet. We focus on AI risks, AI safety technologies and AI safety governance, aiming to promote the safe and sustainable development of AI. The community is centered around WeChat groups and syncs updates across multiple platforms. For institutional cooperation or feedback, please reach out via email or direct message on any platform.',
      contact: {
        bilibili: 'Bilibili',
        circle: 'Zhihu Ring',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },
    partners: {
      title: 'Partners',
    },
    footer: {
      copyright: '© 2026 OCASC. All rights reserved.',
    },
  },
};
