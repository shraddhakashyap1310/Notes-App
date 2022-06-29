
let addBtn=document.getElementById("add-btn");
let yourNotes=document.getElementById("your-notes");
let noteText=document.getElementById("note-text");
let color=document.getElementById("color");
let font=document.getElementById("font");

color.addEventListener('input',function(){
    noteText.style.color=color.value;
})
font.addEventListener('input',function(){
    noteText.style.fontSize=`${font.value}px`;
})

addBtn.addEventListener('click',function(){
    let noteTextValue=noteText.value;
    console.log(noteText)
    let notes=document.createElement("div");
    console.log(notes)
    notes.classList.add("note");
    notes.innerHTML=`<h3>Notes</h3>
    <p style="color:${color.value};font-size:${font.value}px; margin:2vh 0px;">${noteTextValue}</p>
    <button id="dlt-btn" onclick="deleteNote(this)">Delete Notes</button>`;
    yourNotes.appendChild(notes);
    noteText.value=" ";
    if(yourNotes.children[0].className=='empty'){
        yourNotes.children[0].remove();
    }
})

function deleteNote(currElement){
    currElement.parentElement.remove();

    if(yourNotes.children.length<1){
        let empty=document.createElement('div');
        empty.className='empty';
        empty.innerHTML=`<h2>Nothing is here Add Notes</h2>`;
        yourNotes.appendChild(empty);
    }
}

let search=document.getElementById('search-inp');
search.addEventListener('input',function(){
    let searchInput=search.value.toLowerCase();
    let notes=document.getElementsByClassName('note');
    for(let i=0;i<notes.length;i++){
        let content=notes[i].querySelector('p').innerText;
        if(content.includes(searchInput.toLowerCase())){
            notes[i].style.display='block';
        }
        else{
            notes[i].style.display='none';
        }
    }
})
