
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

// ===== Helpers =====
function updateNavbar() {
  coinCountEl.textContent = coins;
  copyCountEl.textContent = copies;
  likeCountEl.textContent = likes;
}

// local-time

function nowLocalString() {


  return new Date().toLocaleString();
}

// new history 
function addHistoryItem(name, number, time) {
  historyEmpty.classList.add('hidden');
  const li = document.createElement('li');
  li.className = 'flex items-start justify-between bg-slate-50 rounded-xl p-3';
  li.innerHTML = `
    <div>
      <div class="font-semibold">${name}</div>
      <div class="text-xs text-slate-500">${number}</div>
    </div>
    <div class="text-xs text-slate-500">${time}</div>
  `;
  historyList.prepend(li);
}

// Copy to clipboard
function handleCopy(number) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(number).then(() => {
      copies++;
      updateNavbar();
      alert(`Copied phone number: ${number}`);
    }).catch(() => fallbackCopy(number));
  } else {
    fallbackCopy(number);
  }
}

// Fallback copy method
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  copies++;
  updateNavbar();
  alert(`Copied phone number: ${text}`);
}
// Deduct coins and add history
function handleCall(name, number) {
  if (coins < 20) {
    alert('Not enough coins to make a call. Each call costs 20 coins.');
    return;
  }
  coins -= 20;
  updateNavbar();
  alert(`Calling ${name} (${number})...`);
  addHistoryItem(name, number, nowLocalString());
}
// Heart button click
function handleHeartClick(iconEl) {

  likes++;
  updateNavbar();
  // little feedback animation + toggle fill
  iconEl.classList.toggle('fa-regular');
  iconEl.classList.toggle('fa-solid');
  iconEl.classList.toggle('text-rose-500');
  iconEl.animate([{transform:'scale(1)'},{transform:'scale(1.2)'},{transform:'scale(1)'}],{duration:200});
}

