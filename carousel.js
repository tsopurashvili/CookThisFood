var sliderData = [
    {
        url: "https://www.youtube.com/cookthisfood",
        img: "https://s3.eu-west-2.amazonaws.com/media.nigelwright.com/news/food.png",
        title: "Title 1",
    },
    {
        url: "https://www.youtube.com/cookthisfood",
        img: "https://saffronhall.com/wp-content/uploads/2019/07/Bowl-food-main-800x400.jpg",
        title: "Title 2",
    },
    {
        url: "https://www.youtube.com/cookthisfood",
        img: "https://static.vinepair.com/wp-content/uploads/2017/01/beersteak-internal.jpg",
        title: "Title 3",
    },
    {
        url: "https://www.youtube.com/cookthisfood",
        img: "https://saffronhall.com/wp-content/uploads/2019/07/Bedouin-main-800x400.jpg",
        title: "Title 4",
    },
];

var slider = document.getElementById('slider');
var right = document.getElementById('right');
var left = document.getElementById('left');
var curentIndex = 0;

function setSlider(index) {
    let curentSlide = sliderData[index];

    let aElement = document.createElement('a');
    aElement.href = curentSlide.url;

    let imgElement = document.createElement('img');
    imgElement.src = curentSlide.img;

    aElement.appendChild(imgElement);

    console.log(aElement);
    slider.innerHTML = '';

    slider.appendChild(aElement);
}

setSlider(curentIndex);

right.addEventListener('click', function(){
    console.log(curentIndex);
    if(curentIndex <= sliderData.length -1){
        curentIndex++;
        setSlider(curentIndex);
    }
});

left.addEventListener('click', function(){
    console.log(curentIndex);
    if(curentIndex >= 0){
        curentIndex--;
        setSlider(curentIndex);
    }
});