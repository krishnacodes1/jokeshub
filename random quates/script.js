
let array = [
    "<h3>What’s the best thing about Switzerland?</h3> I don’t know, but the flag is a big plus.",

    "<h3>What do dentists call their x-rays?</h3>Tooth pics!",

    "<h3>Did you hear about the fire at the circus? </h3>It was in tents!",

    "<h3>Why do ducks have feathers?</h3>To cover their butt quacks!",
   
    "<h3>What’s the difference between a hippo and a zippo?</h3>One is really heavy and the other’s a little lighter.",
   
    "<h3>What does a nosey pepper do?</h3> It gets jalapeño business.",
   
    "<h3>Why should you never trust stairs? </h3> They are always up to something.",
   
    "<h3>When does a joke become a ‘dad’ joke? </h3>When it becomes apparent.",
   
    "<h3>Why did the bullet end up losing his job? </h3>He got fired.",
   
    "<h3>What kind of shorts do clouds wear? </h3>Thunderpants",
   
    "<h3>I entered ten puns in a contest to see which would win.</h3> No pun in ten did.",

    "<h3>How do you measure a snake? </h3>In inches—they don’t have feet.",

    "<h3>What does a house wear?</h3> Address!",

    "<h3>Why are toilets always so good at poker? </h3>They always get a flush",

    "<h3>Why is Peter Pan always flying? </h3> Because he Neverlands. (I love this joke because it never grows old.",

    "<h3>You heard the rumor going around about butter? </h3> Never mind, I shouldn’t spread it.",

    "<h3>Two windmills are standing on a wind farm. One asks, ‘What’s your favorite kind of music?’ </h3>The other replies, ‘I’m a big metal fan.’",

    "<h3>Did you hear about the first restaurant to open on the moon?</h3> It had great food, but no atmosphere.",
  
    "<h3>Did you hear about the mathematician who’s afraid of negative numbers? </h3>He’ll stop at nothing to avoid them.",
  
    "<h3>Why do we tell actors to “break a leg?” </h3>Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor.",
  
    "<h3>Helvetica and Times New Roman walk into a bar. </h3>“Get out of here!” shouts the bartender. “We don’t serve your type.”",
  
      
  ];
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  let randomElement = getRandomElement(array);
  console.log(randomElement);
  
  document.getElementById("demo").innerHTML = randomElement;
  
  function refreshPage() {
    window.location.reload();
  }
  