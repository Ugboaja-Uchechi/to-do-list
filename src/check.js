/* eslint-disable import/prefer-default-export */
// export default for (let i = 0; i < checkBoxes.length; i += 1) {
//   checkBoxes[i].addEventListener('change', (e) => {
//     const taskIndex = e.target.getAttribute('data-id');
//     alert(taskIndex);
//     if (checkBoxes[i].checked) {
//       labelList[i].style.textDecoration = 'line-through';
//     } else {
//       labelList[i].style.textDecoration = 'none';
//     }
//   });
// }

export function displayBox() {
  const labelList = document.querySelectorAll('.list');
  const checkBoxes = document.querySelectorAll('.check-list');
  for (let i = 0; i < checkBoxes.length; i += 1) {
    checkBoxes[i].addEventListener('change', (e) => {
      const taskIndex = e.target.getAttribute('data-id');
      alert(taskIndex);
      if (checkBoxes[i].checked) {
        labelList[i].style.textDecoration = 'line-through';
      } else {
        labelList[i].style.textDecoration = 'none';
      }
    });
  }
}
displayBox();