document.getElementById("darkButton").addEventListener('click', function(){
    var bodyDarkMode = document.getElementById("mode");
    var darkButtonChange = document.querySelector('.darkButton');
    var lineColor = document.getElementById("lineColor");
    var fontColor = document.querySelector('.fontColor');
    var cardColor = document.querySelector('.card');
    var decoration = document.querySelector('.decoration');
    var textCustom = document.querySelector('.textCustom');
    var auxText = document.querySelector('.auxText');
    

    if (bodyDarkMode.style.background ==  "rgb(18, 24, 38)"){
        console.log('white mode');
        bodyDarkMode.classList.toggle('active');
        bodyDarkMode.removeAttribute('style');

        darkButtonChange.classList.toggle('active');
        darkButtonChange.removeAttribute('style');
        
        lineColor.classList.toggle('active');
        lineColor.removeAttribute('style');

        fontColor.classList.toggle('active');
        fontColor.removeAttribute('style');

        cardColor.classList.toggle('active');
        cardColor.removeAttribute('style');

        decoration.classList.toggle('active');
        decoration.removeAttribute('style');

        textCustom.classList.toggle('active');
        textCustom.removeAttribute('style');

        auxText.classList.toggle('active');
        auxText.removeAttribute('style');

        document.getElementById('darkButton').innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4V4Z" fill="#4D5562"/>
        </svg>`;
    }else{
        console.log('dark mode');
        bodyDarkMode.style.background = "#121826";
        darkButtonChange.style.background = "#4D5562";
        darkButtonChange.style.border = "1px solid #626567cc";
        cardColor.style.background = "#212936";
        decoration.style.border = "1px dashed #4D5562";
        lineColor.style.borderBottom = "1px solid rgb(47 53 62)";
        fontColor.style.fill = "#FFFFFF";
        textCustom.style.color = "#F9FAFBCC";
        auxText.style.color = "#F9FAFBCC";

        document.getElementById('darkButton').innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="#F9FAFB" fill-opacity="0.8"/>
        <path d="M12 5V3" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M12 21V19" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M16.95 7.04996L18.3643 5.63574" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M5.63608 18.3644L7.05029 16.9502" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M19 12L21 12" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M3 12L5 12" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M16.95 16.95L18.3643 18.3643" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        <path d="M5.63608 5.63559L7.05029 7.0498" stroke="#F9FAFB" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"/>
        </svg>`;
    };
});

const fileInput = document.getElementById('inputStyle');
const imgElement = document.getElementById('imageUploaded');
const lbl = document.querySelector('.lbl');
const downloadImage = document.querySelector('.downloadImage');

    fileInput.onchange = function() {
      const file = fileInput.files[0];
      const reader = new FileReader();
    console.log("loading image");
      reader.onload = function() {
          console.log(imgElement.src);
        imgElement.src = reader.result;
      };
    
      reader.readAsDataURL(file);
      imgElement.style.width = "580px";
      imgElement.style.height = "330px";
      imgElement.style.borderRadius = "2%";
      lbl.style.display = "none";
      document.getElementById('mediaButtons').style.display = 'block';
    };

    downloadImage.addEventListener('click', function(){
        
        var imgElementN = document.getElementById('imageUploaded');

        const linkElement = document.createElement('a');
        const imageUrl = imgElementN.src;
        const imageFilename = 'imageDownloadedJEFFC.jpeg';

        linkElement.href = imageUrl;

        linkElement.download = imageFilename;
        linkElement.style.display = 'none';
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);
    });