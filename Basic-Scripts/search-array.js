// this js file contains list of of friend. 
// html file display if friends name listed here

const friendsList = [
  'Ankit Dobhal',
  'Adam Smith',
  'Trillochan Shrestha',
  'David Watson',
  'Remesh Tiwari',
  'Kundan Jha',
  'Bal Sharma',
  'Ben Hudson',
  'Carry Zolman',
  'Chintan Agrawal',
  'Daya Ram',
  'Eric Hudson',
  'Eakram Jha',
  'Fakir Mohomad',
  'Frank Zasirai',
  'Bob Williamstone'
]

const ul = document.querySelector('.friend-list');
const search = document.querySelector('.search-box');
const refresh = document.querySelector('.refresh');

const searchFriend = (term) => {
  // we know we have list of freiends
  let li = '';
  const doesFriendExist =
    friendsList.filter(friend => friend.toLocaleLowerCase().includes(term));
  if (term.length >= 3) {
    li = `<li> <span>${doesFriendExist}</span> </li>`;
    ul.innerHTML += li;
  }
}

// search
search.addEventListener('keyup', (e) => {
  e.preventDefault();
  let searchTerm = search.value.trim().toLowerCase();
  searchFriend(searchTerm);
})
// clear
refresh.addEventListener('click', (e) => {
  e.preventDefault();
  search.value = '';
  ul.innerHTML = '';
})