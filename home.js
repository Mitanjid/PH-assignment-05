
// ===== Card =====
const services = [
  { id: 1, icon: 'assets/emergency.png', name_bn: 'জাতীয় জরুরি সেবা', name_en: 'National Emergency Number', number: '999', category: 'All' },
  { id: 2, icon: 'assets/police.png', name_bn: 'পুলিশ', name_en: 'Police Helpline Number', number: '999', category: 'Police' },
  { id: 3, icon: 'assets/fire-service.png', name_bn: 'ফায়ার সার্ভিস', name_en: 'Fire Service Number', number: '999', category: 'Fire' },
  { id: 4, icon: 'assets/ambulance.png', name_bn: 'অ্যাম্বুলেন্স', name_en: 'Ambulance Service', number: '1994-999999', category: 'Health' },
  { id: 5, icon: 'assets/emergency.png', name_bn: 'নারী ও শিশু হেল্পলাইন', name_en: 'Women & Child Helpline', number: '109', category: 'Help' },
  { id: 6, icon: 'assets/emergency.png', name_bn: 'দুর্নীতি দমন', name_en: 'Anti-Corruption Helpline', number: '106', category: 'Govt.' },
  { id: 7, icon: 'assets/emergency.png', name_bn: 'বিদ্যুৎ বিপর্যয়', name_en: 'Electricity Helpline', number: '16216', category: 'Electricity' },
  { id: 8, icon: 'assets/brac.png', name_bn: 'ব্র্যাক', name_en: 'Brac Helpline', number: '16445', category: 'NGO' },
  { id: 9, icon: 'assets/Bangladesh-Railway.png', name_bn: 'বাংলাদেশ রেলওয়ে', name_en: 'Bangladesh Railway Helpline', number: '163', category: 'Travel' }
];

// ===== State =====
let coins = 100;
let copies = 0;
let likes = 0;

// ===== DOM =====
const cardContainer = document.getElementById('cardContainer');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const likeCountEl = document.getElementById('likeCount');
const historyList = document.getElementById('historyList');
const historyEmpty = document.getElementById('historyEmpty');
const clearHistoryBtn = document.getElementById('clearHistory');

