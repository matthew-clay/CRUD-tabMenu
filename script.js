const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");
const contentContainerTag = document.querySelector(".contentContainer");

const demonSlayer = [
  {
    tabName: "Giyu Tomioka",
    image:
      "https://i.pinimg.com/236x/d8/20/b6/d820b66d389f59c3f4a0f6c14c50b522.jpg",
    description: `Nezuko is a petite young girl with fair skin, visibly large,
                  prominent fangs, and sharp, stiletto nails with a base color of
                  light pink and ombre fading to a red-pinkish color at the end where
                  they point. Her hair is long, black, and wavy. It reaches just below
                  her waist, turning a flame-orange color as it passes her elbows, and
                  appears to be crimped into large, straight ridges, worn side-swept
                  drastically to her left. She has soft-looking, pale pink eyes that
                  appear a lighter color around the rims of their irises, slanted
                  downward toward the sides of her face and framed by notably long
                  eyelashes, the pupils of which can appear slit as she transforms. In
                  the manga, Nezuko can sometimes be shown with more than one bow.
                  According to Tanjiro Kamado, Nezuko was known as a great beauty in
                  their home town.[3]`,
  },
  {
    tabName: "Nezuko Kamado",
    image:
      "https://i.pinimg.com/236x/f1/63/4c/f1634cb8eb173b08a9afeb4a28d4c10f.jpg",
    description: `Giyu always wears a stoic and unbothered expression on his face. He
                  has a reserved personality and a strong sense of justice with no
                  tolerance towards those who don't know their own limitations and
                  throw away their lives.[6] Despite letting Nezuko Kamado live due to
                  Tanjiro Kamado's persistence, he shows zero hesitation when killing
                  other demons and has no respect or mercy towards them like most
                  Demon Slayers.[7] Even so, Giyu violated the Demon Slayer Corps'
                  code of conduct when he protected Nezuko during Shinobu's attempt to
                  kill her. This implies that he doesn't completely despise demons as
                  some other Hashira do, and is willing to make an exception for a
                  demon by letting them live if they don't kill and eat humans. This
                  shows that he is more pragmatic in dealing with demons rather
                  letting his hatred cloud his judgement`,
  },
  {
    tabName: "Sakonji Urokodaki",
    image:
      "https://i.pinimg.com/236x/d7/9f/a6/d79fa697bfec454b6c5a269dc989901b.jpg",
    description: `Urokodaki is a set-up character. This means that your playstyle
                  should include using Master's Wisdom every time you can. For
                  instance, when your enemy is lying on the floor, put a trap near
                  him. Then go all the way around them and attack, leading the
                  opponent to your trap. Master's Wisdom is excellent for extending
                  combos, but avoid making it your first confirmed hit. It counts as a
                  heavy attack, which will limit your combo faster than the other
                  special abilities or regular combos. Contrary to other characters'
                  guard skills, Master's Wisdom doesn't make Urokodaki invincible
                  while he's performing it. Be careful when you are setting your
                  traps.`,
  },
  {
    tabName: "Kyojuro Rengoku",
    image:
      "https://i.pinimg.com/236x/02/c1/a0/02c1a014dfdd07ae600275878f059e8f.jpg",
    description: `Like every other fighter, Rengoku has three special attacks using
                  the skill button, and one Ultimate Art. His moves are based on flame
                  breathing techniques and his skills have an incredible range. His
                  skill attacks are the following ones: Fifth Form: Flame Tiger (skill
                  button): a series of attacks in form of a tiger that has an
                  outstanding range and deals massive damage. Third Form: Blazing
                  Universe (skill button + tilting the left stick to any direction): a
                  dash-in slash that makes the enemy bounce. You can keep attacking
                  after it. Second Form: Rising Scorching Sun (hold guard button +
                  skill button): a series of hits that launch the enemy into the air.
                  `,
  },
  {
    tabName: "Sabito",
    image:
      "https://i.pinimg.com/236x/4d/81/1d/4d811d5d5e7ff98992f824682c9e6342.jpg",
    description: `Sabito was a serious young man who believed that all of his actions
                should be becoming of a man. He was seen as a ruthless mentor during
                his time training Tanjiro Kamado, who was always quick to point out
                his flaws and refused to acknowledge him as a man. When asked about
                defeating the Hand Demon, Sabito appeared to have a pessimistic view
                on conflicts, saying he believed that no matter how hard someone
                tries it will never be enough to take the beast down.`,
  },
];

const handleTabChange = (event) => {
  // console.log("id:", event.target.id);
  const clickedTabId = event.target.id;
  const clickedLiTag = document.getElementById(clickedTabId);
  // console.log("clickedLiTag:", clickedLiTag);
  const clickedLiTagWidth = clickedLiTag.offsetWidth;
  const clickedLiTagOffsetLeft = clickedLiTag.offsetLeft;
  // console.log(clickedLiTagOffsetLeft);
  sliderTag.style.width = clickedLiTagWidth + "px";
  sliderTag.style.transform = `translateX(${clickedLiTagOffsetLeft}px)`;

  if (clickedTabId === "1") {
    makeImgAndDescription(demonSlayer[0].image, demonSlayer[0].description);
  } else if (clickedTabId === "2") {
    makeImgAndDescription(demonSlayer[1].image, demonSlayer[1].description);
  } else if (clickedTabId === "3") {
    makeImgAndDescription(demonSlayer[2].image, demonSlayer[2].description);
  } else if (clickedTabId === "4") {
    makeImgAndDescription(demonSlayer[3].image, demonSlayer[3].description);
  } else if (clickedTabId === "5") {
    makeImgAndDescription(demonSlayer[4].image, demonSlayer[4].description);
  } else {
    console.error("clicked id is not found...");
  }
};

for (let i = 0; i < demonSlayer.length; i++) {
  const liTag = document.createElement("li");
  liTag.append(demonSlayer[i].tabName.toUpperCase());
  liTag.id = i + 1;
  liTag.addEventListener("click", handleTabChange);
  ulTag.append(liTag);

  if (i === 0) {
    sliderTag.style.width = liTag.offsetWidth + "px";
  }
}

const makeImgAndDescription = (img, text) => {
  contentContainerTag.innerHTML = "";
  const contentTag = document.createElement("div");
  contentTag.classList.add("content");

  const imgTag = document.createElement("img");
  imgTag.classList.add("img");
  imgTag.src = img;

  const descriptionContainerTag = document.createElement("div");
  descriptionContainerTag.classList.add("description");
  const descriptionParaTag = document.createElement("p");
  descriptionParaTag.append(text);
  descriptionContainerTag.append(descriptionParaTag);
  contentTag.append(imgTag, descriptionContainerTag);
  contentContainerTag.append(contentTag);
};
