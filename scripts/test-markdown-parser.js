// 测试Markdown解析功能
// 这个脚本可以帮助你测试从GitHub获取和解析Markdown文件的功能

const { fetchAllEvents } = require('../lib/github-events.ts');

async function testMarkdownParsing() {
  console.log('🧪 开始测试Markdown解析功能...\n');
  
  try {
    // 获取所有事件数据
    const events = await fetchAllEvents();
    
    console.log(`✅ 成功获取 ${events.length} 个事件\n`);
    
    // 显示每个事件的解析结果
    events.forEach((event, index) => {
      console.log(`📋 事件 ${index + 1}:`);
      console.log(`   ID: ${event.id}`);
      console.log(`   标题: ${event.title}`);
      console.log(`   类型: ${event.type}`);
      console.log(`   日期: ${event.date}`);
      console.log(`   时间: ${event.time}`);
      console.log(`   地点: ${event.location}`);
      console.log(`   演讲者: ${event.speaker || '未指定'}`);
      console.log(`   视频链接: ${event.videoLink || '无'}`);
      console.log(`   标签: ${event.tags.join(', ') || '无'}`);
      console.log(`   即将举行: ${event.isUpcoming ? '是' : '否'}`);
      console.log(`   描述: ${event.description.substring(0, 100)}...`);
      console.log(`   文档链接: ${event.documentLink}`);
      console.log('   ---');
    });
    
    console.log('\n🎉 测试完成！');
    
  } catch (error) {
    console.error('❌ 测试失败:', error);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  testMarkdownParsing();
}

module.exports = { testMarkdownParsing };
