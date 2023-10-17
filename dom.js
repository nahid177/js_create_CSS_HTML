// start Header Tag


const headerPlacelist = document.getElementById('Headers');
headerPlacelist.style.padding = '70px'

// Create HTML navbar TAG

const navbar = document.createElement('nav');
navbar.style.display = 'flex'
navbar.style.justifyContent = 'space-between'
navbar.style.padding = '20px 70px'
navbar.style.backgroundColor = '#E6F3F3'
navbar.style.borderRadius = '60px'

//  add h1
const h1 = document.createElement('h1');
h1.innerHTML = 'CAT SHOP';
navbar.appendChild(h1);



// add div
const div = document.createElement('div');
div.style.display = 'flex';




// add h1
const h1s = document.createElement('p');
h1s.innerHTML = "Home";
div.appendChild(h1s);
navbar.appendChild(div);
h1s.style.marginRight = '100px';
h1s.style.fontSize = '20px'



// add h1

const h1s2 = document.createElement('p');
h1s2.innerHTML = "Contact";
div.appendChild(h1s2);
navbar.appendChild(div);
h1s2.style.marginRight = '100px';
h1s2.style.fontSize = '20px'


const h1s3 = document.createElement('p');
h1s3.innerHTML = "Profile";
div.appendChild(h1s3);
navbar.appendChild(div);
h1s3.style.marginRight = '700px'
h1s3.style.fontSize = '20px'

const button = document.createElement('button');
button.innerHTML = "BUTTON";
button.style.width = '90px'
button.style.height = '50px'
button.style.backgroundColor = '#5CE0E8'
button.style.borderRadius = '15px'
button.style.borderColor = '#fff'
div.appendChild(button);
navbar.appendChild(div);




headerPlacelist.appendChild(navbar);










// add div on the header

const div1 = document.createElement('div');
div1.style.display = 'flex';
div1.style.marginTop = '90px';


const imgs = document.createElement('img');
imgs.src = ('img\\cat-2083492_1280.jpg');
imgs.style.width = '800px';


div1.appendChild(imgs)

const divin = document.createElement('div');
divin.style.padding = '100px'

const h1sin = document.createElement('h4');
h1sin.innerText = 'This is Persian Cat ';
h1sin.style.fontSize = '40px'

divin.appendChild(h1sin)

const p_in = document.createElement('p')
p_in.innerHTML = 'Cats, scientifically known as Felis catus, are captivating creatures  that have been companions to humans for thousands of years. With retractable claws, keen senses, and a unique ability to communicate through vocalizations, body language, and scent marking, cats exhibit a fascinating blend of independence and sociability. They come in various breeds, each with its own distinctive characteristics, such as the luxurious fur of Persians or the striking patterns of Bengals. As obligate carnivores, their diet primarily consists of animal protein, and they are known for their grooming behavior. Cats are crepuscular, preferring the dawn and dusk for their activities. Their domestication traces back to ancient times when they played a crucial role in controlling rodents around human settlements. With an average lifespan of 12 to 15 years, cats become cherished members of households, forming strong bonds with their human caregivers and leaving an indelible mark on literature, folklore, and popular culture.'
p_in.style.fontSize = '17px'
p_in.style.color = '#00939C'
divin.appendChild(p_in);
div1.appendChild(divin);


headerPlacelist.appendChild(div1);


// add div2
const div2 = document.createElement('div');
div2.style.display = 'flex';
div2.style.marginTop = '90px';


const imgs1 = document.createElement('img');
imgs1.src = ('img\\photo-1601275226085-f446243383cc.jpg');

imgs1.style.width = '800px';






const divin1 = document.createElement('div');
divin1.style.padding = '100px'
const h1sin1 = document.createElement('h4');
h1sin1.innerText = 'This is Apollo Cat ';
h1sin1.style.fontSize = '40px'

divin1.appendChild(h1sin1)

const p_in1 = document.createElement('p')
p_in1.innerHTML = 'Cats, scientifically known as Felis catus, are captivating creatures  that have been companions to humans for thousands of years. With retractable claws, keen senses, and a unique ability to communicate through vocalizations, body language, and scent marking, cats exhibit a fascinating blend of independence and sociability. They come in various breeds, each with its own distinctive characteristics, such as the luxurious fur of Persians or the striking patterns of Bengals. As obligate carnivores, their diet primarily consists of animal protein, and they are known for their grooming behavior. Cats are crepuscular, preferring the dawn and dusk for their activities. Their domestication traces back to ancient times when they played a crucial role in controlling rodents around human settlements. With an average lifespan of 12 to 15 years, cats become cherished members of households, forming strong bonds with their human caregivers and leaving an indelible mark on literature, folklore, and popular culture.'
p_in1.style.fontSize = '17px'
p_in1.style.color = '#00939C'
divin1.appendChild(p_in1);
div2.appendChild(divin1);

div2.appendChild(imgs1)



headerPlacelist.appendChild(div2);






// Start main tag 



const mainBox = document.getElementById('main-container');
mainBox.style.padding = '70px';




const h333  = document.createElement('h4');
h333.innerHTML= 'Variant';
h333.style.textAlign = 'center';
h333.style.fontSize = '70px';
mainBox.appendChild(h333);

const secmain = document.createElement('section');
secmain.style.display = 'flex';
secmain.style.gap = '200px';


const sectioncard1 = document.createElement('section');
sectioncard1.style.fontFamily = 'Arial';
sectioncard1.style.margin = '0';
sectioncard1.style.padding = '0';
sectioncard1.style.boxSizing = 'border-box';

// create card

const cardDiv = document.createElement('div');
cardDiv.style.width = '24rem';
cardDiv.style.backgroundColor = '#f8f9fa';
cardDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figure = document.createElement('figure');

const imgcard = document.createElement('img');
imgcard.style.width = '100%';
imgcard.style.height = 'auto';
imgcard.src = 'img\\bag6-1-300x300.png'
figure.appendChild(imgcard);
cardDiv.appendChild(figure);

const card_body = document.createElement('div');
card_body.style.padding = '1.5rem';
const card_title = document.createElement('h2');
card_title.style.fontSize = '1.5rem';
card_title.style.marginBottom = '1rem';

card_title.innerText = 'Bag!';
card_body.appendChild(card_title);

const cardP = document.createElement('p');
cardP.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_body.appendChild(cardP);
const buttondiv = document.createElement('div');
buttondiv.style.display = 'flex';
buttondiv.style.justifyContent = 'flex-end';
buttondiv.style.marginTop = '1rem';
const buttoncard = document.createElement('button');
buttoncard.innerText = 'Buy Now'
buttoncard.style.padding = ' 0.5rem 1rem';
buttoncard.style.fontSize ='1rem';
buttoncard.style.cursor = 'pointer';
buttoncard.style.backgroundColor = '#007bff';
buttoncard.style.color = '#fff';
buttoncard.style.border =  'none';
buttoncard.style.borderRadius = '0.25rem'
buttondiv.appendChild(buttoncard);
card_body.appendChild(buttondiv);
cardDiv.appendChild(card_body);


sectioncard1.appendChild(cardDiv);


secmain.appendChild(sectioncard1);



















// 2 card

const sectioncard12 = document.createElement('section');
sectioncard12.style.fontFamily = 'Arial';
sectioncard12.style.margin = '0';
sectioncard12.style.padding = '0';
sectioncard12.style.boxSizing = 'border-box';


// create card

const cardDiv2 = document.createElement('div');
cardDiv2.style.width = '24rem';
cardDiv2.style.backgroundColor = '#f8f9fa';
cardDiv2.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figure2 = document.createElement('figure');

const imgcard2 = document.createElement('img');
imgcard2.style.width = '100%';
imgcard2.style.height = 'auto';
imgcard2.src = 'img\\bed-2-300x300.png'
figure2.appendChild(imgcard2);
cardDiv2.appendChild(figure2);

const card_body2 = document.createElement('div');
card_body2.style.padding = '1.5rem';
const card_title2 = document.createElement('h2');
card_title2.style.fontSize = '1.5rem';
card_title2.style.marginBottom = '1rem';

card_title2.innerText = 'Bad!';
card_body2.appendChild(card_title2);

const cardP2 = document.createElement('p');
cardP2.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_body2.appendChild(cardP2);
const buttondiv2 = document.createElement('div');
buttondiv2.style.display = 'flex';
buttondiv2.style.justifyContent = 'flex-end';
buttondiv2.style.marginTop = '1rem';
const buttoncard2 = document.createElement('button');
buttoncard2.innerText = 'Buy Now'
buttoncard2.style.padding = ' 0.5rem 1rem';
buttoncard2.style.fontSize ='1rem';
buttoncard2.style.cursor = 'pointer';
buttoncard2.style.backgroundColor = '#007bff';
buttoncard2.style.color = '#fff';
buttoncard2.style.border =  'none';
buttoncard2.style.borderRadius = '0.25rem'
buttondiv2.appendChild(buttoncard2);
card_body2.appendChild(buttondiv2);
cardDiv2.appendChild(card_body2);


sectioncard12.appendChild(cardDiv2);


secmain.appendChild(sectioncard12);
























// 3 card

const sectioncard123 = document.createElement('section');
sectioncard123.style.fontFamily = 'Arial';
sectioncard123.style.margin = '0';
sectioncard123.style.padding = '0'
sectioncard123.style.boxSizing = 'border-box';


// create card

const cardDiv23 = document.createElement('div');
cardDiv23.style.width = '24rem';
cardDiv23.style.backgroundColor = '#f8f9fa';
cardDiv23.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figure23 = document.createElement('figure');

const imgcard23 = document.createElement('img');
imgcard23.style.width = '100%';
imgcard23.style.height = 'auto';
imgcard23.src = 'img\\cat_c.jpeg'
figure23.appendChild(imgcard23);
cardDiv23.appendChild(figure23);

const card_body23 = document.createElement('div');
card_body23.style.padding = '1.5rem';
const card_title23 = document.createElement('h2');
card_title23.style.fontSize = '1.5rem';
card_title23.style.marginBottom = '1rem';

card_title23.innerText = 'Bag!';
card_body23.appendChild(card_title23);

const cardP23 = document.createElement('p');
cardP23.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_body23.appendChild(cardP23);
const buttondiv23 = document.createElement('div');
buttondiv23.style.display = 'flex';
buttondiv23.style.justifyContent = 'flex-end';
buttondiv23.style.marginTop = '1rem';
const buttoncard23 = document.createElement('button');
buttoncard23.innerText = 'Buy Now'
buttoncard23.style.padding = ' 0.5rem 1rem';
buttoncard23.style.fontSize ='1rem';
buttoncard23.style.cursor = 'pointer';
buttoncard23.style.backgroundColor = '#007bff';
buttoncard23.style.color = '#fff';
buttoncard23.style.border =  'none';
buttoncard23.style.borderRadius = '0.25rem'
buttondiv23.appendChild(buttoncard23);
card_body23.appendChild(buttondiv23);
cardDiv23.appendChild(card_body23);


sectioncard123.appendChild(cardDiv23);


secmain.appendChild(sectioncard123);





mainBox.appendChild(secmain);



const h3334  = document.createElement('h4');
h3334.innerHTML= 'Cat Food';
h3334.style.textAlign = 'center';
h3334.style.fontSize = '70px';
h3334.style.padding = '60px';
mainBox.appendChild(h3334);






// New Section

const section12s = document.createElement('section');
section12s.style.marginBottom = '90px';





 

const secmains = document.createElement('section');
secmains.style.display = 'flex';
secmains.style.gap = '200px';


const sectioncard1s = document.createElement('section');
sectioncard1s.style.fontFamily = 'Arial';
sectioncard1s.style.margin = '0';
sectioncard1s.style.padding = '0';
sectioncard1s.style.boxSizing = 'border-box';

// create card

const cardDivs = document.createElement('div');
cardDivs.style.width = '24rem';
cardDivs.style.backgroundColor = '#f8f9fa';
cardDivs.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figures = document.createElement('figure');

const imgcards = document.createElement('img');
imgcards.style.width = '100%';
imgcards.style.height = 'auto';
imgcards.src = 'img\\Nekko-Cat-Pouch-Tuna-Topping-Kanikama-in-Jelly-70g-300x300.jpg'
figures.appendChild(imgcards);
cardDivs.appendChild(figures);

const card_bodys = document.createElement('div');
card_bodys.style.padding = '1.5rem';
const card_titles = document.createElement('h2');
card_titles.style.fontSize = '1.5rem';
card_titles.style.marginBottom = '1rem';

card_titles.innerText = 'Nekko!';
card_bodys.appendChild(card_titles);

const cardPs = document.createElement('p');
cardPs.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_bodys.appendChild(cardPs);
const buttondivs = document.createElement('div');
buttondivs.style.display = 'flex';
buttondivs.style.justifyContent = 'flex-end';
buttondivs.style.marginTop = '1rem';
const buttoncards = document.createElement('button');
buttoncards.innerText = 'Buy Now'
buttoncards.style.padding = ' 0.5rem 1rem';
buttoncards.style.fontSize ='1rem';
buttoncards.style.cursor = 'pointer';
buttoncards.style.backgroundColor = '#007bff';
buttoncards.style.color = '#fff';
buttoncards.style.border =  'none';
buttoncards.style.borderRadius = '0.25rem'
buttondivs.appendChild(buttoncards);
card_bodys.appendChild(buttondivs);
cardDivs.appendChild(card_bodys);


sectioncard1s.appendChild(cardDivs);


secmains.appendChild(sectioncard1s);



















// 2 card

const sectioncard12ss = document.createElement('section');
sectioncard12ss.style.fontFamily = 'Arial';
sectioncard12ss.style.margin = '0';
sectioncard12ss.style.padding = '0';
sectioncard12ss.style.boxSizing = 'border-box';


// create card

const cardDiv2ss = document.createElement('div');
cardDiv2ss.style.width = '24rem';
cardDiv2ss.style.backgroundColor = '#f8f9fa';
cardDiv2ss.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figure2ss = document.createElement('figure');

const imgcard2ss = document.createElement('img');
imgcard2ss.style.width = '100%';
imgcard2ss.style.height = 'auto';
imgcard2ss.src = 'img\\WhatsApp-Image-2021-05-17-at-12.55.09-AM-300x300.jpeg'
figure2ss.appendChild(imgcard2ss);
cardDiv2ss.appendChild(figure2ss);

const card_body2ss = document.createElement('div');
card_body2ss.style.padding = '1.5rem';
const card_title2ss = document.createElement('h2');
card_title2ss.style.fontSize = '1.5rem';
card_title2ss.style.marginBottom = '1rem';

card_title2ss.innerText = 'Petem!';
card_body2ss.appendChild(card_title2ss);

const cardP2ss = document.createElement('p');
cardP2ss.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_body2ss.appendChild(cardP2ss);
const buttondiv2ss = document.createElement('div');
buttondiv2ss.style.display = 'flex';
buttondiv2ss.style.justifyContent = 'flex-end';
buttondiv2ss.style.marginTop = '1rem';
const buttoncard2ss = document.createElement('button');
buttoncard2ss.innerText = 'Buy Now'
buttoncard2ss.style.padding = ' 0.5rem 1rem';
buttoncard2ss.style.fontSize ='1rem';
buttoncard2ss.style.cursor = 'pointer';
buttoncard2ss.style.backgroundColor = '#007bff';
buttoncard2ss.style.color = '#fff';
buttoncard2ss.style.border =  'none';
buttoncard2ss.style.borderRadius = '0.25rem'
buttondiv2ss.appendChild(buttoncard2ss);
card_body2ss.appendChild(buttondiv2ss);
cardDiv2ss.appendChild(card_body2ss);


sectioncard12ss.appendChild(cardDiv2ss);


secmains.appendChild(sectioncard12ss);
























// 3 card

const sectioncard123sss = document.createElement('section');
sectioncard123sss.style.fontFamily = 'Arial';
sectioncard123sss.style.margin = '0';
sectioncard123sss.style.padding = '0'
sectioncard123sss.style.boxSizing = 'border-box';

 
// create card

const cardDiv23sss = document.createElement('div');
cardDiv23sss.style.width = '24rem';
cardDiv23sss.style.backgroundColor = '#f8f9fa';
cardDiv23sss.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

const figure23sss = document.createElement('figure');

const imgcard23sss = document.createElement('img');
imgcard23sss.style.width = '100%';
imgcard23sss.style.height = 'auto';
imgcard23sss.src = 'img\\158963690_138502788156911_8030880329979393987_n-e1638935919983-300x300.jpg'
figure23sss.appendChild(imgcard23sss);
cardDiv23sss.appendChild(figure23sss);

const card_body23sss = document.createElement('div');
card_body23sss.style.padding = '1.5rem';
const card_title23sss = document.createElement('h2');
card_title23sss.style.fontSize = '1.5rem';
card_title23sss.style.marginBottom = '1rem';

card_title23sss.innerText = 'Felix!';
card_body23sss.appendChild(card_title23sss);

const cardP23sss = document.createElement('p');
cardP23sss.innerText = 'If a cat chews shoes whose shoes does he choose?'
card_body23sss.appendChild(cardP23sss);
const buttondiv23sss = document.createElement('div');
buttondiv23sss.style.display = 'flex';
buttondiv23sss.style.justifyContent = 'flex-end';
buttondiv23sss.style.marginTop = '1rem';
const buttoncard23sss = document.createElement('button');
buttoncard23sss.innerText = 'Buy Now'
buttoncard23sss.style.padding = ' 0.5rem 1rem';
buttoncard23sss.style.fontSize ='1rem';
buttoncard23sss.style.cursor = 'pointer';
buttoncard23sss.style.backgroundColor = '#007bff';
buttoncard23sss.style.color = '#fff';
buttoncard23sss.style.border =  'none';
buttoncard23sss.style.borderRadius = '0.25rem'
buttondiv23sss.appendChild(buttoncard23sss);
card_body23sss.appendChild(buttondiv23sss);
cardDiv23sss.appendChild(card_body23sss);


sectioncard123sss.appendChild(cardDiv23sss);


secmains.appendChild(sectioncard123sss);





mainBox.appendChild(secmains);








mainBox.appendChild(section12s);









// Footer create



const  footer = document .getElementById('Footer');

const footerDiv = document.createElement('div');
footerDiv.style.padding = '80px'
footerDiv.style.backgroundColor = '#000000'
footerDiv.style.height = '300px'
footerDiv.style.textAlign = 'center';
const fh = document.createElement('h3');
fh.innerText = 'About   Contact   Paress kit'
fh.style.margin = '50px'
fh.style.color = '#fff';
footerDiv .appendChild(fh);
const fh1 = document.createElement('h3');
fh1.style.color = '#fff';
fh1.innerText = 'Providing  reliable tech since 1992'
fh1.style.margin = '50px'

footerDiv .appendChild(fh1);
const fh12 = document.createElement('h3');
fh12.style.color = '#fff';
fh12.innerText = 'Reliable';
fh12.style.margin = '50px'

footerDiv .appendChild(fh12);
const fh13 = document.createElement('h3');
fh13.style.color = '#fff';
fh13.innerText = 'Copyright © 2023 - Made by nahidul'
footerDiv .appendChild(fh13);




footer.appendChild(footerDiv);
