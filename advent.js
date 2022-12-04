const rawData = ``.split("\n\n").map(
    (radek) => radek.split("\n").map(item=> parseInt(item,10)).reduce(
        (carry, item ) => carry + item, 0
    )

);

console.log(Math.max(...elfove));


