const randomNumbers: number[] = [45, 28, 1, 2, 3, 100];

const randomNumbersFiltered: number[] = randomNumbers.filter(randomNumber => {
    return randomNumber > 5;
});

console.log(randomNumbersFiltered);

const words: string[] = ['Limits', 'Elite', 'Saulessargs', 'Lietussargs'];

const longWords: string[] = words.filter(word => word.length > 6);
console.log(longWords);

interface ShopItem {
    id: number;
    title: string;
    isAvailable: boolean;
    type: string;
}

const shopItems: ShopItem[] = [
    {
        id: 1,
        title: 'Grāmata',
        isAvailable: true,
        type: 'books'
    },
    {
        id: 2,
        title: 'TV',
        isAvailable: true,
        type: 'electronics'
    }
];

const findShopItems: ShopItem[] = shopItems.filter(shopItem => shopItem.id === 1);
console.log(findShopItems);

const availableItems: ShopItem[] = shopItems.filter(shopItem => shopItem.isAvailable === true);
console.log(availableItems);