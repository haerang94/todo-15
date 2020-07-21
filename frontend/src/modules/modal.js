export function toggleModal() {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.addEventListener('click', (e) => {
    if (
      !e.target.classList.contains('close-modal-btn') &&
      e.target.dataset.method !== 'update'
    )
      return;
    modalContainer.classList.add('hidden');
  });

  document.addEventListener('dblclick', (e) => {
    if (
      !e.target.classList.contains('todo-item') &&
      !e.target.parentNode.classList.contains('todo-item')
    )
      return;
    modalContainer.classList.remove('hidden');
  });
}

//왜 안돼
// export function toggleModal() {
//   const modal = document.querySelector('.modal');

//   // 모달 닫기
//   modal.addEventListener('click', (e) => {
//     if (
//       !e.target.classList.contains('close-modal-btn') &&
//       e.target.dataset.method !== 'update'
//     )
//       return;
//     if (e.target.classList.contains('close-modal-btn')) {
//       const textarea = e.target.previousSibling;
//     }
//     e.target.parentNode.parentNode.parentNode.classList.add('hidden');
//   });

//   // 투두리스트 수정
//   document.addEventListener('dblclick', (e) => {
//     if (
//       !e.target.classList.contains('todo-item') &&
//       !e.target.parentNode.classList.contains('todo-item')
//     )
//       return;
//     const li = e.target.closest('li');
//     modal.addEventListener('click', (e) => {
//       if (
//         !e.target.classList.contains('close-modal-btn') &&
//         e.target.dataset.method !== 'update'
//       )
//         return;
//       if (e.target.classList.contains('close-modal-btn')) {
//         const textarea = e.target.previousElementSibling;
//         console.log(textarea, li.children[1].children);
//       }
//       // e.target.parentNode.parentNode.parentNode.classList.add('hidden');
//     });
//     modal.querySelector('.modal-container').classList.remove('hidden');
//   });

//   // 컬럼 타이틀 수정

//   document.addEventListener('dblclick', (e) => {
//     if (!e.target.classList.contains('todo-container-header-title')) return;
//     modal.querySelectorAll('.modal-container')[1].classList.remove('hidden');
//   });
// }
