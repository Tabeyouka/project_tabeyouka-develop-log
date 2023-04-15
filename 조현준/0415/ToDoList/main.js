// const inputText = document.querySelector("#add-text");
// const upList = document.querySelector('.list-row');


// const onClickAdd = () => {
//     alert(inputText.value);
//     // 입력값 저장
//     const inputValue = inputText.value;
//     // createList(inputValue, upList);

//     // span 생성
//     const newSpan = document.createElement('span');
//     // span에 입력값 저장
//     newSpan.innerText = inputValue;
//     // li 생성
//     const newList = document.createElement('li');
//     // li에 span 추가
//     newList.appendChild(newSpan);
//     // ul에 li 추가
//     upList.appendChild(newList);
    
//     // 완료버튼
//     const completeButton = document.createElement('button');
//     completeButton.innerText = '완료';

//     completeButton.addEventListener('click', () => {
//         // 완료리스트 추가할 요소
//         const addTarget = completeButton.parentNode; // li
        
//         // addTarget.removeChild();
//         const backButton = document.createElement('button');
//         backButton.innerText = '되돌리기';
//         // 버튼삭제 함수
//         delButton(completeButton, upList);
//     })

    
//     // 삭제버튼
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = '삭제';

//     // 버튼삭제 함수
//     delButton(deleteButton, upList);
    
    
//     newList.appendChild(completeButton);
//     newList.appendChild(deleteButton);
    

//     inputText.value = '';
// }



// document
// .querySelector("#add-button")
// .addEventListener('click', () => onClickAdd())


// const delButton = function(button, parent) {
//     button.addEventListener('click', () => {
//         // 눌린 삭제버튼의 부모를 리스트에서 삭제
//         const deleteTarget = button.parentNode;
//         parent.removeChild(deleteTarget);
//     })
// }

// const createList = function(text, position) {
    
//     // span 생성
//     const newSpan = document.createElement('span');
//     // span에 입력값 저장
//     newSpan.innerText = text;
//     // li 생성
//     const newList = document.createElement('li');
//     // li에 span 추가
//     newList.appendChild(newSpan);
//     // ul에 li 추가
//     position.appendChild(newList);

    
// }


const addText = document.getElementById('add-text');
const incompleteArea = document.querySelector('.incomplete-area ul');
const completeArea = document.querySelector('.complete-area ul');

// 성공버튼 클릭시 
function onClickComplete(event) {
    // completeButton의 부모를 가져옴(li)
    const li = event.target.parentNode;
    // li의 span 선택
    const span = li.querySelector('span');
    // 새로운 li 태그 생성
    const newLi = document.createElement('li');
    newLi.className = 'mb-4';
    // 새로운 Span 생성
    const newSpan = document.createElement('span');
    newSpan.className = 'is-size-4';

    // 새 span에 완료한 span의 Text 대입
    newSpan.innerText = span.innerText;
    // 새 li에 span 추가
    newLi.appendChild(newSpan);
    // completeArea에 새 li 추가
    completeArea.appendChild(newLi);

    // 되돌리기 버튼 생성
    const backButton = document.createElement('button');
    backButton.className = 'button is-warning is-medium ml-4';
    // backButton.classList.add('is-warning');
    backButton.innerText = '되돌리기';
    newLi.appendChild(backButton);

    // 되돌리기 버튼 클릭시 
    backButton.addEventListener('click', function() {
        incompleteArea.appendChild(li);
        newLi.remove();
    });

    // 기존 li삭제
    li.remove();
}

function onClickDelete(event) {
    // completeButton의 부모를 가져옴(li)
    const li = event.target.parentNode;
    // li의 span 선택
    const span = li.querySelector('span');
    // 새로운 li 태그 생성
    const newLi = document.createElement('li');
    newLi.className = 'mb-4';
    // 새로운 Span 생성
    const newSpan = document.createElement('span');
    newSpan.className = 'is-size-4';

    // 새 span에 완료한 span의 Text 대입
    newSpan.innerText = span.innerText;
    // 새 li에 span 추가
    newLi.appendChild(newSpan);
    // completeArea에 새 li 추가
    completeArea.appendChild(newLi);

    // 되돌리기 버튼 생성
    const backButton = document.createElement('button');
    backButton.className = 'button is-warning is-medium ml-4';
    backButton.innerText = '되돌리기';
    newLi.appendChild(backButton);

    // 되돌리기 버튼 클릭시 
    backButton.addEventListener('click', function() {
        incompleteArea.appendChild(li);
        newLi.remove();
    });

    // 기존 li삭제
    li.remove();
}




function onClickAdd() {
    
    // 입력값
    const inputValue = addText.value;
    // li태그 생성
    const newLi = document.createElement('li');
    newLi.className = 'mb-4';
    // span태그 생성
    const newSpan = document.createElement('span');
    newSpan.className = `is-size-4`;
    // 성공 button 생성
    const completeButton = document.createElement('button');
    completeButton.className = 'button is-success is-medium ml-4 mr-4';
    // 제거 button 생성
    const deleteButton = document.createElement('button');
    deleteButton.className = `button is-danger is-medium`;

    // span에 입력값 대입
    newSpan.innerText = inputValue;
    // 성공버튼에 text 완료 대입
    completeButton.innerText = '완료';
    // 실패버튼에 text 실패 대입
    deleteButton.innerText = '삭제';

    // 성공버튼 클릭시 OnClickComplete 함수 호출
    completeButton.addEventListener('click', onClickComplete);
    // 성공버튼 클릭시 li 삭제
    deleteButton.addEventListener('click', onClickDelete);

    // li에 newSpan 추가
    newLi.appendChild(newSpan);
    // li에 completeButton 추가
    newLi.appendChild(completeButton);
    // li에 deleteButton 추가
    newLi.appendChild(deleteButton);
    // incompleteArea에 li추가
    incompleteArea.appendChild(newLi);
    
    // input 비우기
    addText.value = '';
}

// 추가버튼에 이벤트추가 (클릭시 onClickAdd 호출)
document.querySelector('#add-button').addEventListener('click', onClickAdd);

