// 测试GitHub连接和文件解析
const { fetchAllEvents } = require('../lib/github-events.ts');

async function testGitHubConnection() {
  console.log('🔗 测试GitHub连接...\n');
  
  try {
    // 检查环境变量
    if (!process.env.GITHUB_TOKEN) {
      console.log('⚠️  警告: 未设置GITHUB_TOKEN环境变量');
      console.log('   请创建.env.local文件并添加: GITHUB_TOKEN=your_token_here');
      console.log('   或者设置环境变量: export GITHUB_TOKEN=your_token_here\n');
    }
    
    console.log('📡 正在从GitHub获取事件数据...');
    const events = await fetchAllEvents();
    
    if (events.length === 0) {
      console.log('❌ 未获取到任何事件数据');
      console.log('   可能的原因:');
      console.log('   1. GitHub Token无效或权限不足');
      console.log('   2. 仓库中没有符合条件的文件');
      console.log('   3. 网络连接问题');
      return;
    }
    
    console.log(`✅ 成功获取 ${events.length} 个事件\n`);
    
    // 显示每个事件的详细信息
    events.forEach((event, index) => {
      console.log(`📋 事件 ${index + 1}:`);
      console.log(`   ID: ${event.id}`);
      console.log(`   标题: ${event.title}`);
      console.log(`   类型: ${event.type}`);
      console.log(`   日期: ${event.date || '未设置'}`);
      console.log(`   时间: ${event.time || '未设置'}`);
      console.log(`   地点: ${event.location || '未设置'}`);
      console.log(`   演讲者: ${event.speaker || '未设置'}`);
      console.log(`   视频链接: ${event.videoLink || '无'}`);
      console.log(`   标签: ${event.tags.join(', ') || '无'}`);
      console.log(`   即将举行: ${event.isUpcoming ? '是' : '否'}`);
      console.log(`   描述: ${event.description.substring(0, 100)}...`);
      console.log(`   文档链接: ${event.documentLink}`);
      console.log('   ---');
    });
    
    // 统计信息
    const typeStats = events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📊 统计信息:');
    console.log(`   总事件数: ${events.length}`);
    Object.entries(typeStats).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}个`);
    });
    
    const upcomingCount = events.filter(e => e.isUpcoming).length;
    const pastCount = events.filter(e => !e.isUpcoming).length;
    console.log(`   即将举行: ${upcomingCount}个`);
    console.log(`   往期活动: ${pastCount}个`);
    
    console.log('\n🎉 测试完成！GitHub连接正常，数据解析成功！');
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
    console.error('\n可能的解决方案:');
    console.error('1. 检查网络连接');
    console.error('2. 验证GitHub Token是否正确');
    console.error('3. 确认仓库访问权限');
    console.error('4. 检查仓库中是否有符合条件的文件');
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  testGitHubConnection();
}

module.exports = { testGitHubConnection };
