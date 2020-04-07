counter = 0;
var cart = [];

var book = [
    {
        id: 1,
        name: "The Alchemist",
        author: "Paulo Coelho",
        image: "alchemist.jpg",
        desc:
            "Paulo Coelho's enchanting novel has inspired a devoted following around the world.",
        price: 150
    },
    {
        id: 2,
        name: "1984",
        author: "George Orwell",
        image: "1984.jpg",
        desc:
            "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.",
        price: 180
    },
    {
        id: 3,
        name: "The Great Gatsby",
        image: "gatsby.jpg",
        author: "F.Scott Fitzgerald",
        desc:
            "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career.",
        price: 200
    },
    {
        id: 4,
        name: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        image: "oldman.jpg",
        desc:
            "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction",
        price: 200
    },
    {
        id: 5,
        name: "The Hobbit There and Back Again",
        author: "J.R.R. Tolkien",
        image: "hobbit.jpg",
        desc:
            "Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937.",
        price: 300
    },
    {
        id: 6,
        name: "Murder on the Orient Express",
        author: "Agatha Christie",
        image: "orient.jpg",
        desc:
            "Le lendemain, dans une voiture de l’Orient-Express bloqué par les neiges yougoslaves, on découvre le cadavre d’un américain lardé de douze coups de couteau.",
        price: 250
    },
    {
        id: 7,
        name: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        image: "price.jpg",
        desc:
            "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language.",
        price: 220
    },
    {
        id: 8,
        name: "The Metamorphosis",
        author: "Franz Kafka",
        image: "meta.jpg",
        desc:
            "With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis",
        price: 350
    },
    {
        id: 9,
        name: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        image: "sherlock.jpg",
        desc:
            "In A Study in Scarlet , Holmes and Watson's first mystery, the pair are summoned to a south London house where they find a dead man whose contorted face is a twisted mask of horror.",
        price: 350
    },
    {
        id: 10,
        name: "Do Androids Dream of Electric Sheep?",
        author: "Philip K.Dick",
        image: "blade.jpg",
        desc:
            "Somewhere among the hordes of humans out there, lurked several rogue androids",
        price: 450
    },
    {
        id: 11,
        name: "Chess Story",
        author: "Stefan Zweig",
        image: "chess.jpg",
        desc:
            "Chess Story, also known as The Royal Game, is the Austrian master Stefan Zweig's final achievement, completed in Brazilian exile and sent off to his American publisher only a matter of days before his suicide in 1942",
        price: 300
    },
    {
        id: 12,
        name: "The Time Machine",
        author: "H.G. Wells",
        image: "time.jpg",
        desc:
            "So begins the Time Traveller’s astonishing firsthand account of his journey 800,000 years beyond his own era",
        price: 450
    }
];

function des(m) {
    console.log(m);
    var i = book.findIndex(b => {
        return b.id == m;
    });

    document.getElementById("myModal").style.display = "block";
    document.getElementById("bod").innerText = book[i].desc;
    document.getElementById("mod-tit").innerText = book[i].name;
    console.log("hi");
}

function clo() {
    document.getElementById("myModal").style.display = "none";
}

function clo1() {
    var n = document.getElementById("ordersTable").rows.length;
    console.log(n);
    n = n - 1;
    while (n > -1) {
        document.getElementById("ordersTable").deleteRow(n);
        n--;
    }
    document.getElementById("cartModal").style.display = "none";
}

function ad(m) {
    counter++;

    var i = book.findIndex(b => {
        return b.id == m;
    });
    cart.push(book[i]);

    var i = cart.findIndex(b => {
        return b.id == m;
    });
    cart[i].count = 1;

    var c = document.getElementById("count");
    c.innerText = counter;
    var n1 = "added" + m;
    var n2 = "add" + m;
    console.log(n2);
    document.getElementById(n2).style.display = "none";
    document.getElementById(n1).style.display = "inline-block";
}

function aded(m) {
    counter--;

    var i = cart.findIndex(b => {
        return b.id == m;
    });

    cart.splice(i, 1);

    var c = document.getElementById("count");
    if (counter == 0) c.innerText = "";
    else c.innerText = counter;
    var n1 = "added" + m;
    var n2 = "add" + m;
    document.getElementById(n1).style.display = "none";
    document.getElementById(n2).style.display = "inline-block";
}

function mycart() {
    console.log(cart);
    cart.forEach(i => {
        var table = document
            .getElementById("ordersTable")
            .getElementsByTagName("tbody")[0];
        var row = table.insertRow(table.rows.length);

        var name = row.insertCell(0);
        var but1 = row.insertCell(1);
        var cou = row.insertCell(2);
        var but2 = row.insertCell(3);
        var price = row.insertCell(4);

        name.innerText = i.name;
        but1.innerHTML =
            "<button class='buto1 hov mov-rt' type='button' onclick = 'minus(" +
            i.id +
            ")'>-</button>";
        cou.innerText = i.count;
        but2.innerHTML =
            "<button class='buto1 hov' type='button' onclick = 'plus(" +
            i.id +
            ")'>+</button>";
        price.innerText = i.price + "$";
        console.log(name);
    });
    document.getElementById("cartModal").style.display = "block";

    tot();
}

function plus(m) {
    var i = cart.findIndex(s => {
        return s.id == m;
    });
    var x = document.getElementById("ordersTable").rows[i].cells[2];
    x.innerText = Number(x.innerText) + 1;
    cart[i].count = Number(x.innerText);
    console.log(cart[i].name + " " + cart[i].count);

    tot();
}

function minus(m) {
    var i = cart.findIndex(s => {
        return s.id == m;
    });
    var x = document.getElementById("ordersTable").rows[i].cells[2];
    x.innerText = Number(x.innerText) - 1;

    if (x.innerText == 0) {
        document.getElementById("ordersTable").deleteRow(i);
        cart.splice(i, 1);
        counter--;
        var c = document.getElementById("count");
        if (counter == 0) c.innerText = "";
        else c.innerText = counter;
        var n1 = "added" + m;
        var n2 = "add" + m;
        document.getElementById(n1).style.display = "none";
        document.getElementById(n2).style.display = "inline-block";
    } else {
        cart[i].count = Number(x.innerText);
        console.log(cart[i].name + " " + cart[i].count);
    }
    console.log(cart);
    tot();
}

function tot() {
    var sum = 0;
    cart.forEach(i => {
        sum = sum + i.count * i.price;
    });
    document.getElementById("total").innerText = sum + "$";
}

window.onload = function() {
    c = 1;
    for (i in book) {
        //console.log(book[i]);
        setUpCard(book[i]);
    }
    for (i in book) {
        //console.log(book[i]);
        document.getElementById();
    }
};

var c;

function setUpCard(b) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("zom");
    card.classList.add("bounceIn");
    card.classList.add("mt-5");

    card.style.width = "18rem";

    let cardImageTop = document.createElement("img");
    cardImageTop.src = "Images/images/" + b.image;
    cardImageTop.classList.add("card-img-top");
    cardImageTop.classList.add("pic2");
    card.appendChild(cardImageTop);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.classList.add("col-blue1");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let cardTitleStr = document.createTextNode(b.name);
    cardTitle.appendChild(cardTitleStr);
    cardBody.appendChild(cardTitle);

    let cardPrice = document.createElement("h5");
    //cardPrice.style.display = "inline-block";
    //cardPrice.style.float = "right";
    //cardPrice.style.color = "green";
    let cardPriceStr = document.createTextNode(b.price + "$");
    cardBody.appendChild(cardPriceStr);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextStr = document.createTextNode(b.desc);
    cardText.appendChild(cardTextStr);
    cardBody.appendChild(cardText);

    let cardButton1 = document.createElement("button");
    cardButton1.classList.add("btn");
    cardButton1.classList.add("btn-primary");
    cardButton1.classList.add("col-blue");
    cardButton1.classList.add("hov");
    cardButton1.setAttribute("data-id", "desc");
    cardButton1.setAttribute("type", "button");
    cardButton1.onclick = des.bind(cardButton1, b.id);
    let cardButton1Str = document.createTextNode("Know More");
    cardButton1.appendChild(cardButton1Str);
    cardBody.appendChild(cardButton1);

    let cardButton2 = document.createElement("button");
    cardButton2.classList.add("btn");
    cardButton2.classList.add("btn-primary");
    cardButton2.classList.add("col-blue");
    cardButton2.classList.add("hov");
    cardButton2.setAttribute("id", "add" + b.id);
    //console.log(cardButton2.getAttribute("id"));
    cardButton2.setAttribute("type", "button");
    cardButton2.onclick = ad.bind(cardButton2, b.id);
    let cardButton2Str = document.createTextNode("Add To Cart");
    cardButton2.appendChild(cardButton2Str);
    cardBody.appendChild(cardButton2);

    let cardButton3 = document.createElement("button");
    cardButton3.classList.add("btn");
    cardButton3.classList.add("btn-primary");
    cardButton3.classList.add("col-blue");
    cardButton3.classList.add("hov");
    cardButton3.classList.add("dis-no");
    cardButton3.setAttribute("id", "added" + b.id);
    //console.log(cardButton3.getAttribute("id"));
    cardButton3.setAttribute("type", "button");
    cardButton3.onclick = aded.bind(cardButton3, b.id);
    let cardButton3Str = document.createTextNode("Added To Cart");
    cardButton3.appendChild(cardButton3Str);
    cardBody.appendChild(cardButton3);

    card.appendChild(cardBody);

    if (c > 3) c = 1;

    if (c <= 3) {
        var m = "col" + c;
        console.log(m);
        document.getElementById(m).appendChild(card);
        c++;
    }
}

function srch() {
    var s = document.getElementById("search").value.toString();
    var m = s.toLowerCase();

    var i = book.findIndex(b => {
        var p = b.author;
        var k = p.toLowerCase();
        console.log(k);
        return k == m;
    });

    document.getElementById("search").value = "";
    if (i == -1) {
        alert("Currently Out of Stock!");
        return;
    }
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
    document.getElementById("col3").innerHTML = "";

    setUpCard(book[i]);
}

function showall() {
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
    document.getElementById("col3").innerHTML = "";
    c = 1;
    for (i in book) {
        console.log(i);
        setUpCard(book[i]);
    }
}
