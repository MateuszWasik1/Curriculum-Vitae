let btnPopup = document.querySelector(".fas");
let popup = document.querySelector(".popup");
let form = document.querySelector(".form")
btnPopup.addEventListener("click", ()=>popup.classList.add("hidden"));
let userName = document.querySelector(".userName")
let password = document.querySelector(".password")
let password2 = document.querySelector(".password2")
let email = document.querySelector(".email")
let emailValue = document.querySelector(".email"); //bardzo ważne bo na jego podstawie tworzyć feedback z emailem i kontem!
let reset = document.querySelector(".reset")
let singIn = document.querySelector(".singIn")
let pUserName = document.querySelector("#pUserName");
let pPassword = document.querySelector("#pPassword");
let pPassword2 = document.querySelector("#pPassword2");
let emailError = document.querySelector("#emailError");
let a = document.querySelector("form a");
let nav = document.querySelector("nav")
let navBtn = document.querySelectorAll("nav button");
let divh1 = document.querySelector("#h1");
let profileDiv = document.querySelector(".profileDiv");
let changelog = document.querySelector(".changelog");
let changelogBtn = document.querySelector(".changelogButton");
let todoListBtn = document.querySelector(".todoListBtn");
let todoList = document.querySelector(".todoList");
let profileBtn = document.querySelector(".aboutMe");
let aboutMePage = document.querySelector(".aboutMePage")
let somethingAboutMe = document.querySelector(".somethingAboutMe")
let navigatorMenuButton = document.querySelector(".navigatorMenuButton")
let weather = document.querySelector(".weatherBtn")
let weatherApp = document.querySelector(".weatherApp")
let searchBtn = document.querySelector(".searchBtn")
let search = document.querySelector(".search")
let searchInput = document.querySelector(".searchInput")
let searchUl = document.querySelector("#searchUl");
let insideSearchBtn = document.querySelector("#insideSearchBtn");
let searchLi = [...document.querySelectorAll("#searchUl li")];
let emailRegexp = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-]+)(\.[a-zA-Z0-9_-]+)*(\.[a-zA-Z]{2,4})$/i;
let budgetAppBtn = document.querySelector(".budgetAppBtn");
let budgetApp = document.querySelector(".budgetApp");


let userNameError = () =>{ //sprawdza czy nazwa ma więcej niż 2 znaki
    pUserName.classList.remove("hidden")
    pUserName.style.letterSpacing = "0px"
    pUserName.innerHTML = "Nazwa użytkownika jest krótsza niż 3 znaki"
    
}
let passwordError1 = () =>{ // sprawdza czy 1 hasło ma 8 znaków
    pPassword.classList.remove("hidden");
    pPassword.style.letterSpacing = "0px";
    pPassword.innerHTML = "Hasło nie ma 8 znaków";
}
let passwordError2 = () =>{ // sprawdza czy 2 hasło ma 8 znaków
    pPassword2.classList.remove("hidden");
    pPassword2.style.letterSpacing = "0px";
    pPassword2.innerHTML = "Hasło nie ma 8 znaków";
}
let passwordNotSameError = () =>{ // dodaje błąd że hasła !=
    pPassword2.classList.remove("hidden");
    pPassword2.style.letterSpacing = "0px";
    pPassword2.innerHTML = "Hasła różnią się ";
}
let resetF = () =>{ //czyści pola z błędami
        pUserName.classList.add("hidden")
        pUserName.textContent = "."
        pPassword.classList.add("hidden")
        pPassword.textContent = "."
        pPassword2.classList.add("hidden")
        pPassword2.textContent = "."
        emailError.classList.add("hidden")
        emailError.textContent = "."
}
let menu = (event)=>{ //
    form.classList.add("hidden")
    nav.classList.remove("hidden")
    navigatorMenuButton.classList.add("hidden");
}
let emailErrorF = (event)=>{
    emailError.classList.remove("hidden");
    emailError.style.letterSpacing = "0px";
    emailError.innerHTML = "Niepoprawny email";
}
let allValue = (event) =>{ //sprawdza warunki (jak jakiś nie spełniony wywołuje odpowiednią funkcje)
    event.preventDefault()
    if(userName.value.length < 3)
    {
        userNameError()
    }
    if(password.value.length < 8 && password2.value.length < 8)
    {
        passwordError1()
        passwordError2()
    }
    else if(password.value.length < 8 )
    {
        passwordError1()
    }
    else if(password2.value.length < 8 )
    {
        passwordError2()
    }
    if(email.value.match(emailRegexp) == null)
    {
        emailErrorF();
    }
    if(userName.value.length >= 3 && password.value.length >= 8 && password2.value.length >= 8 && password2.value == password.value && email.value.match(emailRegexp) !== null)
    {
        pUserName.classList.add("hidden")
        pUserName.textContent = "."
        pPassword.classList.add("hidden")
        pPassword.textContent = "."
        pPassword2.classList.add("hidden")
        pPassword2.textContent = "."
        emailError.classList.add("hidden")
        emailError.textContent = "."
        emailValue = email.value
        console.log(emailValue);
        // return emailValue;
        menu();
    }
    if(userName.value.length >= 3)
    {
        pUserName.classList.add("hidden")
        pUserName.textContent = "."
    }
    if(password.value.length >= 8)
    {
        pPassword.classList.add("hidden")
        pPassword.textContent = "."
    }
    if(password2.value.length >= 8)
    {
        pPassword2.classList.add("hidden")
        pPassword2.textContent = "."
    }
    if(password2.value != password.value)
    {
        passwordNotSameError()
    }
    else if(password2.value != password.value)
    {
        pPassword2.textContent = "."
        pPassword2.classList.add("hidden")
    }
    if(email.value.match(emailRegexp) !== null)
    {
        emailError.classList.add("hidden")
        emailError.textContent = "."
    }
    event.stopPropagation();
}
singIn.addEventListener("click", allValue) //eventListener na przycisk zarejestruj się
let showForm = () =>{ //funkcja odpowiedzialna za pojawienie się formularz
    form.classList.remove("hidden");
    if(popup.classList.contains("hidden")){changelogBtn.classList.add("hidden")}
}
btnPopup.addEventListener("click", showForm) //zamknięcie popupa sprawia że pojawi się formularz
reset.addEventListener("click", resetF)// kliknięcie resetu czyści pola błędów
a.addEventListener("click", menu) //ustawia listener na kontynuuj bez logowania 


//rgb(182, 65, 255) fiolet
//rgb(65, 182, 255) niebieski
let R = 65; //zmienne przydatne tylko do zmiany tła {
let G = 182;
let B = 255;
let aColor = 128;
let flag = true;
//   }
let colorChange = () => //zmiana koloru tła strony 
{
    if(flag) //jeśli flaga jest true to idź w strone fioletu
    {
        document.body.style.backgroundColor = `rgb(${R},${G},${B})` 
        a.style.color = `rgb(${aColor},${aColor},${aColor})`
        navBtn.forEach((btn, i) =>{btn.style.backgroundColor = `rgb(${R},${G},${B})`});
        changelogBtn.style.backgroundColor = `rgb(${R},${G},${B})`;
        // navigatorMenuButton.style.backgroundColor = `rgb(${R},${G},${B})`;
        aColor++;
        R++
        G--
    }
    else if(!flag) //jeśli jest false to idź w stronę błękitu
    {
        document.body.style.backgroundColor = `rgb(${R},${G},${B})`
        a.style.color = `rgb(${aColor},${aColor},${aColor})`
        navBtn.forEach((btn, i) =>{btn.style.backgroundColor = `rgb(${R},${G},${B})`});
        changelogBtn.style.backgroundColor = `rgb(${R},${G},${B})`;
        // navigatorMenuButton.style.backgroundColor = `rgb(${R},${G},${B})`;
        aColor--;
        R--;
        G++
    }
    if(R == 182 && G == 65 && B == 255) //jeśli fiolet to zmień na false
    {
        flag = false
    }
    else if(R == 65 && G == 182 && B == 255) //jeśli błękit to na true
    {
        flag = true
    }
}
setInterval(colorChange, 200); //wywołuje funkcje colorChange co 0.2 sek
let profile = () =>
    {
        if(!nav.classList.contains("hidden")){
        profileDiv.classList.remove("hidden");
        divh1.textContent = `Profil: ${userName.value}`;
        }
        else{console.log("nie działa");}
    }
singIn.addEventListener("click", profile)
changelogBtn.addEventListener("click", ()=>{ //funkcja changeloga
    if(changelog.classList.contains("hidden")){
    changelog.classList.remove("hidden")
    popup.classList.add("hidden");
    changelog.style.display = "block";
    changelog.style.marginBottom = "-450px";
    document.body.style.overflowY = "visible";}
    else
    {
        changelog.classList.add("hidden")
        popup.classList.remove("hidden");
        changelog.style.display = "none";
        changelog.style.marginBottom = "none";
    }
})
let todoL = ()=>{ //funkcja todoListy
    nav.classList.add("hidden");
    todoList.classList.remove("hidden");
    navigatorMenuButton.classList.remove("hidden");
    document.body.style.overflowY = "visible";
}
todoListBtn.addEventListener("click", todoL);

let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let timer = document.querySelector(".timer");
let time = document.querySelector(".time");
let sms = document.querySelector(".ms");
let ss = document.querySelector(".s");
let sm = document.querySelector(".m");
let sh = document.querySelector(".h");
let timerF = () =>{
    // if(ms >= 1){sms.textContent = `${ms} `}
    // else if(s >= 1){if(s<10){ss.textContent = `0${s}.`}else{textContent = `${s}.`}}
    // else if(m >= 1){if(m<10){sm.textContent = `0${m}:`}else{textContent = `${m}.`}}
    // else if(h >= 1){if(m<10){sh.textContent = `0${h}:`}else{textContent = `${h}:`}}
    ms++
    if(ms === 100){
        ms = 0
        s++
        if(s == 60){
            s = 0;
            m++}
            if(m == 60){
            m = 0;
            h++}
    }
    // if(ms >=1 ){`${time.textContent = ms}`}
    // if(s >=1){`${time.textContent=s}.${time.textContent = ms}`}
    // if (m >= 1){`${time.textContent=m}.${time.textContent=s}.${time.textContent = ms}`}
    // if(h >= 1){`${time.textContent=h}.${time.textContent=m}.${time.textContent=s}.${time.textContent = ms}`}
    // console.log(`${time.textContent=h}.${time.textContent=m}.${time.textContent=s}.${time.textContent = ms}`);
    if(ms >= 1){sms.textContent = `${ms} `}
    else if(s >= 1){if(s<10){ss.textContent = `0${s}.`}else{ss.textContent = `${s}.`}}
    else if(m >= 1){if(m<10){sm.textContent = `0${m}:`}else{sm.textContent = `${m}.`}}
    else if(h >= 1){if(m<10){sh.textContent = `0${h}:`}else{sh.textContent = `${h}:`}}
}
setInterval(timerF, 1)
//todoList
let $input;
let $alertInfo;
let $addBtn;
let $ulList;
let $newTask;
let $toolsPanel;
let $completeBtn;
let $editBtn;
let $deleteBtn;
let $popup;
let $popupInfo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $editetTodo;
let $idNumber = 0;
let $allTask;
let main = () =>
{
    prepareDOMElements();
    prepareDOMEvents ();
}
let addNewTask = () =>
{
    if($input.value !== '')
    {
        $idNumber++;
        $newTask = document.createElement("li");
        $newTask.innerText = $input.value
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask);
        $input.value = '';
        $alertInfo.textContent = ""
        createToolsArea();
    }
    else
    {
        $alertInfo.textContent = "Wpisz treść zadania";
        $alertInfo.classList.remove("hidden");
    }
}
let createToolsArea = () =>
{
    $toolsPanel = document.createElement("div")
    $toolsPanel.classList.add("tools");
    $newTask.appendChild($toolsPanel);

    $completeBtn = document.createElement("button")
    $completeBtn.classList.add("complete")
    $completeBtn.innerHTML = `<i class="fas fa-check navA"></i>`;
    $toolsPanel.appendChild($completeBtn);

    $editBtn = document.createElement("button")
    $editBtn.classList.add("editList")
    $editBtn.innerHTML = `EDIT`;
    $toolsPanel.appendChild($editBtn);

    $deleteBtn = document.createElement("button")
    $deleteBtn.classList.add("delete")
    $deleteBtn.innerHTML = `<i class="fas fa-times navA"></i>`;
    $toolsPanel.appendChild($deleteBtn);
}
let prepareDOMElements = () =>
{
    $input = document.querySelector(".header input");
    $alertInfo = document.querySelector(".todoBody p");
    $addBtn = document.querySelector(".header button");
    $ulList = document.querySelector(".todoBody ul");
    $popup = document.querySelector('.edit');
    $popupInfo = document.querySelector('.editInfo');
    $popupInput = document.querySelector('.editInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTask = $ulList.getElementsByTagName('li');
}
let prepareDOMEvents = () =>
{
    $addBtn.addEventListener("click", addNewTask)
    $ulList.addEventListener("click", checkClick)
    $closeTodoBtn.addEventListener("click", closePopup);
    $addPopupBtn.addEventListener("click", changeTodo);
    $input.addEventListener("keyup", enterCheck)
}
let checkClick = (event) =>
{
    if(event.target.closest("button").classList.contains('complete'))
    {
        event.target.closest("li").classList.toggle('completed');
        event.target.closest("button").classList.toggle('completed');
    }
    else if(event.target.closest("button").className ==='editList')
    {
        editTask(event)
    }
    else if (event.target.closest("button").className === 'delete')
    {
        deleteTask(event);
    }
}
let editTask = (event) => 
{
    let oldTodo = event.target.closest('li').id;
    $editetTodo = document.getElementById(oldTodo);
    $popupInput.value = $editetTodo.firstChild.textContent;
    $popup.style.display = "flex";
}
let changeTodo = (e) =>
{
    if($popupInput.value !== '')
    {
        $editetTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = "none";
        $popupInfo.innerHTML = '';
    }
    else
    {
        $popupInfo.innerHTML = "Musisz podać jakąś treść!";
    };
}
let closePopup = () =>
{
    $popup.style.display = "none";
    $popupInfo.innerHTML = '';
}
let deleteTask = (e) =>
{
    let deleteTodo = e.target.closest('li');
    deleteTodo.remove();
    if($allTask.length === 0)
    {
        $alertInfo.innerHTML = 'Brak zadań na liście';
    }
}
let enterCheck = () =>
{
    if(event.keyCode === 13)
    {
        addNewTask()
    }
}
document.addEventListener('DOMContentLoaded', main);
//Koniec to do listy
//funckja i nasłuchiwanie jej odsyłające do strony o mnie 
let aboutMe = ()=>{
    nav.classList.add("hidden");
    aboutMePage.classList.remove("hidden");
    aboutMePage.style.display = "block";
    navigatorMenuButton.classList.remove("hidden");
    aboutMePage.style.marginBottom = "-350px"
    document.body.style.overflowY = "visible";
    form.style.height = "400px";
}
profileBtn.addEventListener("click", aboutMe)
//nasłuchiwanie na przycisk który z projektów odsyła nas do menu
navigatorMenuButton.addEventListener("click",()=>{
    todoList.classList.add("hidden");
    aboutMePage.classList.add("hidden");
    aboutMePage.style.display = "none";
    navigatorMenuButton.classList.add("hidden");
    nav.classList.remove("hidden");
    weatherApp.classList.add("hidden");
    search.classList.add("hidden")
    budgetApp.classList.add("hidden");
    nav.classList.remove("hidden")
    navigatorMenuButton.classList.add("hidden");
    document.body.style.overflow = "hidden";
    form.style.height = "100px";
})

//weather app
let weatherBtn = document.querySelector(".weatherButton")
let weatherInput = document.querySelector(".weatherInput")

let cityName = document.querySelector(".city-name");
let warning = document.querySelector(".warning");
let photo= document.querySelector(".photo");

let weatherShow = document.querySelector(".weather");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");

let apiLink =  'https://api.openweathermap.org/data/2.5/weather?q=';
let apiKey =  '&APPID=3ca13cd24667e4701bd74e2dea8678cb';
let units = '&units=metric';
let city;
let url;
let weatherAPI = () =>{
    city = (!weatherInput.value)?"kraków":weatherInput.value;
    url = apiLink + city + apiKey + units;
    axios.get(url)
    .then(res => {
        let temp = res.data.main.temp;
        let hum =  res.data.main.humidity;
        let status = Object.assign({}, ...res.data.weather)


        cityName.textContent = res.data.name;
        weatherShow.textContent = status.main;
        temperature.textContent = Math.ceil(temp) + '°C';
        humidity.textContent = hum + '%' ;

        if(status.id >= 200 && status.id < 300 ){photo.setAttribute("src", "obrazkiWA/thunderstorm.jpg")}
        else if(status.id >=300 && status.id < 400){photo.setAttribute("src", "obrazkiWA/drizzle.png")}
        else if(status.id >=500 && status.id < 600){photo.setAttribute("src", "obrazkiWA/rain.jpg")}
        else if(status.id >=600 && status.id < 700){photo.setAttribute("src", "obrazkiWA/snow.png")}
        else if(status.id >=700 && status.id < 800){photo.setAttribute("src", "obrazkiWA/fog.png")}
        else if(status.id == 800 ){photo.setAttribute("src", "../obrazkiWA/sun.jpg")}
        else if(status.id >=801 && status.id < 900){photo.setAttribute("src", "obrazkiWA/cloud.png")}
        else{photo.setAttribute("src", "obrazkiWA/unknown.jpg")}
        warning.textContent =""
        weatherInput.value = ""
        
    })
    .catch(() =>{ warning.textContent = "Podaj poprawną nazwę miasta"
    photo.setAttribute("src", "obrazkiWA/unknown.png");
    cityName.textContent = "Nie znane";
})}
    let weatherCheck = () =>{if(event.keyCode === 13){weatherAPI()}}
    weatherInput.addEventListener("keyup", weatherCheck)
    weatherAPI()
    weatherBtn.addEventListener("click", weatherAPI)
    //pojawienie się weatherapp i zniknięcie innych rzeczy
let weatherAppFunction = () =>{
    nav.classList.add("hidden");
    weatherApp.classList.remove("hidden")
    navigatorMenuButton.classList.remove("hidden");
}
weather.addEventListener("click", weatherAppFunction)
//wyszukiwarka rzeczy
// let searchBtn = document.querySelector(".searchBtn")
// let search = document.querySelector(".search")
// let searchInput = document.querySelector(".searchInput")
// let searchUl = document.querySelector("#searchUl") 
//let insideSearchBtn = document.querySelector("#insideSearchBtn");
//zmienne które sa na górze ale dałem tu by było łatwiej mi je czytać 

let searchInputFunction = () =>{
    let searchRegExp = /[a-z]/i
    for(let i = 0; i < searchLi.length; i++){
    if(searchLi[i].textContent.toLowerCase().search(searchInput.value.toLowerCase()) !== -1)
    {
        searchLi[i].style.display ="block"
    }
    else
    {
        searchLi[i].style.display ="none"
    }}

}
searchInput.addEventListener("keyup",searchInputFunction)
let addSearchFunction = () =>{
    let searchError = document.querySelector(".searchError")
    if(searchInput.value !== ""){
    let newLi = document.createElement("li")
    searchUl.appendChild(newLi)
    newLi.textContent = searchInput.value
    }
    else
    {
        searchError.textContent = "Pole musi zawierać jakiś znak"
        searchError.classList.remove("hidden");
    }
}
insideSearchBtn.addEventListener("click", addSearchFunction)
let showSearch = () =>{
    search.classList.remove("hidden")
    nav.classList.add("hidden")
    navigatorMenuButton.classList.remove("hidden");
    navigatorMenuButton.style.zIndex = "2";
    document.body.style.overflowY = "visible";

}
searchBtn.addEventListener("click", showSearch)
let budgetAppF = () =>{
    budgetApp.classList.remove("hidden");
    nav.classList.add("hidden")
    navigatorMenuButton.classList.remove("hidden");
    if(budgetApp.classList.contains("hidden"))
    {
        budgetApp.style.marginTop = "none"
    }
    else
    {
        budgetApp.style.marginTop = "-450px"
    }
}

budgetAppBtn.addEventListener("click", budgetAppF)



