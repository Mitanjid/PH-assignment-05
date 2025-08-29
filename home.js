
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



// ===== Render Cards =====
function renderCards() {
  services.forEach(s => {
    const card = document.createElement('article');
    card.className = [
      'bg-white rounded-2xl shadow p-4',
      'border border-slate-100',
      'flex flex-col'
    ].join(' ');

    card.innerHTML = `
      <!-- header -->
      <div class="flex items-start justify-between mb-3">
        <div class="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center">
          <img src="${s.icon}" alt="${s.name_en}" class="w-7 h-7 object-contain" />
        </div>
        <button class="heartBtn text-slate-400 hover:text-rose-500" title="Add Heart">
          <i class="fa-regular fa-heart text-lg"></i>
        </button>
      </div>

      <!-- titles -->
      <h3 class="text-xl font-semibold">${s.name_en}</h3>
      <p class="text-slate-500 -mt-1 mb-2">${s.name_bn}</p>

      <!-- number -->
      <div class="text-3xl font-extrabold mb-2">${s.number}</div>

      <!-- badge -->
      <div class="mb-4">
        <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm">${s.category}</span>
      </div>

      <!-- buttons -->
      <div class="mt-auto flex gap-3">
        <button class="copyBtn flex-1 border rounded-md py-2 text-sm flex items-center justify-center gap-2 hover:bg-slate-50">
          <i class="fa-regular fa-copy"></i> Copy
        </button>
        <button class="callBtn flex-1 rounded-md py-2 text-sm flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#0F7A38] text-white">
          <i class="fa-solid fa-phone"></i> Call
        </button>
      </div>
    `;

    // wire events
    const heartBtn = card.querySelector('.heartBtn i');
    const copyBtn  = card.querySelector('.copyBtn');
    const callBtn  = card.querySelector('.callBtn');

    heartBtn.addEventListener('click', () => handleHeartClick(heartBtn));
    copyBtn.addEventListener('click', () => handleCopy(s.number));
    callBtn.addEventListener('click', () => handleCall(s.name_en, s.number));

    cardContainer.appendChild(card);
  });
}
// Call the function to render all service cards on page load

renderCards();

// ===== Helpers =====
function updateNavbar() {
  coinCountEl.textContent = coins;
  copyCountEl.textContent = copies;
  likeCountEl.textContent = likes;
}
// Call the function to update the navbar with initial values
updateNavbar();


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



// ===== Clear history =====
clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
  historyEmpty.classList.remove('hidden');
});






