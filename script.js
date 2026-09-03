/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");


musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play()
            .then(() => {

                musicBtn.innerHTML =
                    "🔇 Music Off";

            })
            .catch(() => {

                alert(
                    "Music start नहीं हुआ। फिर से Music On दबाएँ।"
                );

            });

    } else {

        music.pause();

        musicBtn.innerHTML =
            "🎵 Music On";
    }

});



/* =========================
   FALLING FLOWERS
========================= */

const flowerBox =
    document.getElementById("flowers");


const flowerList = [
    "🌸",
    "🌼",
    "🌺",
    "🌷"
];


function createFlower() {

    const flower =
        document.createElement("div");

    flower.className =
        "flower";

    flower.innerText =
        flowerList[
        Math.floor(
            Math.random() *
            flowerList.length
        )
        ];

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.fontSize =
        (16 + Math.random() * 14) + "px";

    flower.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    flowerBox.appendChild(flower);


    setTimeout(() => {

        flower.remove();

    }, 11000);
}


setInterval(
    createFlower,
    650
);



/* =========================
   FIREFLIES
========================= */

const fireflyBox =
    document.getElementById("fireflies");


for (let i = 0; i < 35; i++) {

    const firefly =
        document.createElement("div");

    firefly.className =
        "firefly";

    firefly.style.left =
        Math.random() * 100 + "%";

    firefly.style.top =
        Math.random() * 100 + "%";

    firefly.style.animationDelay =
        Math.random() * 5 + "s";

    fireflyBox.appendChild(firefly);
}



/* =========================
   STORY POPUP
========================= */

const storyBtn =
    document.getElementById("storyBtn");

const storyModal =
    document.getElementById("storyModal");

const closeStory =
    document.getElementById("closeStory");


storyBtn.addEventListener("click", () => {

    storyModal.style.display =
        "flex";

});


closeStory.addEventListener("click", () => {

    storyModal.style.display =
        "none";

});


storyModal.addEventListener("click", (event) => {

    if (event.target === storyModal) {

        storyModal.style.display =
            "none";

    }

});



/* =========================
   PHOTO POPUP
========================= */

const photos =
    document.querySelectorAll(
        ".krishna-photo"
    );

const photoModal =
    document.getElementById(
        "photoModal"
    );

const bigPhoto =
    document.getElementById(
        "bigPhoto"
    );

const closePhoto =
    document.getElementById(
        "closePhoto"
    );


photos.forEach(photo => {

    photo.addEventListener(
        "click",
        () => {

            bigPhoto.src =
                photo.src;

            photoModal.style.display =
                "flex";

        }
    );

});


closePhoto.addEventListener(
    "click",
    () => {

        photoModal.style.display =
            "none";

    }
);


photoModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            photoModal
        ) {

            photoModal.style.display =
                "none";

        }

    }
);

/* =================================
   STORY FIREFLIES
================================= */

const storyFireflyBox =
    document.querySelector(".story-fireflies");


for (let i = 0; i < 35; i++) {

    const firefly =
        document.createElement("span");

    firefly.className =
        "story-firefly";


    /* अलग-अलग जगह */

    firefly.style.left =
        Math.random() * 100 + "%";

    firefly.style.top =
        Math.random() * 100 + "%";


    /* अलग-अलग speed */

    firefly.style.animationDuration =
        (2 + Math.random() * 5) +
        "s";


    /* अलग-अलग delay */

    firefly.style.animationDelay =
        Math.random() * 4 +
        "s";


    storyFireflyBox.appendChild(
        firefly
    );

}