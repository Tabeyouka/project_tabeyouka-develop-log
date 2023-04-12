const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const h1 = document.querySelector('h1');
// h1 textAligin을 center로
h1.style.textAlign = 'center';


for (let i = 1; i < 151; i++) {
    // div요소를 하나 만든다
    const pokemon = document.createElement('div');
    // div의 classList에 'pokemon'을 추가 (css스타일을 적용하기 위함)
    pokemon.classList.add('pokemon');
    // span요소를 하나 만든다
    const label = document.createElement('span');
    // span에 text를 추가 (#${포켓몬 번호})
    label.innerText = `#${i}`;
    // img요소를 하나 만든다
    const newImg = document.createElement('img');
    // img의 주소에 주소 + n + .png를 추가해 반복시 다음 이미지를 추가
    newImg.src = `${baseUrl}${i}.png`;

    // img를 div에 추가
    pokemon.appendChild(newImg);
    // text가 추가된 label을 div에 후미에 추가
    pokemon.appendChild(label);
    // div를 section에 추가
    container.appendChild(pokemon);
}



const people = ['a', 'b', 'c', 'd']
console.log(people[0].toUpperCase());