const liens = document.getElementsByClassName('lien');

const images = {
  lien1: { hover: 'https://s1.qwant.com/thumbr/474x355/0/f/13b6f36c35135df72b798bf5d7803bc3ca4b2ce61df84567496e8cfa8ba532/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.8LO8y-SxH6rq694drmycfQHaFj%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien2: { hover: 'https://s1.qwant.com/thumbr/474x296/3/c/d87440ee3b3f31ff7588c7a38689bb28902f5552d43dfb661dd67d56576660/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.MDr35nRLu_3LMvghJAV6ewHaEo%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien3: { hover: 'https://s1.qwant.com/thumbr/474x315/3/8/43dc8358fb461863ba6d5529c9374fe6a98bed8f2971db9ee622dfaad12e79/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.g6cwVXKZlAt7_bIyVl-HAwHaE7%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien4: { hover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNBleF33xJcdbU5nDdd_aTMTJhaFQk2J1mw&s' },
  lien5: { hover: 'https://s1.qwant.com/thumbr/474x266/1/3/1b7d69b75bb005435a4293b8c08bc21e50ee859a8cef2ebf95c345f40c45a9/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.420Ih5dwDuJmCdCKw5DfrAHaEK%26r%3D0%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien6: { hover: 'https://s2.qwant.com/thumbr/474x235/4/5/2750529b8adc368f6e3fb9eb99d3d4f7e456d21870c4c77449fe53687fd940/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.PNmPnddDq3sYnBD5o5e8pwHaDr%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien7: { hover: 'https://s2.qwant.com/thumbr/474x315/4/e/3d6d8d34effbf4bc25184a69ba54a547238993b3376425c3ab214b86c8d504/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.Uzts0q5Zypgyuqb5MA4bmQHaE7%26pid%3DApi&q=0&b=1&p=0&a=0' },
  lien8: { hover: 'https://s2.qwant.com/thumbr/474x312/7/1/e16bcd07b638cdee6ea57a5cc6f6f48dab1cb2461470a429306c48a3939f3d/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.glY8oOee9Lclz_43kgdnfwHaE4%26pid%3DApi&q=0&b=1&p=0&a=0' },
};

Array.from(liens).forEach(function(lien) {
  const lienId = lien.id;
  lien.addEventListener('mouseover', function() {
    document.body.style.backgroundImage = `url(${images[lienId].hover})`;
  });
});