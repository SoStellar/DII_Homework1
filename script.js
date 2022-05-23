var singleStudentResult = document.getElementById('single_student_result')
var listStudentResult = document.getElementById('output')
function addStudentData(student) {
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute("src", student.image)
    profileElem.classList.add('img-thumbnails')
    profileElem.style.width = "7rem"
}
function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surname}`
    row.appendChild(cell)
    cell = document.createElement('td')
    cellbeforeImg= document.createElement('div')
    cellbeforeImg.classList.add('img-fluid')
    let img = document.createElement('img')
    img.setAttribute('src',student.image)
    img.classList.add('img-thumbnails')
    img.style.width = "7rem"
    cellbeforeImg.appendChild(img)
    cell.appendChild(cellbeforeImg)
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.description
    row.appendChild(cell)
    row.addEventListener('click',function(){
        showStudentBlock(student)
    })
    row.appendChild(cell)
    tableBody.appendChild(row)
}
function addStudentList(studentList){
    let counter = 1
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = ''
    for(student of studentList){
        addStudentToTable(counter++,student)
    }
}
function showAllStudents(){
    fetch('https://dv-student-backend-2019.appspot.com/students')
    .then((response)=>{
        return response.json()
    }).then(data =>{
        addStudentList(data)
    })
}
function showStudentBlock(student){
    singleStudentResult.style.display = 'block'
    addStudentData(student)
}
function showAllStudentBlock(student){
    listStudentResult.style.display = 'block'
    showAllStudents()
}
function onLoad(){
    showAllStudentBlock()
}