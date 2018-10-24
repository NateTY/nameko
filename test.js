/* constants */

const allSkills = '石頭 遲鈍 快腿 幸運 嬌小 鐵拳 發光 大力士 泳將 機器人 大胃王 毒 幹勁 飛翔 偵測 屏障 音感 夜視 爆炸 手持武器 潛水 搭乘 耐寒 光合成 可愛 聰明 食物 遠距離攻擊 近距離攻擊 勇氣 犄角 隱身'.split(' ');
//console.log('allSkills', allSkills);

const allNamekos = '菇菇 小白菇菇 惡魔菇菇 偽裝菇菇 喵咪菇菇 光頭菇菇 白兔菇菇 軟化菇菇 白巧克力菇菇 河童菇菇 不良菇菇 黃色菇菇 夾子菇菇 浪潮菇菇 偽浪潮菇菇 小辣椒菇菇 天使菇菇 野貓菇菇 狗狗菇菇 章魚燒菇菇 黑沉菇菇 迷彩菇菇 菇菇燈泡 小羊菇菇 洋蔥頭菇菇 熔岩菇菇 發光菇菇 將軍菇菇 經理學妹菇菇 緞帶菇菇 NEO菇菇 花粉症菇菇 忍者菇菇 ???菇菇(空缺) 頑皮菇菇 蘋果菇菇 鱗柄白鵝膏 功夫菇菇 雙葉菇菇 水貂菇菇 毒箭菇菇 苦澀菇菇 畫家菇菇 螢火蟲菇菇 燈飾菇菇 法老菇菇 高麗菜菇菇 白貓菇菇 冰錐菇菇'.split(' ');

const is7Namekos = '菇菇 小白菇菇 白兔菇菇 狗狗菇菇 小羊菇菇 發光菇菇 蘋果菇菇 水貂菇菇 燈飾菇菇 高麗菜菇菇 白貓菇菇 冰錐菇菇'.split(' ');

//const allTreasures = '溫泉之花 饅頭的化石 瓦斯球 琥珀菇 發光樹根 真理樹根 樹根群柱 生命樹根 固定結晶（棱柱） 結冰天使'.split(' ');
const allTreasures = '瓦斯球 琥珀菇 樹根群柱 生命樹根 固定結晶（棱柱） 固定結晶（樹枝星狀） 固定結晶（星盤狀） 結冰天使'.split(' ');

//const allStuffs = '暖暖石 除臭岩 濃稠樹液 樹液晶 萬年冰'.split(' ');
//const allStuffs = '除臭岩 樹液晶 萬年冰'.split(' ');
const allStuffs = '除臭岩 濃稠樹液 樹液晶 萬年冰'.split(' ');

/* namekos */

const namekoSetConfig = [{
  name: '測試組',
  desc: '** 測試功能用的組 **',
  namekos: [{
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    values: [160, 70, 80],
    values2: [10, 5, 10],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    values: [145, 145, 145],
    values2: [0, 0, 0],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    values: [105, 125, 165],
    values2: [5, 5, 5],
//  }, {
//    name: '鱗柄白鵝膏',
//    skills: ['毒', '聰明'],
//    values: [110, 145, 45],
//    values2: [10, 10, 15],
//  }, {
//    name: '功夫菇菇',
//    skills: ['鐵拳', '近距離攻擊', '勇氣'],
//    values: [170, 50, 150],
//    values2: [0, 0, 0],
//  }, {
//    name: '雙葉菇菇',
//    skills: ['偵測', '光合成', '犄角'],
//    values: [150, 95, 120],
//    values2: [0, 0, 0],
//  }, {
//    name: '將軍菇菇',
//    skills: ['手持武器', '近距離攻擊'],
//    values: [100, 70, 65],
//    values2: [20, 5, 5],
  }],
}, // end of 測試組
{
  name: '70滿',
  desc: '70滿裝',
  namekos: [{
    name: '菇菇',
    skills: ['幸運', '石頭'],
    values: [100, 100, 100],
  }, {
    name: '小白菇菇',
    skills: ['遲鈍'],
    values: [130, 80, 80],
  }, {
    name: '惡魔菇菇',
    skills: ['犄角', '石頭'],
    values: [75, 80, 120],
  }, {
    name: '偽裝菇菇',
    skills: ['泳將'],
    values: [95, 125, 95],
  }, {
    name: '喵咪菇菇',
    skills: ['快腿', '夜視'],
    values: [80, 80, 145],
  }, {
    name: '光頭菇菇',
    skills: ['隱身', '發光'],
    values: [130, 100, 100],
  }, {
    name: '白兔菇菇',
    skills: ['快腿', '可愛', '幸運', '耐寒', '偵測'],
    values: [85, 70, 130],
  }, {
    name: '軟化菇菇',
    skills: [],
    values: [90, 130, 90],
  }, {
    name: '白巧克力菇菇',
    skills: ['食物'],
    values: [80, 120, 95],
  }, {
    name: '河童菇菇',
    skills: ['泳將'],
    values: [130, 75, 85],
  }, {
    name: '不良菇菇',
    skills: ['幸運'],
    values: [110, 115, 155],
  }, {
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    values: [170, 75, 90],
  }, {
    name: '夾子菇菇',
    skills: ['近距離攻擊'],
    values: [90, 80, 120],
  }, {
    name: '浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 95, 125],
  }, {
    name: '偽浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [90, 120, 90],
  }, {
    name: '小辣椒菇菇',
    skills: ['食物', '勇氣', '音感'],
    values: [95, 115, 155],
  }, {
    name: '天使菇菇',
    skills: ['幸運', '飛翔'],
    values: [80, 95, 130],
  }, {
    name: '野貓菇菇',
    skills: ['快腿', '夜視'],
    values: [80, 40, 135],
  }, {
    name: '狗狗菇菇',
    skills: ['快腿'],
    values: [130, 85, 65],
  }, {
    name: '章魚燒菇菇',
    skills: ['食物'],
    values: [115, 70, 70],
  }, {
    name: '黑沉菇菇',
    skills: ['隱身', '夜視'],
    values: [85, 140, 85],
  }, {
    name: '迷彩菇菇',
    skills: ['夜視', '隱身'],
    values: [50, 90, 125],
  }, {
    name: '菇菇燈泡',
    skills: ['發光', '聰明', '幸運'],
    values: [80, 135, 90],
  }, {
    name: '小羊菇菇',
    skills: ['耐寒', '犄角'],
    values: [130, 90, 50],
  }, {
    name: '洋蔥頭菇菇',
    skills: ['近距離攻擊', '犄角'],
    values: [90, 85, 120],
  }, {
    name: '熔岩菇菇',
    skills: ['石頭', '發光'],
    values: [160, 95, 45],
  }, {
    name: '發光菇菇',
    skills: ['發光', '光合成'],
    values: [60, 80, 135],
  }, {
    name: '將軍菇菇',
    skills: ['手持武器', '近距離攻擊'],
    values: [120, 75, 65],
  }, {
    name: '經理學妹菇菇',
    skills: ['幹勁'],
    values: [130, 65, 95],
  }, {
    name: '緞帶菇菇',
    skills: ['可愛'],
    values: [95, 145, 95],
  }, {
    name: 'NEO菇菇',
    skills: ['發光', '夜視', '犄角'],
    values: [120, 120, 110],
  }, {
    name: '花粉症菇菇',
    skills: ['光合成'],
    values: [135, 100, 90],
  }, {
    name: '忍者菇菇',
    skills: ['快腿', '手持武器', '遠距離攻擊', '隱身'],
    values: [90, 90, 130],
  //}, {
  //  name: '???菇菇(空缺)',
  //  skills: [],
  //  values: [1, 1, 1],
  }, {
    name: '頑皮菇菇',
    skills: ['遲鈍', '毒'],
    values: [95, 135, 95],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    values: [115, 115, 115],
  }, {
    name: '鱗柄白鵝膏',
    skills: ['毒', '聰明'],
    values: [120, 155, 60],
  }, {
    name: '功夫菇菇',
    skills: ['鐵拳', '近距離攻擊', '勇氣'],
    values: [170, 50, 150],
  }, {
    name: '雙葉菇菇',
    skills: ['偵測', '光合成', '犄角'],
    values: [150, 95, 120],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    values: [100, 120, 155],
  }, {
    name: '毒箭菇菇',
    skills: ['遲鈍', '毒', '偵測'],
    values: [120, 95, 160],
  }, {
    name: '苦澀菇菇',
    skills: ['聰明', '食物'],
    values: [95, 165, 95],
  }, {
    name: '畫家菇菇',
    skills: ['手持武器'],
    values: [100, 145, 120],
  }, {
    name: '螢火蟲菇菇',
    skills: ['快腿', '發光', '飛翔'],
    values: [130, 90, 150],
  }, {
    name: '燈飾菇菇',
    skills: ['幸運', '發光', '偵測'],
    values: [95, 125, 130],
  }, {
    name: '法老菇菇',
    skills: ['石頭', '幸運', '聰明'],
    values: [100, 160, 140],
  }]
}, // end of 70滿
{
  name: '80滿',
  desc: '80滿裝',
  namekos: [{
    name: '菇菇',
    skills: ['幸運', '石頭'],
    values: [110, 110, 110],
  }, {
    name: '小白菇菇',
    skills: ['遲鈍'],
    values: [160, 100, 100],
  }, {
    name: '惡魔菇菇',
    skills: ['犄角', '石頭'],
    values: [75, 80, 120],
  }, {
    name: '偽裝菇菇',
    skills: ['泳將'],
    values: [95, 125, 95],
  }, {
    name: '喵咪菇菇',
    skills: ['快腿', '夜視'],
    values: [80, 80, 145],
  }, {
    name: '光頭菇菇',
    skills: ['隱身', '發光'],
    values: [130, 100, 100],
  }, {
    name: '白兔菇菇',
    skills: ['快腿', '可愛', '幸運', '耐寒', '偵測'],
    values: [110, 80, 150],
  }, {
    name: '軟化菇菇',
    skills: [],
    values: [90, 130, 90],
  }, {
    name: '白巧克力菇菇',
    skills: ['食物'],
    values: [80, 120, 95],
  }, {
    name: '河童菇菇',
    skills: ['泳將'],
    values: [130, 75, 85],
  }, {
    name: '不良菇菇',
    skills: ['幸運'],
    values: [110, 115, 155],
  }, {
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    values: [170, 75, 90],
  }, {
    name: '夾子菇菇',
    skills: ['近距離攻擊'],
    values: [90, 80, 120],
  }, {
    name: '浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 95, 125],
  }, {
    name: '偽浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [90, 120, 90],
  }, {
    name: '小辣椒菇菇',
    skills: ['食物', '勇氣', '音感'],
    values: [95, 115, 155],
  }, {
    name: '天使菇菇',
    skills: ['幸運', '飛翔'],
    values: [80, 95, 130],
  }, {
    name: '野貓菇菇',
    skills: ['快腿', '夜視'],
    values: [80, 40, 135],
  }, {
    name: '狗狗菇菇',
    skills: ['快腿'],
    values: [165, 100, 90],
  }, {
    name: '章魚燒菇菇',
    skills: ['食物'],
    values: [115, 70, 70],
  }, {
    name: '黑沉菇菇',
    skills: ['隱身', '夜視'],
    values: [85, 140, 85],
  }, {
    name: '迷彩菇菇',
    skills: ['夜視', '隱身'],
    values: [50, 90, 125],
  }, {
    name: '菇菇燈泡',
    skills: ['發光', '聰明', '幸運'],
    values: [80, 135, 90],
  }, {
    name: '小羊菇菇',
    skills: ['耐寒', '犄角'],
    values: [150, 110, 80],
  }, {
    name: '洋蔥頭菇菇',
    skills: ['近距離攻擊', '犄角'],
    values: [90, 85, 120],
  }, {
    name: '熔岩菇菇',
    skills: ['石頭', '發光'],
    values: [160, 95, 45],
  }, {
    name: '發光菇菇',
    skills: ['發光', '光合成'],
    values: [75, 100, 165],
  }, {
    name: '將軍菇菇',
    skills: ['手持武器', '近距離攻擊'],
    values: [120, 75, 65],
  }, {
    name: '經理學妹菇菇',
    skills: ['幹勁'],
    values: [130, 65, 95],
  }, {
    name: '緞帶菇菇',
    skills: ['可愛'],
    values: [95, 145, 95],
  }, {
    name: 'NEO菇菇',
    skills: ['發光', '夜視', '犄角'],
    values: [120, 120, 110],
  }, {
    name: '花粉症菇菇',
    skills: ['光合成'],
    values: [135, 100, 90],
  }, {
    name: '忍者菇菇',
    skills: ['快腿', '手持武器', '遠距離攻擊', '隱身'],
    values: [90, 90, 130],
  //}, {
  //  name: '???菇菇(空缺)',
  //  skills: [],
  //  values: [1, 1, 1],
  }, {
    name: '頑皮菇菇',
    skills: ['遲鈍', '毒'],
    values: [95, 135, 95],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    values: [145, 145, 150],
  }, {
    name: '鱗柄白鵝膏',
    skills: ['毒', '聰明'],
    values: [120, 155, 60],
  }, {
    name: '功夫菇菇',
    skills: ['鐵拳', '近距離攻擊', '勇氣'],
    values: [170, 50, 150],
  }, {
    name: '雙葉菇菇',
    skills: ['偵測', '光合成', '犄角'],
    values: [150, 95, 120],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    values: [110, 130, 170],
  }, {
    name: '毒箭菇菇',
    skills: ['遲鈍', '毒', '偵測'],
    values: [120, 95, 160],
  }, {
    name: '苦澀菇菇',
    skills: ['聰明', '食物'],
    values: [95, 165, 95],
  }, {
    name: '畫家菇菇',
    skills: ['手持武器'],
    values: [100, 145, 120],
  }, {
    name: '螢火蟲菇菇',
    skills: ['快腿', '發光', '飛翔'],
    values: [130, 90, 150],
  }, {
    name: '燈飾菇菇',
    skills: ['幸運', '發光', '偵測'],
    values: [120, 140, 150],
  }, {
    name: '法老菇菇',
    skills: ['石頭', '幸運', '聰明'],
    values: [100, 160, 140],
  }, {
    name: '高麗菜菇菇',
    skills: ['耐寒', '光合成', '食物', '隱身'],
    values: [140, 140, 110],
  }, {
    name: '白貓菇菇',
    skills: ['快腿', '夜視', '耐寒'],
    values: [120, 140, 140],
  }, {
    name: '冰錐菇菇',
    skills: ['耐寒', '遠距離攻擊', '犄角'],
    values: [160, 110, 135],
  }]
}, // end of 80滿
{
  name: '80未滿',
  desc: '80未滿裝、只有部分較強菇菇',
  namekos: [{
    name: '白兔菇菇',
    skills: ['快腿', '可愛', '幸運', '耐寒', '偵測'],
    //values: [110, 80, 150],
    values: [90, 70, 130],
  }, {
    name: '不良菇菇',
    skills: ['幸運'],
    //values: [110, 115, 155],
    values: [90, 105, 145],
  }, {
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    //values: [170, 75, 90],
    values: [160, 70, 80],
  }, {
    name: '狗狗菇菇',
    skills: ['快腿'],
    //values: [165, 100, 90],
    values: [130, 85, 70],
  }, {
    name: '小羊菇菇',
    skills: ['耐寒', '犄角'],
    //values: [150, 110, 80],
    values: [110, 70, 35],
  }, {
    name: '熔岩菇菇',
    skills: ['石頭', '發光'],
    //values: [160, 95, 45],
    values: [135, 70, 25],
  }, {
    name: '將軍菇菇',
    skills: ['手持武器', '近距離攻擊'],
    //values: [120, 75, 65],
    values: [100, 70, 65],
  }, {
    name: '忍者菇菇',
    skills: ['快腿', '手持武器', '遠距離攻擊', '隱身'],
    values: [90, 90, 130],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    //values: [145, 145, 150],
    values: [145, 145, 145],
  }, {
    name: '鱗柄白鵝膏',
    skills: ['毒', '聰明'],
    //values: [120, 155, 60],
    values: [110, 145, 45],
  }, {
    name: '功夫菇菇',
    skills: ['鐵拳', '近距離攻擊', '勇氣'],
    values: [170, 50, 150],
  }, {
    name: '雙葉菇菇',
    skills: ['偵測', '光合成', '犄角'],
    values: [150, 95, 120],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    //values: [110, 130, 170],
    values: [105, 125, 165],
  }, {
    name: '毒箭菇菇',
    skills: ['遲鈍', '毒', '偵測'],
    values: [120, 95, 160],
  }, {
    name: '螢火蟲菇菇',
    skills: ['快腿', '發光', '飛翔'],
    //values: [130, 90, 150],
    values: [125, 85, 150],
  }, {
    name: '燈飾菇菇',
    skills: ['幸運', '發光', '偵測'],
    //values: [120, 140, 150],
    values: [115, 135, 145],
  }, {
    name: '高麗菜菇菇',
    skills: ['耐寒', '光合成', '食物', '隱身'],
    //values: [140, 140, 110],
    values: [125, 125, 105],
  }, {
    name: '白貓菇菇',
    skills: ['快腿', '夜視', '耐寒'],
    //values: [120, 140, 140],
    values: [110, 140, 140],
  }, {
    name: '冰錐菇菇',
    skills: ['耐寒', '遠距離攻擊', '犄角'],
    //values: [160, 110, 135],
    values: [150, 105, 130],
  }]
}, // end of 80滿2
{
  name: '毛_現在',
  desc: '12.07 10:30, 75 級時的 update',
  namekos: [{
    name: '菇菇',
    skills: ['幸運', '石頭'],
    values: [90, 90, 90],
    values2: [15, 15, 15],
  }, {
    name: '小白菇菇',
    skills: ['遲鈍'],
    values: [140, 85, 85],
    values2: [0, 0, 0],
  }, {
    name: '惡魔菇菇',
    skills: ['犄角', '石頭'],
    values: [60, 65, 110],
    values2: [0, 0, 0],
  }, {
    name: '偽裝菇菇',
    skills: ['泳將'],
    values: [90, 100, 90],
    values2: [0, 0, 0],
  }, {
    name: '喵咪菇菇',
    skills: ['快腿', '夜視'],
    values: [55, 55, 120],
    values2: [0, 0, 0],
  }, {
    name: '光頭菇菇',
    skills: ['隱身', '發光'],
    values: [110, 95, 95],
    values2: [0, 0, 0],
  }, {
    name: '白兔菇菇',
    skills: ['快腿', '可愛', '幸運', '耐寒', '偵測'],
    values: [85, 70, 120],
    values2: [15, 5, 15],
  }, {
    name: '軟化菇菇',
    skills: [],
    values: [90, 95, 90],
    values2: [0, 0, 0],
  }, {
    name: '白巧克力菇菇',
    skills: ['食物'],
    values: [70, 100, 95],
    values2: [0, 0, 0],
  }, {
    name: '河童菇菇',
    skills: ['泳將'],
    values: [120, 55, 65],
    values2: [0, 0, 0],
  }, {
    name: '不良菇菇',
    skills: ['幸運'],
    values: [90, 105, 145],
    values2: [0, 0, 0],
  }, {
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    values: [160, 70, 80],
    values2: [10, 5, 10],
  }, {
    name: '夾子菇菇',
    skills: ['近距離攻擊'],
    values: [75, 70, 120],
    values2: [0, 0, 0],
  }, {
    name: '浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 80, 110],
    values2: [0, 0, 0],
  }, {
    name: '偽浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 120, 70],
    values2: [0, 0, 0],
  }, {
    name: '小辣椒菇菇',
    skills: ['食物', '勇氣'],
    values: [85, 105, 145],
    values2: [0, 0, 0],
  }, {
    name: '天使菇菇',
    skills: ['幸運', '飛翔'],
    values: [50, 75, 100],
    values2: [0, 0, 0],
  }, {
    name: '野貓菇菇',
    skills: ['快腿', '夜視'],
    values: [60, 40, 130],
    values2: [0, 0, 0],
  }, {
    name: '狗狗菇菇',
    skills: ['快腿'],
    values: [130, 85, 65],
    values2: [0, 5, 15],
  }, {
    name: '章魚燒菇菇',
    skills: ['食物'],
    values: [110, 55, 55],
    values2: [0, 0, 0],
  }, {
    name: '黑沉菇菇',
    skills: ['隱身', '夜視'],
    values: [70, 130, 70],
    values2: [0, 0, 0],
  }, {
    name: '迷彩菇菇',
    skills: ['夜視', '隱身'],
    values: [35, 45, 95],
    values2: [0, 0, 0],
  }, {
    name: '菇菇燈泡',
    skills: ['發光', '聰明'],
    values: [55, 105, 60],
    values2: [0, 0, 0],
  }, {
    name: '小羊菇菇',
    skills: ['耐寒', '犄角'],
    values: [100, 70, 35],
    values2: [10, 20, 25],
  }, {
    name: '洋蔥頭菇菇',
    skills: ['近距離攻擊', '犄角'],
    values: [45, 50, 65],
    values2: [0, 0, 0],
  }, {
    name: '熔岩菇菇',
    skills: ['石頭', '發光'],
    values: [135, 70, 25],
    values2: [25, 25, 20],
  }, {
    name: '發光菇菇',
    skills: ['發光', '光合成'],
    values: [30, 50, 100],
    values2: [40, 40, 50],
  }, {
    name: '將軍菇菇',
    skills: ['手持武器', '近距離攻擊'],
    values: [100, 70, 65],
    values2: [20, 5, 5],
  }, {
    name: '經理學妹菇菇',
    skills: ['幹勁'],
    values: [115, 65, 75],
    values2: [0, 0, 0],
  }, {
    name: '緞帶菇菇',
    skills: ['可愛'],
    values: [75, 140, 80],
    values2: [0, 0, 0],
  }, {
    name: 'NEO菇菇',
    skills: ['發光', '夜視', '犄角'],
    values: [120, 120, 110],
    values2: [0, 0, 0],
  }, {
    name: '花粉症菇菇',
    skills: ['光合成'],
    values: [110, 80, 70],
    values2: [0, 0, 0],
  }, {
    name: '忍者菇菇',
    skills: ['快腿', '手持武器', '遠距離攻擊', '隱身'],
    values: [75, 80, 120],
    values2: [15, 10, 10],
  //}, {
  //  name: '???菇菇(空缺)',
  //  skills: [],
  //  values: [1, 1, 1],
  //  values2: [0, 0, 0],
  }, {
    name: '頑皮菇菇',
    skills: ['遲鈍', '毒'],
    values: [85, 130, 85],
    values2: [15, 10, 15],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    values: [145, 145, 145],
    values2: [0, 0, 0],
  }, {
    name: '鱗柄白鵝膏',
    skills: ['毒', '聰明'],
    values: [110, 145, 45],
    values2: [10, 10, 15],
  }, {
    name: '功夫菇菇',
    skills: ['鐵拳', '近距離攻擊', '勇氣'],
    values: [170, 50, 150],
    values2: [0, 0, 0],
  }, {
    name: '雙葉菇菇',
    skills: ['偵測', '光合成', '犄角'],
    values: [150, 95, 120],
    values2: [0, 0, 0],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    values: [105, 125, 165],
    values2: [5, 5, 5],
  }, {
    name: '毒箭菇菇',
    skills: ['遲鈍', '毒', '偵測'],
    values: [120, 95, 160],
    values2: [0, 0, 0],
  }, {
    name: '苦澀菇菇',
    skills: ['聰明', '食物'],
    values: [70, 145, 80],
    values2: [0, 0, 0],
  }, {
    name: '畫家菇菇',
    skills: ['手持武器'],
    values: [95, 140, 115],
    values2: [0, 0, 0],
  }, {
    name: '螢火蟲菇菇',
    skills: ['快腿', '發光', '飛翔'],
    values: [125, 85, 150],
    values2: [5, 5, 0],
  }, {
    name: '燈飾菇菇',
    skills: ['幸運', '發光', '偵測'],
    values: [90, 120, 125],
    values2: [5, 5, 5],
  }, {
    name: '法老菇菇',
    skills: ['石頭', '幸運', '聰明'],
    values: [90, 155, 130],
    values2: [10, 5, 10],
  }, {
    name: '高麗菜菇菇',
    skills: ['耐寒', '光合成', '食物', '隱身'],
    values: [120, 120, 95],
    values2: [0, 0, 0],
  }]
}, // end of 毛_現在
{
  name: '比_現在',
  desc: '08.21 18:45, 78 級時的 update',
  namekos: [{
    name: '菇菇',
    skills: ['幸運', '石頭'],
    values: [95, 95, 90],
    values2: [15, 15, 15],
  }, {
    name: '小白菇菇',
    skills: ['遲鈍'],
    values: [150, 85, 85],
    values2: [0, 0, 0],
  }, {
    name: '惡魔菇菇',
    skills: ['犄角', '石頭'],
    values: [65, 70, 110],
    values2: [0, 0, 0],
  }, {
    name: '偽裝菇菇',
    skills: ['泳將'],
    values: [75, 75, 65],
    values2: [0, 0, 0],
  }, {
    name: '喵咪菇菇',
    skills: ['快腿', '夜視'],
    values: [55, 45, 95],
    values2: [0, 0, 0],
  }, {
    name: '光頭菇菇',
    skills: ['隱身', '發光'],
    values: [95, 75, 75],
    values2: [0, 0, 0],
  }, {
    name: '白兔菇菇',
    skills: ['快腿', '可愛', '幸運', '耐寒', '偵測'],
    values: [60, 45, 120],
    values2: [15, 5, 15],
  }, {
    name: '軟化菇菇',
    skills: [],
    values: [90, 95, 90],
    values2: [0, 0, 0],
  }, {
    name: '白巧克力菇菇',
    skills: ['食物'],
    values: [50, 65, 60],
    values2: [0, 0, 0],
  }, {
    name: '河童菇菇',
    skills: ['泳將'],
    values: [75, 35, 55],
    values2: [0, 0, 0],
  }, {
    name: '不良菇菇',
    skills: ['幸運'],
    values: [65, 60, 95],
    values2: [0, 0, 0],
  }, {
    name: '黃色菇菇',
    skills: ['幸運', '大胃王'],
    values: [170, 75, 90],
    values2: [10, 5, 10],
  }, {
    name: '夾子菇菇',
    skills: ['近距離攻擊'],
    values: [30, 25, 50],
    values2: [0, 0, 0],
  }, {
    name: '浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 80, 110],
    values2: [0, 0, 0],
  }, {
    name: '偽浪潮菇菇',
    skills: ['泳將', '潛水'],
    values: [70, 120, 70],
    values2: [0, 0, 0],
  }, {
    name: '小辣椒菇菇',
    skills: ['食物', '勇氣'],
    values: [70, 95, 140],
    values2: [0, 0, 0],
  }, {
    name: '天使菇菇',
    skills: ['幸運', '飛翔'],
    values: [70, 85, 95],
    values2: [0, 0, 0],
  }, {
    name: '野貓菇菇',
    skills: ['快腿', '夜視'],
    values: [55, 40, 100],
    values2: [0, 0, 0],
  }, {
    name: '狗狗菇菇',
    skills: ['快腿'],
    values: [110, 75, 50],
    values2: [0, 5, 15],
  }, {
    name: '章魚燒菇菇',
    skills: ['食物'],
    values: [75, 40, 40],
    values2: [0, 0, 0],
  }, {
    name: '黑沉菇菇',
    skills: ['隱身', '夜視'],
    values: [55, 95, 55],
    values2: [0, 0, 0],
  }, {
    name: '迷彩菇菇',
    skills: ['夜視', '隱身'],
    values: [30, 45, 85],
    values2: [0, 0, 0],
  }, {
    name: '菇菇燈泡',
    skills: ['發光', '聰明'],
    values: [45, 80, 55],
    values2: [0, 0, 0],
  }, {
    name: '小羊菇菇',
    skills: ['耐寒', '犄角'],
    values: [140, 100, 70],
    values2: [10, 20, 25],
  }, {
    name: '洋蔥頭菇菇',
    skills: ['近距離攻擊', '犄角'],
    values: [45, 50, 65],
    values2: [0, 0, 0],
  }, {
    name: '熔岩菇菇',
    skills: ['石頭', '發光'],
    values: [105, 55, 25],
    values2: [25, 25, 20],
  }, {
    name: '發光菇菇',
    skills: ['發光', '光合成'],
    values: [60, 80, 140],
    values2: [40, 40, 50],
  }, {
    name: '將軍菇菇',
    skills: ['手持武器', '近距離攻擊'],
    values: [100, 70, 65],
    values2: [20, 5, 5],
  }, {
    name: '經理學妹菇菇',
    skills: ['幹勁'],
    values: [95, 55, 70],
    values2: [0, 0, 0],
  }, {
    name: '緞帶菇菇',
    skills: ['可愛'],
    values: [55, 100, 60],
    values2: [0, 0, 0],
  }, {
    name: 'NEO菇菇',
    skills: ['發光', '夜視', '犄角'],
    values: [120, 120, 110],
    values2: [0, 0, 0],
  }, {
    name: '花粉症菇菇',
    skills: ['光合成'],
    values: [110, 75, 60],
    values2: [0, 0, 0],
  }, {
    name: '忍者菇菇',
    skills: ['快腿', '手持武器', '遠距離攻擊', '隱身'],
    values: [75, 80, 120],
    values2: [15, 10, 10],
  //}, {
  //  name: '???菇菇(空缺)',
  //  skills: [],
  //  values: [1, 1, 1],
  //  values2: [0, 0, 0],
  }, {
    name: '頑皮菇菇',
    skills: ['遲鈍', '毒'],
    values: [80, 125, 80],
    values2: [15, 10, 15],
  }, {
    name: '蘋果菇菇',
    skills: ['食物', '勇氣'],
    values: [115, 120, 115],
    values2: [0, 0, 0],
  }, {
    name: '鱗柄白鵝膏',
    skills: ['毒', '聰明'],
    values: [120, 155, 60],
    values2: [10, 10, 15],
  }, {
    name: '功夫菇菇',
    skills: ['鐵拳', '近距離攻擊', '勇氣'],
    values: [170, 50, 150],
    values2: [0, 0, 0],
  }, {
    name: '雙葉菇菇',
    skills: ['偵測', '光合成', '犄角'],
    values: [150, 95, 120],
    values2: [0, 0, 0],
  }, {
    name: '水貂菇菇',
    skills: ['快腿', '幸運', '耐寒', '可愛'],
    values: [105, 125, 165],
    values2: [5, 5, 5],
  }, {
    name: '毒箭菇菇',
    skills: ['遲鈍', '毒', '偵測'],
    values: [120, 95, 160],
    values2: [0, 0, 0],
  }, {
    name: '苦澀菇菇',
    skills: ['聰明', '食物'],
    values: [70, 140, 80],
    values2: [0, 0, 0],
  }, {
    name: '畫家菇菇',
    skills: ['手持武器'],
    values: [80, 130, 105],
    values2: [0, 0, 0],
  }, {
    name: '螢火蟲菇菇',
    skills: ['快腿', '發光', '飛翔'],
    values: [130, 90, 150],
    values2: [5, 5, 0],
  }, {
    name: '燈飾菇菇',
    skills: ['幸運', '發光', '偵測'],
    values: [105, 130, 135],
    values2: [5, 5, 5],
  }, {
    name: '法老菇菇',
    skills: ['石頭', '幸運', '聰明'],
    values: [85, 155, 125],
    values2: [10, 5, 10],
  }, {
    name: '高麗菜菇菇',
    skills: ['耐寒', '光合成', '食物', '隱身'],
    values: [130, 130, 110],
    values2: [0, 0, 0],
  }, {
    name: '白貓菇菇',
    skills: ['快腿', '夜視', '耐寒'],
    //values: [110, 140, 140],
    values: [100, 120, 120],
    values2: [0, 0, 0],
  }, {
    name: '冰錐菇菇',
    skills: ['耐寒', '遠距離攻擊', '犄角'],
    //values: [150, 105, 130],
    values: [1, 1, 1],
    values2: [0, 0, 0],
  }]
}, // end of 比_現在
];

const namekoSets = {};
namekoSetConfig.forEach(config => namekoSets[config.name] = config);

/* tunnels */

const tunnelConfig = [{
  name: '4咕嚕咕嚕間歇泉_中途',
  count: 3,
  memos: [{
    type: '有1隻',
    valueThresholds: [['red', 70]],
    skillValueBonus: null,
    name: '熱蒸氣孔',
    reward: ['暖暖石', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 110]],
    skillValueBonus: null,
    name: '過熱蒸氣孔',
    reward: ['除臭岩', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['red', 80]],
    skillValueBonus: ['快腿', 'red', 10],
    name: '熱蒸氣孔．一對',
    reward: ['除臭岩', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['red', 90]],
    skillValueBonus: ['快腿', 'red', 20],
    name: '過熱蒸氣孔．一對',
    reward: ['除臭岩', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 70]],
    skillValueBonus: ['幸運', 'blue', 10],
    name: '間歇泉在哪裡？初級',
    reward: ['溫泉之花', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 90]],
    skillValueBonus: ['幸運', 'blue', 20],
    name: '間歇泉在哪裡？中級',
    reward: ['饅頭的化石', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 80]],
    skillValueBonus: null,
    name: '積聚瓦斯的通道',
    reward: ['瓦斯球', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 90]],
    skillValueBonus: ['快腿', 'green', 10],
    name: '積聚濃密瓦斯的通道',
    reward: ['瓦斯球', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 100]],
    skillValueBonus: ['快腿', 'green', 10],
    name: '充滿瓦斯的通道',
    reward: ['饅頭的化石', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 70], ['green', 80]],
    skillValueBonus: ['泳將', 'green', 20],
    name: '泳渡溫水',
    reward: ['琥珀菇', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 300]],
    skillValueBonus: ['石頭', 'red', 20],
    name: '落石叩叩',
    reward: ['溫泉之花', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 360]],
    skillValueBonus: ['石頭', 'red', 30],
    name: '落石隆隆',
    reward: ['琥珀菇', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 360]],
    skillValueBonus: ['近距離攻擊', 'red', 30],
    name: '落石咻咻',
    reward: ['暖暖石', 2],
  }, {
    type: '1隻有skill',
    skills: ['幸運'],
    name: '其中一個池子好像很燙',
    reward: ['除臭岩', 1],
  }, {
    type: '1隻有skill',
    skills: ['快腿'],
    name: '穿越間歇泉吧！',
    reward: ['瓦斯球', 1],
  }, {
    type: '全部有skill',
    skills: ['快腿'],
    name: '危險間歇泉',
    reward: ['琥珀菇', 1],
  }, {
    type: '總和',
    valueThresholds: [['green', 380]],
    skillValueBonus: ['勇氣', 'green', 30],
    name: '誰打頭陣',
    reward: ['饅頭的化石', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['red', 110]],
    skillValueBonus: ['勇氣', 'red', 30],
    name: '蒸氣深處發光的雙眼',
    reward: ['瓦斯球', 1],
  }, {
    type: '1隻有skill',
    skills: ['食物', '勇氣'],
    name: '勇敢的誘餌',
    reward: ['琥珀菇', 1],
  }],
}, {
  name: '6樹根隧道_中途',
  count: 3,
  memos: [{
    type: '有1隻',
    valueThresholds: [['red', 85]],
    skillValueBonus: null,
    name: '推開樹根前進',
    reward: ['濃稠樹液', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 100]],
    skillValueBonus: null,
    name: '穿越盤根錯節的樹根吧',
    reward: ['發光樹根', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 150]],
    skillValueBonus: null,
    name: '突破樹根之壁吧',
    reward: ['樹根群柱', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['red', 120]],
    skillValueBonus: ['快腿', 'red', 40],
    name: '運送樹根吧',
    reward: ['發光樹根', 2],
  }, {
    type: '有2隻',
    valueThresholds: [['red', 140]],
    skillValueBonus: ['快腿', 'red', 50],
    name: '運送更多樹根吧',
    reward: ['真理樹根', 1],
  }, {
    type: '有3隻',
    valueThresholds: [['red', 110]],
    skillValueBonus: ['快腿', 'red', 50],
    name: '運送巨大樹根吧',
    reward: ['生命樹根', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 100]],
    skillValueBonus: null,
    name: '解開糾纏的樹根吧',
    reward: ['樹根群柱', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 140]],
    skillValueBonus: ['偵測', 'blue', 40],
    name: '在黑暗中解開樹根',
    reward: ['樹液晶', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 95]],
    skillValueBonus: null,
    name: '快速解開樹根',
    reward: ['樹液晶', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 160]],
    skillValueBonus: ['偵測', 'green', 50],
    name: '在水裡解開樹根',
    reward: ['樹根群柱', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 110], ['blue', 100]],
    skillValueBonus: ['近距離攻擊', 'blue', 20],
    name: '緊密糾結的樹根',
    reward: ['樹根群柱', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 110], ['green', 130]],
    skillValueBonus: ['近距離攻擊', 'green', 20],
    name: '只有樹根',
    reward: ['生命樹根', 1],
  }, {
    // TODO handle this_nameko_has & all_nameko_has
    type: '總和',
    valueThresholds: [['red', 380]],
    skillValueBonus: null,
    name: '大家一起拔樹根吧',
    reward: ['樹液晶', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 420]],
    skillValueBonus: ['近距離攻擊', 'red', 40],
    name: '拔更多樹根吧',
    reward: ['樹根群柱', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 450]],
    skillValueBonus: ['近距離攻擊', 'red', 50],
    name: '拔起巨大樹根吧',
    reward: ['樹液晶', 2],
  }, {
    type: '總和',
    valueThresholds: [['blue', 300]],
    skillValueBonus: ['偵測', 'blue', 50],
    name: '在幽暗的房裡搬運樹根',
    reward: ['生命樹根', 1],
  }, {
    type: '總和',
    valueThresholds: [['green', 480]],
    skillValueBonus: ['快腿', 'green', 50],
    name: '準備好囉～挖樹根！',
    reward: ['樹根群柱', 2],
  }, {
    type: '1隻有skill',
    skills: ['手持武器'],
    name: '砍除樹根前進吧',
    reward: ['濃稠樹液', 1],
  }, {
    type: '1隻有skill',
    skills: ['近距離攻擊'],
    name: '糾纏的樹根',
    reward: ['樹根群柱', 1],
  }],
}, {
  name: '7_1清涼結冰洞_筆直通道',
  count: 3,
  is7: true,
  memos: [{
    type: '有1隻',
    valueThresholds: [['red', 130]],
    skillValueBonus: null,
    name: '寒冷通道',
    reward: ['萬年冰', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 150]],
    skillValueBonus: ['耐寒', 'red', 30],
    name: '寒意刺骨通道',
    reward: ['固定結晶（棱柱）', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 160]],
    skillValueBonus: null,
    name: '又冷又長的通道',
    reward: ['結冰天使', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 100]],
    skillValueBonus: null,
    name: '冰冷的出風口',
    reward: ['萬年冰', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 120]],
    skillValueBonus: null,
    name: '狂風呼嘯的出風口',
    reward: ['薄切肉片', 4],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 100]],
    skillValueBonus: null,
    name: '搖搖晃晃冰柱橋',
    reward: ['萬年冰', 1],
  }, {
    type: '有3隻',
    valueThresholds: [['green', 90]],
    skillValueBonus: null,
    name: '薄冰之橋',
    reward: ['御好燒', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 85], ['green', 130]],
    skillValueBonus: ['耐寒', 'red', 40],
    name: '滾雪球',
    reward: ['固定結晶（棱柱）', 1],
  }, {
    type: '總和',
    valueThresholds: [['red', 380]],
    skillValueBonus: ['幸運', 'red', 10],
    name: '大家一起取暖',
    reward: ['結冰天使', 1],
  }, {
    type: '1隻有skill',
    skills: ['光合成'],
    name: '陽光灑落的小房間',
    reward: ['萬年冰', 1],
  }],
}, {
  name: '7_2清涼結冰洞_凹凸通道',
  count: 3,
  is7: true,
  memos: [{
    type: '有1隻',
    valueThresholds: [['red', 100]],
    skillValueBonus: null,
    name: '清涼通道',
    reward: ['萬年冰', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 120]],
    skillValueBonus: null,
    name: '寒冷通道',
    reward: ['酸甜漿果果汁', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 100]],
    skillValueBonus: null,
    name: '冷凍水窪',
    reward: ['酸甜漿果果汁', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 140]],
    skillValueBonus: null,
    name: '冷凍水池',
    reward: ['固定結晶（樹枝星狀）', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['blue', 150]],
    skillValueBonus: ['耐寒', 'blue', 30],
    name: '冷冰冰的岔路',
    reward: ['結冰天使', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 100]],
    skillValueBonus: null,
    name: '搖搖晃晃冰柱橋',
    reward: ['萬年冰', 1],
  }, {
    type: '有3隻',
    valueThresholds: [['green', 100]],
    skillValueBonus: null,
    name: '薄冰之橋',
    reward: ['綿密奶泡咖啡', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 100], ['green', 160]],
    skillValueBonus: ['耐寒', 'green', 40],
    name: '用雪造路',
    reward: ['固定結晶（樹枝星狀）', 1],
  }, {
    type: '總和',
    valueThresholds: [['blue', 420]],
    skillValueBonus: ['幸運', 'blue', 30],
    name: '大家一起商量',
    reward: ['結冰天使', 1],
  }, {
    type: '1隻有skill',
    skills: ['偵測'],
    name: '確認溫度',
    reward: ['萬年冰', 2],
  }],
}, {
  name: '7_3清涼結冰洞_光滑通道',
  count: 3,
  is7: true,
  memos: [{
    type: '有1隻',
    valueThresholds: [['red', 100]],
    skillValueBonus: null,
    name: '清涼通道',
    reward: ['萬年冰', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 130]],
    skillValueBonus: null,
    name: '寒冷通道',
    reward: ['鮮奶油菠蘿麵包', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['blue', 100]],
    skillValueBonus: null,
    name: '冰冷的出風口',
    reward: ['萬年冰', 1],
  }, {
    type: '有3隻',
    valueThresholds: [['blue', 100]],
    skillValueBonus: ['快腿', 'blue', 30],
    name: '狂風呼嘯的出風口',
    reward: ['大號滿福堡', 2],
  }, {
    type: '有1隻',
    valueThresholds: [['green', 100]],
    skillValueBonus: null,
    name: '薄冰之橋',
    reward: ['鮮奶油菠蘿麵包', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['green', 140]],
    skillValueBonus: ['犄角', 'green', 10],
    name: '掃落冰錐',
    reward: ['固定結晶（星盤狀）', 1],
  }, {
    type: '有2隻',
    valueThresholds: [['green', 150]],
    skillValueBonus: ['犄角', 'green', 30],
    name: '掃落更多冰錐',
    reward: ['結冰天使', 1],
  }, {
    type: '有1隻',
    valueThresholds: [['red', 150], ['green', 130]],
    skillValueBonus: ['遲鈍', 'green', 40],
    name: '滾雪球',
    reward: ['固定結晶（星盤狀）', 1],
  }, {
    type: '總和',
    valueThresholds: [['green', 420]],
    skillValueBonus: ['食物', 'green', 40],
    name: '絕不向寒冷低頭',
    reward: ['結冰天使', 1],
  }, {
    type: '1隻有skill',
    skills: ['快腿'],
    name: '風之子',
    reward: ['萬年冰', 2],
  }],
}];

const tunnels = {};
tunnelConfig.forEach(config => tunnels[config.name] = config);

/* libs */

function go(tunnel, team) {
  const log = () => null;
  //const log = console.log;

  log(' >> Tunnel', tunnel.name);
  log('          ', team.map(n => n.name).join(', '));

  let passedMemos = [];
  let unpassedMemos = [];

  for (let memo of tunnel.memos) {
    const { type, valueThresholds: vts, skillValueBonus: svb, skills } = memo;
    const [ skill, sValue, bonus, needAll ] = (svb || []);
    log('      Memo');
    skills && log('        type', type, `[${skills.join(', ')}]`);
    vts    && log('        type', type, `[${(vts || []).map(a => a.join(':')).join(', ')}]`);
    svb    && log('        svb', svb.join(' '));

    let passed = false;

    if ('總和' === type) {
      const [ value, threshold ] = vts[0]; // TODO 會有多個技能組的可能嗎？

      let namekoValue = 0;
      let allHas = true;

      for (let member of team) {
        const nameko = {
          name:   member.name,
          skills: member.skills,
          red:    member.values[0],
          blue:   member.values[1],
          green:  member.values[2],
        };

        if (needAll && !nameko.skills.includes(skill)) {
          allHas = false;
        }

        namekoValue += nameko[value];

        if (!needAll && nameko.skills.includes(skill) && value === sValue) {
          namekoValue += bonus;
        }
      }

      if (skill && needAll && allHas) {
        namekoValue += bonus;
      }

      if (namekoValue >= threshold) {
        passed = true;
      }
    } else if ('有1隻' === type || '有2隻' === type || '有3隻' === type) {
      const needCount = parseInt(type.substr(1, 1));
      let currentCount = 0;

      for (let member of team) {
        let res = true;

        const nameko = {
          name:   member.name,
          skills: member.skills,
          red:    member.values[0],
          blue:   member.values[1],
          green:  member.values[2],
        };

        for (let vt of vts) {
          const [ value, threshold ] = vt;

          let namekoValue = nameko[value];
          if (nameko.skills.includes(skill) && value === sValue) {
            namekoValue += bonus;
          }

          if (namekoValue < threshold) {
            res = false;
            break;
          }
        }

        log(`          (${res ? 'O' : 'X'})`, nameko.name, `[${nameko.skills.join(', ')}]`, nameko.red, nameko.blue, nameko.green);

        if (res) {
          currentCount++;
          if (currentCount === needCount) {
            passed = true;
            break;
          }
        }
      }
    } else if ('1隻有skill' === type) {
      for (let nameko of team) {
        let res = true;

        for (let s of skills) {
          if (!nameko.skills.includes(s)) {
            res = false;
            break;
          }
        }

        if (res) {
          passed = true;
          break;
        }
      }
    } else if ('全部有skill' === type) {
      let count = 0;

      for (let nameko of team) {
        let res = true;

        for (let s of skills) {
          if (!nameko.skills.includes(s)) {
            res = false;
            break;
          }
        }

        if (res) {
          count++;
        }
      }

      passed = count === team.length;
    }

    (passed ? passedMemos : unpassedMemos).push(memo);
    log(`        passed => (${passed ? 'O' : 'X'})`);
  }

  log('    Memos', passedMemos);
  log(`    pass ${passedMemos.length} of ${tunnel.memos.length}`);
  log(' >> end tunnel', tunnel.name);

  return { team, passedMemos, unpassedMemos };
}

function goWithTeam(tunnel, team) {
  console.log('* ' + tunnel.name + ' with the specified team');
  if (!verifyNamekos(team)) {
    return;
  }

  if (tunnel.is7) {
    let newNamekos = []
    team.forEach(n => is7Namekos.includes(n.name) && newNamekos.push(n));
    team = newNamekos;
    //console.log('update for 7', newNamekos);
  }

  if (tunnel.count !== team.length) {
    console.log(tunnel.count, team.length);
    throw 'goWithTeam: BAD team member';
  }

  let { passedMemos, unpassedMemos } = go(tunnel, team);
  printResult(go(tunnel, team), tunnel);
}

function goWithAllCombination(tunnel, baseNamekos, noDup, ignoreNamekos) {
  console.log('* ' + tunnel.name + ' with all combinations');
  if (!verifyNamekos(baseNamekos)) {
    return;
  }

  if (tunnel.is7) {
    let newNamekos = []
    baseNamekos.forEach(n => is7Namekos.includes(n.name) && newNamekos.push(n));
    baseNamekos = newNamekos;
    //console.log('update for 7', newNamekos);
  }

  if (ignoreNamekos) {
    let newNamekos = []
    baseNamekos.forEach(n => ignoreNamekos.indexOf(n.name) === -1 && newNamekos.push(n));
    baseNamekos = newNamekos;
    //console.log('update for ignore', newNamekos);
  }

  if ((!noDup && baseNamekos.length <= 0) || (noDup && tunnel.count > baseNamekos.length)) {
    console.log(noDup, tunnel.count, baseNamekos.length);
    throw 'goWithTeam: BAD team member';
  }

  const { count } = tunnel;
  const teams = [];
  const results = [];

  let counter = 1;

  function pickTeam(prevs) {
    for (let i = 0; i < baseNamekos.length; i++) {
      let currents = prevs.slice();

      if (noDup && -1 !== currents.indexOf(baseNamekos[i])) {
        continue;
      }

      currents.push(baseNamekos[i]);

      if (count === currents.length) {
        //console.log('currents', currents.map(c => c.name));
        teams.push(currents);
      } else {
        pickTeam(currents);
      }
    }
  }

  // pick all combinations
  pickTeam([]);
  //console.log('length', teams.length);

  // sort every team
  for (let i = 0; i < teams.length; i++) {
    teams[i].sort((a, b) => a.name.localeCompare(b.name));
  }
  teams.sort((a, b) => a.map(n => n.name).join(',').localeCompare(b.map(n => n.name).join(',')));
  //teams.forEach(t => console.log(t.map(n => n.name).join(',')));

  // remove dulicated combinations
  let i = 1;
  while (teams[i]) {
    if (teams[i - 1].map(n => n.name).join(',') === teams[i].map(n => n.name).join(',')) {
      teams.splice(i, 1);
    } else {
      i++;
    }
  }
  //teams.forEach(t => console.log(t.map(n => n.name).join(',')));

  // test every combinations
  teams.forEach(t => {
    let r = go(tunnel, t);
    results.push(r);
    //console.log(' >> finish combination count', results.length);
  });

  // sort results
  //results.sort((r1, r2) => r2.passedMemos.length - r1.passedMemos.length);
  results.sort(sortResults);

  // show results
  const limit = 50;
  for (let i = Math.min(limit, results.length) - 1; i >=0 && i < results.length; i--) {
    printResult(results[i], tunnel);
  }
}

function verifyNamekos(namekos) {
  for (let n of namekos) {
    if (!allNamekos.includes(n.name)) {
      console.log(' >> verify bad 1', n, namekos);
      return false;
    }
    for (let v of n.values) {
      if (!Number.isInteger(v) || v <= 0) {
        console.log(' >> verify bad 2', n, namekos);
        return false;
      }
    }
    for (let s of n.skills) {
      if (!allSkills.includes(s)) {
        console.log(' >> verify bad 3', n, namekos);
        return false;
      }
    }
  }
  return true;
}

function sortResults(r1, r2) {
  //console.log('sort');
  const byPassCount = (r1, r2) => {
    //console.log('  byPassCount', r2.passedMemos.length - r1.passedMemos.length);
    return r2.passedMemos.length - r1.passedMemos.length;
  };

  const byTreasure = (r1, r2) => {
    let r1Count = 0;
    r1.passedMemos.forEach(p => {
      if (allTreasures.includes(p.reward[0])) {
        r1Count += p.reward[1];
      }
    })

    let r2Count = 0;
    r2.passedMemos.forEach(p => {
      if (allTreasures.includes(p.reward[0])) {
        r2Count += p.reward[1];
      }
    })

    //console.log('  byTreasure', r2Count - r1Count);
    return r2Count - r1Count;
  };

  const byStuff = (r1, r2) => {
    let r1Count = 0;
    r1.passedMemos.forEach(p => {
      if (allStuffs.includes(p.reward[0])) {
        r1Count += p.reward[1];
      }
    })

    let r2Count = 0;
    r2.passedMemos.forEach(p => {
      if (allStuffs.includes(p.reward[0])) {
        r2Count += p.reward[1];
      }
    })

    //console.log('  byStuff', r2Count - r1Count);
    return r2Count - r1Count;
  };

  //let funcs = [byTreasure, byPassCount];
  //let funcs = [byTreasure, byPassCount, byStuff];
  let funcs = [byStuff, byTreasure, byPassCount];
  for (let i = 0; i < funcs.length; i++) {
    let r = funcs[i](r1, r2);
    if (r !== 0 || i === funcs.length - 1) {
      //console.log('return r', r);
      return r;
    }
  }
  console.log('return WTF');
}

function printResult(result, tunnel) {
  //const showPassed = true;
  const showPassed = false;
  const showUnpassed = true;
  //const showUnpassed = false;

  let { team, passedMemos, unpassedMemos } = result;

  console.log(`    ${passedMemos.length}/${tunnel.memos.length},\t${team.map(n => n.name).join(', ')}`);
  addDom(`    ${passedMemos.length}/${tunnel.memos.length},\t${team.map(n => n.name).join(', ')}`);

  if (showPassed) {
    for (let memo of passedMemos) {
      let { type, reward: r, valueThresholds: v, skills: s, name } = memo;
      console.log(`      ${showUnpassed?'(O)':''}${r[0]}*${r[1]}  \t${type}${v?v.map(a=>a.join(':')).join() : ''}${s?s.join(','):''}\t${name}`);
      addDom(`      ${showUnpassed?'(O)':''}${r[0]}*${r[1]}  \t${type}${v?v.map(a=>a.join(':')).join() : ''}${s?s.join(','):''}\t${name}`);
    }
  }

  if (showUnpassed) {
    for (let memo of unpassedMemos) {
      let { type, reward: r, valueThresholds: v, skills: s, name } = memo;
      console.log(`      ${showPassed?'(X)':''}${r[0]}*${r[1]}  \t${type}${v?v.map(a=>a.join(':')).join() : ''}${s?s.join(','):''}\t${name}`);
      addDom(`      ${showPassed?'(X)':''}${r[0]}*${r[1]}  \t${type}${v?v.map(a=>a.join(':')).join() : ''}${s?s.join(','):''}\t${name}`);
    }
  }
}

function addDom(str) {
  $('#root').append(`<div>${str}</div>`);
}

// TODO add 4th中途 without 功夫

function useEquipment() {
  console.log(' >> useEquipment');
  for (const key in namekoSets) {
    namekoSets[key].namekos.forEach(n => {
      if (n.values2) {
        n.values[0] += n.values2[0];
        n.values[1] += n.values2[1];
        n.values[2] += n.values2[2];
      }
    });
  }
}

/* config */

//useEquipment();

let ignoreNamekos = [];
//ignoreNamekos = '功夫菇菇'.split(' ');
//ignoreNamekos = '小白菇菇'.split(' ');
ignoreNamekos = '雙葉菇菇'.split(' ');

/* main */

let tunnel = tunnels['4咕嚕咕嚕間歇泉_中途'];
tunnel = tunnels['6樹根隧道_中途'];
//tunnel = tunnels['7_1清涼結冰洞_筆直通道'];
//tunnel = tunnels['7_2清涼結冰洞_凹凸通道'];
//tunnel = tunnels['7_3清涼結冰洞_光滑通道'];

//let set = namekoSets['測試組'];
//console.log(set.name, set.desc);
//goWithTeam(tunnel, set.namekos);

//let set = namekoSets['毛_現在'];
let set = namekoSets['比_現在'];
//let set = namekoSets['70滿'];
//let set = namekoSets['80滿'];
//let set = namekoSets['80未滿'];
//goWithAllCombination(tunnel, set.namekos);
console.log(set.name, set.desc);

$(() => {
  $('<select></select>')
    .attr('id', 'tunnel')
    .prependTo('#head');

  let keys = Object.keys(tunnels);
  for (let i = 0; i < keys.length; i++) {
    $('#tunnel').append(`<option value="${keys[i]}">${keys[i]}</option>`);
  }

  addDom('ready!');

  $('#run').click(() => {
    $('#root').html('');

    let tunnel = tunnels[$('#tunnel').val()];
    addDom('DO => ' + $('#tunnel').val());
    goWithAllCombination(tunnel, set.namekos, true, ignoreNamekos);
  });
});
