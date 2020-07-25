export default function sidebar() {
  const sidebar = document.querySelector('.sidebar');
  openSidebar();
  closeSidebar();

  function openSidebar() {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
      sidebar.classList.remove('hidden');
    });
  }

  function closeSidebar() {
    const closeBtn = sidebar.querySelector('#sidebar-close');
    closeBtn.addEventListener('click', () => {
      sidebar.classList.add('hidden');
    });
  }
}
